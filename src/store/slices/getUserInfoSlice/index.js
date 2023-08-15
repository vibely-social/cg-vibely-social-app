import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUserInfoApi} from "~/api/getUserInfoApi.js";


const initialState = {
    values: null,
    value: null,
    loading: false,
    error: null,
    success: false,
};

export const getUserInfo = createAsyncThunk("userInfo", async () => {
    const response = await getUserInfoApi();
    return response.data;
});

export const getUserInfoSlice = createSlice({
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
                state.values = action.payload;
                state.error = false;
            });
    }
});

export const {
    setLoading,
    setError,
    setSuccess,
} = getUserInfoSlice.actions;

export const getUserInfoIsLoading = (state) => state.userInfo.loading;
export const getUserInfoIsError = (state) => state.userInfo.error;
export const getUserInfoIsSuccess = (state) => state.userInfo.success;
export const selectUserInfo = (state) => state.userInfo.values;

export default getUserInfoSlice.reducer;