import { axiosCallAPI } from "../axios/axiosCallAPI";

const testRequest = async () => {
    try {
        const response = await axiosCallAPI.get('https://jsonplaceholder.typicode.com/todos/1'); // Dùng một URL miễn phí để test
        console.log(response.data); // In ra kết quả nếu request thành công
    } catch (error) {
        console.error(error); // In ra lỗi nếu request thất bại
    }
};

testRequest();
