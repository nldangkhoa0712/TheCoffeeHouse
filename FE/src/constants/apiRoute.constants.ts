export const apiRouteConstants = {
    //Auth
    LOGIN: '/Auth/Login',
    REGISTER: '/Auth/Register',
    RESEND: '/Auth/ResendOtp',
    VERIFY: '/Auth/VerifyAccount',
    FORGOTPASSWORD: '/Auth/ForgotPassword',
    SETNEWPASSWORD: '/Auth/SetNewPassword',

    //Product
    GETALLPRODUCT: '/Product/GetProduct',
    GETALLCATEGORY: '/Category/GetCateogry',
    ADDPRODUCT: '/Product/AddProduct',
    GETPRODUCTDETAIL: '/Product/GetProductDetail',
    GETRECOMMENDPRODCUT: '/Product/GetRecommendProduct',

    //Cart
    ADDTOCART: '/Cart/AddToCart',
    GETCART: '/Cart/GetCart',
    CREATEORDER: "/Order/CreateOrderFromCart",

    //Address
    GETADDRESS: '/Address/GetAddress',
    ADDADDRESS: '/Address/AddAddress',
    UPDATEADDRESS: '/Address/UpdateAddress',
    DELETEADDRESS: '/Address/DeleteAddress',

    //User
    GETINFOUSER: '/Customer/GetUserInformation',

    //ChatBox
    CHATWITHAI: '/AI/RecommendAI',

    //Voucher
    VOUCHER: "/Voucher/CustomerVoucher",

    //Review
    GETREVIEW: '/Review/GetReview',
    ADDREVIEW: '/Review/AddReview'
}