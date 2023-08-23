import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserMedia} from "~/api/mediaTabApi.js";

export const getMedia = createAsyncThunk("media", async () => {
    const response = await getUserMedia();
    console.log(response.data)
    return response.data;
});

const initialState = {
    images: [],
    status: 'idle',
    error: null
}

export const getMediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload.images;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMedia.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMedia.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.images = action.payload;
            })
            .addCase(getMedia.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            });
    },
});

export const {setImages} = getMediaSlice.actions;
export default getMediaSlice.reducer;