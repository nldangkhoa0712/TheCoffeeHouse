import { configureStore } from "@reduxjs/toolkit";
import userTest from "../slices/userSlice";

export default configureStore({
    reducer: {
        test: userTest
    }
})