import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth/auth";
import cloth from "./cloth/cloth";
export const store = configureStore({
    reducer:{
        cloth,
        auth
    }
})