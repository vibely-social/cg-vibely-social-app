import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {editUserInfoApi, getUserInfoApi} from "~/api/getUserInfoApi.js";


const initialState = {
    value: null,
    loading: false,
    error: null,
    success: false,
};

export const getUserInfo = createAsyncThunk("userInfo/show", async () => {
    const response = await getUserInfoApi();
    return response.data;
});

export const editUserInfo = createAsyncThunk("userInfo/edit", async (userInfo) => {
    const response = await editUserInfoApi(userInfo);
    return response.data;
});

export const userInfoSlice = createSlice({
    name: "userInfo",
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
            .addCase(getUserInfo.pending, (state) => {
                console.log('pending')
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;

            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            .addCase(editUserInfo.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(editUserInfo.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(editUserInfo.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })
    }
});

export const {
    setLoading,
    setError,
    setSuccess,
} = userInfoSlice.actions;

export const userInfoIsLoading = (state) => state.userInfo.loading;
export const userInfoIsError = (state) => state.userInfo.error;
export const userInfoIsSuccess = (state) => state.userInfo.success;
export const selectUserInfo = (state) => state.userInfo.value;

export default userInfoSlice.reducer;