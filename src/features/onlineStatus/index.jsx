import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getStatus} from "~/api/friendsStatusApi.js";
import {getFriends} from "~/features/getFriends/index.js";


export const getFriendsStatus = createAsyncThunk("friendStatus", async (friends) => {
    const response = await getStatus(friends)
    return response.data
})
export const onlineStatusSlice = createSlice({
    name: 'onlineStatus',
    initialState: {
        values: [],
        loading: false,
        error: null,
        success: false,
    },
    extraReducers: builder =>  {
        builder
            .addCase(getFriendsStatus.pending, state => {
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
            })
    }
})

export const selectOnlineList = state => state.onlineStatus.values
export default onlineStatusSlice