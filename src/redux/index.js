import {configureStore} from "@reduxjs/toolkit";
import cloth from "./cloth/cloth"

export const store = configureStore({
    reducer:{
        cloth
    }
})