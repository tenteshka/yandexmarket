import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_,{rejectWithValue}) => {
        try {
            const res = await axios('http://localhost:4444/products')
            if(res.statusText !== 'OK'){
                throw new Error("Server error !")
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: "",
        error: "",
        dataLength: 0
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "resolve";
                state.error = "";
                state.data = action.payload;
                state.dataLength = action.payload.length;
            })
    },
})

export default productsSlice.reducer
