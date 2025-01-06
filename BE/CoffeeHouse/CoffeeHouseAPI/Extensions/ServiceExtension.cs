namespace CoffeeHouseAPI.Extensions
{
    public static class ServiceExtension
    {
        public static void Register(this IServiceCollection services, IConfiguration configuration)
        {
            // Đăng ký các dịch vụ
            ServiceRegister(services, configuration);
        }

        private static void ServiceRegister(IServiceCollection services, IConfiguration configuration)
        {
            
        }
    }
}
