using AutoMapper;
using CoffeeHouseAPI.DTOs.APIPayload;
using CoffeeHouseAPI.DTOs.Topping;
using CoffeeHouseAPI.Enums;
using CoffeeHouseAPI.Helper;
using CoffeeHouseLib.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoffeeHouseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToppingController : TCHControllerBase
    {
        readonly DbcoffeeHouseContext _context;
        readonly IMapper _mapper;
        public ToppingController(DbcoffeeHouseContext context, IMapper mapper)
        {
            this._context = context;
            this._mapper = mapper;
        }

        [HttpGet]
        [Route("GetTopping")]
        public async Task<IActionResult> GetTopping()
        {
            var toppings = await _context.Toppings.ToListAsync();
            List<ToppingDTO> toppingDTOs = _mapper.Map<List<ToppingDTO>>(toppings);
            return Ok(new APIResponseBase {
                Status = (int)StatusCodes.Status200OK,
                Value = toppingDTOs,
                Message = GENERATE_DATA.API_ACTION_RESPONSE(true, API_ACTION.GET)
            });
        }

        [HttpGet]
        [Route("GetToppingById")]
        public async Task<IActionResult> GetToppingById([FromQuery]int id)
        {
            var topping = await _context.Toppings.FindAsync(id);

            if (topping == null) { 
                return NotFound(new APIResponseBase {
                    IsSuccess = false,
                    Message = GENERATE_DATA.API_ACTION_RESPONSE(false, API_ACTION.GET),
                    Status = (int)StatusCodes.Status404NotFound,
                });
            }

            ToppingDTO toppingDTO = _mapper.Map<ToppingDTO>(topping);
            return Ok(new APIResponseBase {
                Status = (int)StatusCodes.Status200OK,
                Value = toppingDTO,
                Message = GENERATE_DATA.API_ACTION_RESPONSE(true, API_ACTION.GET)
            });
        }
    }
}
