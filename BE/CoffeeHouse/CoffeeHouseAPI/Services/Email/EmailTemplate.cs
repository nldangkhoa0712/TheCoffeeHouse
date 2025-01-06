using Microsoft.Identity.Client;

namespace CoffeeHouseAPI.Services.Email
{
    public static class EMAIL_TEMPLATE
    {
        public static string SendOtpTemplate(string otpString)
        {
            return string.Format(@"
                <!DOCTYPE html>
                <html>
                <head>
                <title>Page Title</title>
                </head>
                <body>
                <p><strong>Kính gửi khách hàng.</strong></p>
                <p>Mã OTP xác nhận tài khoản của bạn là: <strong style=""color: black;"">{0}</strong></p>
                <p><strong> Thông tin chi tiết như sau:</strong></p>
                <i>Đây là email tự động từ hệ thống Coffee House, vui lòng không phản hồi.</i>
                <p>Trân trọng cảm ơn đã sử dụng dịch vụ của Coffee House.</p>
                </body>
                </html>
            ", otpString);
        }
    }
}
