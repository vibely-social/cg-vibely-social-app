import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {checkEmailApi, loginApi, registerApi} from "~/api/account/accountApi.js";


export const loginToAccount = createAsyncThunk("login", async (data) => {
    return await loginApi(data);
})

export const registerAccount = createAsyncThunk("register", async (data) => {
    return await registerApi(data);
})

export const checkEmail = createAsyncThunk("check-email", async (data) => {
    return await checkEmailApi(data);
})

export const userAccountSlice = createSlice({
    name: 'userAccount',
    initialState:{
        user: {},
        loading: false,
        error: null,
        success: false,
    },
    reducers:{
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
            .addCase(loginToAccount.pending, (state) => {
                console.log('pending')
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(loginToAccount.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginToAccount.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.user = action.payload;
                state.error = false;
            })
            //Register
            .addCase(registerAccount.pending, (state) => {
                console.log('pending')
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(registerAccount.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = true;
            })
            .addCase(registerAccount.fulfilled, (state) => {
                state.success = true;
                state.loading = false;
                state.error = false;
            })
            //Check email
            .addCase(checkEmail.pending, (state) => {
                console.log('pending')
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(checkEmail.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(checkEmail.fulfilled, (state) => {
                state.success = true;
                state.loading = false;
                state.error = false;
            })
    }
})

export const {
    setLoading,
    setError,
    setSuccess,
} = userAccountSlice.actions;

export const selectUserAccountSliceIsLoading = (state) => state.userAccount.loading;
export const selectUserAccountSliceIsError = (state) => state.userAccount.error;
export const selectUserAccountSliceIsSuccess = (state) => state.userAccount.success;
export const selectUserData = (state) => state.userAccount.user;

export default userAccountSlice.reducer;