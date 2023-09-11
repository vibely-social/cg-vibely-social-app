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
        setPage: (state) => {
            state.pageIndex += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMedia.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMedia.fulfilled, (state, action) => {
                state.status = "succeeded";
                if (action.payload.listString.length === 0) {
                    state.hasMoreData = false;
                } else {
                    state.images  = [...state.images, ...action.payload.listString];
                    state.pageIndex += 1;
                }


            })
            .addCase(getMedia.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error;
            });
    },
});

export const {setImages} = getMediaSlice.actions;
export default getMediaSlice.reducer;
