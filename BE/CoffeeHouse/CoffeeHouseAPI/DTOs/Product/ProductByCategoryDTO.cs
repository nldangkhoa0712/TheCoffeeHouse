﻿using CoffeeHouseAPI.DTOs.Category;
using CoffeeHouseAPI.DTOs.Image;

namespace CoffeeHouseAPI.DTOs.Product
{
    public class ProductByCategoryDTO
    {
        public CategoryResponseDTO Category { get; set; } = null!;
        public List<ProductResponseDTO> Products { get; set; } = null!;

    }
}
