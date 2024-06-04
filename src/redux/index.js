import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth/auth";
import products from "./products/products";
export const store = configureStore({
    reducer:{
        products,
        auth
    }
})