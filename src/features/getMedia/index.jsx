import {createSlice} from "@reduxjs/toolkit";

const initialState = [
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
    }
]

export const getMediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
        },
    },
});

export const {setImages} = getMediaSlice.actions;
export default getMediaSlice.reducer;
