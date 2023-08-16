import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findFriends} from "~/api/friends/friendListApi.js";

const initialState = {
    values: null,
    value: null,
    loading: false,
    error: null,
    success: false,
};

export const getFriends = createAsyncThunk("friends", async () => {
    const response = await findFriends();
    return response.data;
});

export const getFriendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getFriends.pending, (state) => {
                console.log('pending')
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getFriends.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getFriends.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.values = action.payload;
                state.error = false;
            });
    }
});

export const {
    setLoading,
    setError,
    setSuccess,
} = getFriendsSlice.actions;

export const selectGetFriendIsLoading = (state) => state.friends.loading;
export const selectGetFriendIsError = (state) => state.friends.error;
export const selectGetFriendIsSuccess = (state) => state.friends.success;
export const selectFriendList = (state) => state.friends.values;

export default getFriendsSlice.reducer;