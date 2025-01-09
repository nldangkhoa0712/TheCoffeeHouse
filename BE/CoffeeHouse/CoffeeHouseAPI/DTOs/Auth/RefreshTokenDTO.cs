namespace CoffeeHouseAPI.DTOs.Auth
{
    public class RefreshTokenDTO
    {
        public string RefreshToken { get; set; } = null!;

        public DateTime? Expire { get; set; }

        public DateTime? Created { get; set; }

        public DateTime? Revoke { get; set; }
    }
}
