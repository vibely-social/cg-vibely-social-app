import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPostDetail} from "~/api/postApi.js";

export const getPostDetails = createAsyncThunk("postDetails", async (id) => {
    const response = await getPostDetail(id);
    console.log(response.data);
    return response.data;
});

const initialState = {
    post: {
        userInfo:{}
    },
    status: 'idle',
    error: null
}

export const getPostDetailsSlice = createSlice({
    name: "postDetails",
    initialState,
    reducers: {
        setPostDetails: (state, action) => {
            state.post = action.payload.post;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getPostDetails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.post = action.payload;
            })
            .addCase(getPostDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            });
    },
});

export default getPostDetailsSlice.reducer;
