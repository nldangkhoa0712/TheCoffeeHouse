using AutoMapper;
using Azure.Core;
using CoffeeHouseAPI.DTOs.APIPayload;
using CoffeeHouseAPI.DTOs.Category;
using CoffeeHouseAPI.DTOs.Image;
using CoffeeHouseAPI.DTOs.Product;
using CoffeeHouseAPI.Enums;
using CoffeeHouseAPI.Helper;
using CoffeeHouseAPI.Services.Firebase;
using CoffeeHouseLib.Models;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Storage.V1;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Collections.Generic;

namespace CoffeeHouseAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : TCHControllerBase
    {

        readonly DbcoffeeHouseContext _context;
        readonly IMapper _mapper;
        readonly FirebaseService _firebaseService;

        public ProductController(DbcoffeeHouseContext context, IMapper mapper, FirebaseService firebaseService)
        {
            _context = context;
            _mapper = mapper;
            _firebaseService = firebaseService;
        }

        [HttpGet]
        [Route("GetProduct")]
        public async Task<IActionResult> GetProduct([FromQuery] int? idCateogry)
        {
            var categories = await _context.Categories.Include(x => x.Products).Where(x => x.IdParent != null && x.Products.Count != 0).ToListAsync();
            if (idCateogry != null) {
                categories = categories.Where(x => x.Id == idCateogry).ToList();
            }

            List<ProductByCategoryDTO> products = new List<ProductByCategoryDTO>();
            foreach (var category in categories) {
                ProductByCategoryDTO productResponseDTO = new ProductByCategoryDTO();
                productResponseDTO.Category = _mapper.Map<CategoryResponseDTO>(category);
                var productByCateogry = _context.Products.Include(x => x.Images.Take(1)).Where(x => x.CategoryId == category.Id).ToList();
                productResponseDTO.Products = _mapper.Map<List<ProductResponseDTO>>(productByCateogry);
                products.Add(productResponseDTO);
            }
            return Ok(products);
        }

        [HttpPost]
        [Route("AddProduct")]
        public async Task<IActionResult> AddProduct([FromBody] ProductRequestDTO request)
        {
            if (request.Images.Count == 0)
                return BadRequest(new APIResponseBase {
                    IsSuccess = false,
                    Message = "Insert at least one images",
                    Status = (int)StatusCodes.Status400BadRequest
                });

            if (request.Sizes.Count == 0)
                return BadRequest(new APIResponseBase {
                    IsSuccess = false,
                    Message = "Insert at least one sizes",
                    Status = (int)StatusCodes.Status400BadRequest
                });

            var newProduct = _mapper.Map<Product>(request);
            newProduct.IsValid = true;

            // Add image to firebase
            List<Image> images = await AddImageToFirebase(request.Images);  

            // Add image to database
            _context.Images.AddRange(images);
            await this.SaveChanges(_context);

            // Add product
            newProduct.Images = images;
            _context.Products.Add(newProduct);
            await this.SaveChanges(_context);

            // Add product size
            List<ProductSize> productSizes = _mapper.Map<List<ProductSize>>(request.Sizes);
            foreach (var productSize in productSizes) {
                productSize.ProductId = newProduct.Id;
            }
            _context.ProductSizes.AddRange(productSizes);
            await this.SaveChanges(_context);

            ProductResponseDTO productDTO = _mapper.Map<ProductResponseDTO>(newProduct);

            return Ok(new APIResponseBase {
                IsSuccess = true,
                Status = (int)StatusCodes.Status200OK,
                Message = "Add product success",
                Value = productDTO
            });
        }

        [HttpPost]
        [Route("UpdateProduct")]
        public async Task<IActionResult> UpdateProduct([FromQuery] int idProduct, [FromBody] ProductRequestDTO request)
        {
            var product = await _context.Products.Include(x => x.Images).FirstOrDefaultAsync(x => x.Id == idProduct);
            if (product == null) {
                return BadRequest(new APIResponseBase {
                    IsSuccess = false,
                    Status = (int)StatusCodes.Status400BadRequest,
                    Message = "Product is not existed"
                });
            }

            // Add image to firebase
            List<Image> images = await AddImageToFirebase(request.Images);

            // Add new image to database
            _context.Images.AddRange(images);
            await this.SaveChanges(_context);

            // Remove old product size
            var oldProductSizes = _context.ProductSizes.Where(x => x.ProductId == product.Id).ToList();
            foreach (var oldProductSize in oldProductSizes) {
                oldProductSize.IsValid = false;
            }
            await this.SaveChanges(_context);

            // Add new product size
            List<ProductSize> newProductSizes = _mapper.Map<List<ProductSize>>(request.Sizes);
            foreach (var newProductSize in newProductSizes) {
                newProductSize.ProductId = product.Id;
                newProductSize.IsValid = true;
            }
            _context.ProductSizes.AddRange(newProductSizes);
            await this.SaveChanges(_context);

            // Remove old product image
            product.Images.Clear();
            await this.SaveChanges(_context);

            // Add new product image
            product.Images = images;

            // Update product info
            #region Set value
            product.ProductName = request.ProductName;
            product.CategoryId = request.CategoryId;
            product.Description = request.Description;
            product.IsValid = request.IsValid;
            #endregion
            await this.SaveChanges(_context);

            var productDTO = _mapper.Map<ProductResponseDTO>(product);

            await this.SaveChanges(_context);
            return Ok(new APIResponseBase {
                Status = (int)StatusCodes.Status200OK,
                Message = GENERATE_DATA.API_ACTION_RESPONSE(true, API_ACTION.PUT),
                Value = productDTO
            });
        }

        private async Task<List<Image>> AddImageToFirebase(List<ImageRequestDTO> imageRequestDTO)
        {
            List<Image> images = _mapper.Map<List<Image>>(imageRequestDTO);
            for (int i = 0; i < imageRequestDTO.Count; i++) {
                string url = await _firebaseService.UploadImageAsync(imageRequestDTO[i]);
                images[i].FirebaseImage = url;
            }

            return images;
        }
    }
}
