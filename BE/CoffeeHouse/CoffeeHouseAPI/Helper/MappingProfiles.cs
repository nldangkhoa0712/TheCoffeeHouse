using AutoMapper;
using CoffeeHouseAPI.DTOs.Auth;
using CoffeeHouseLib.Models;

namespace OrderService.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<CreateAccountRequest, Account>();
            CreateMap<Account, CreateAccountRequest>();
            CreateMap<Customer, CreateAccountRequest>();
            CreateMap<CreateAccountRequest, Customer>();

            CreateMap<RefreshTokenDTO, RefreshToken>();
            CreateMap<RefreshToken, RefreshTokenDTO>();
        }
    }
}
