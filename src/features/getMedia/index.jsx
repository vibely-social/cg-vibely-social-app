import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserMedia} from "~/api/userMediaApi.js";

export const getMedia = createAsyncThunk("media", async (id, pageIndex) => {
    const response = await getUserMedia(id, pageIndex);
    console.log("test in getMedia")
    console.log(response.data)
    return response.data;
});

const initialState = {
    currentUserId: -1,
    pageIndex: 0,
    hasMoreData: true,
    images: [
        // {
        //     id: 1,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+0"
        // },
        // {
        //     id: 2,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+1"
        // },
        // {
        //     id: 3,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+2"
        // },
        // {
        //     id: 4,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+3"
        // },
        // {
        //     id: 5,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+4"
        // },
        // {
        //     id: 6,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+5"
        // },
        // {
        //     id: 7,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+6"
        // },
        // {
        //     id: 8,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+7"
        // },
        // {
        //     id: 9,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+8"
        // },
        // {
        //     id: 10,
        //     userId: -1,
        //     postId: -1,
        //     imageUrl: "https://placehold.co/600x400?text=Hello+9"
        // }
    ],
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
                if (action.payload.length === 0) {
                    state.hasMoreData = false;
                }
                state.images = [...state.images, ...action.payload];
                state.pageIndex += 1;

            })
            .addCase(getMedia.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            });
    },
});

export const {setImages} = getMediaSlice.actions;
export default getMediaSlice.reducer;
