using CoffeeHouseLib.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeHouseAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : TCHControllerBase
    {

        readonly DbcoffeeHouseContext _context;
        public ProductController(DbcoffeeHouseContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //[Route("GetProduct")]
        //public IActionResult GetProduct([FromQuery] int? category)
        //{
        //    if (category != null)
        //    {
        //        var category 
        //    }
        //}

    }
}
