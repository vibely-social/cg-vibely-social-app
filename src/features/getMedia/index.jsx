import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserMedia} from "~/api/mediaTabApi.js";

export const getMedia = createAsyncThunk("media", async () => {
    const response = await getUserMedia();
    return response.data;
});

const initialState = {
    images: [
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
        },
        {
            id: '2',
            imageUrl: 'https://placehold.co/600x400'
        },
        {
            id: '3',
            imageUrl: 'https://placehold.co/400'
        }],
    status: 'idle',
    error: null
}

export const getMediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
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
