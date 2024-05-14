import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCloth = createAsyncThunk(
    "cloth/getCloth",
    async (filter,{rejectWithValue}) => {
        try {
            const res = await axios ('')
            if(res.statusText !== 'OK'){
                throw new Error("Server error !")
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const clothSlice = createSlice({
    name: "cloth",
    initialState: {
        data: [],
        dataLength: 0,
        filter: {},
    },
        reducers: {

        },
        extraReducers: (builder) => {
            builder
                .addCase(getCloth.pending, (state, action) => {
                    state.status = "loading";
                    state.error = "";
                })
                .addCase(getCloth.rejected, (state, action) => {
                    state.status = "error";
                    state.error = action.payload;
                })
                .addCase(getCloth.fulfilled, (state, action) => {
                    state.status = "resolve";
                    state.error = "";
                    state.data = action.payload;
                    state.dataLength = action.payload.length;
                })
        },
})

export const {changeYear,changeGenre,changeContent,changeCountry,changeCategory,changePrice,getFavorites,deleteFavorite,getLikes,deleteLikes,getDisLikes,deleteDisLikes} = clothSlice.actions
export default  clothSlice.reducer
