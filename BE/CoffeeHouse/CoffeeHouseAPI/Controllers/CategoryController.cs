using AutoMapper;
using CoffeeHouseAPI.DTOs.APIPayload;
using CoffeeHouseAPI.DTOs.Category;
using CoffeeHouseAPI.Enums;
using CoffeeHouseAPI.Helper;
using CoffeeHouseLib.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoffeeHouseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : TCHControllerBase
    {
        readonly DbcoffeeHouseContext _context;
        readonly IMapper _mapper;

        public CategoryController(DbcoffeeHouseContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetCateogry")]
        public async Task<IActionResult> GetCateogry()
        {
            var category = await _context.Categories.ToListAsync();
            List<CategoryResponseDTO> categoryDTO = _mapper.Map<List<CategoryResponseDTO>>(category);
            return Ok(new APIResponseBase
            {
                Status = (int)StatusCodes.Status200OK,
                Value = categoryDTO,
                Message = "Get cateogry success",
                IsSuccess = true
            });
        }

        [HttpGet]
        [Route("GetCateogryById")]
        public async Task<IActionResult> GetCateogryById([FromQuery] int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return BadRequest(new APIResponseBase
                {
                    Status = (int)StatusCodes.Status400BadRequest,
                    Message = "Get cateogry failed",
                    IsSuccess = false
                });
            }
            CategoryResponseDTO categoryDTO = _mapper.Map<CategoryResponseDTO>(category);
            return Ok(new APIResponseBase
            {
                Status = (int)StatusCodes.Status200OK,
                Value = categoryDTO,
                Message = "Get cateogry success",
                IsSuccess = true
            });
        }

        [HttpPut]
        [Route("UpdateCategory")]
        public async Task<IActionResult> UpdateCategory([FromQuery] int id, [FromBody] CategoryRequestDTO categoryDTO)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return BadRequest(new APIResponseBase
                {
                    Status = (int)StatusCodes.Status400BadRequest,
                    Value = null,
                    Message = "Update Failed",
                    IsSuccess = false
                });
            }

            category.IdParent = categoryDTO.IdParent;
            category.CategoryName = categoryDTO.CategoryName;
            await this.SaveChanges(_context);

            var categoryResponseDTO  = _mapper.Map<CategoryResponseDTO>(category);

            return Ok(new APIResponseBase
            {
                Status = (int)StatusCodes.Status200OK,
                Value = categoryResponseDTO,
                Message = GENERATE_DATA.API_ACTION_RESPONSE(true, API_ACTION.PUT),
                IsSuccess = true
            });
        }
    }
}
