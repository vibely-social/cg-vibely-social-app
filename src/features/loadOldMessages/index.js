import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadOldMessagesApi} from "~/api/oldMessagesApi.js";


export const loadOldMessages = createAsyncThunk(
    "Messages",
    async (params) => {
        const response = await loadOldMessagesApi(params.contact, params.page)
        return [params.contact, response.data]
    })
export const loadOldMessagesSlice = createSlice(
    {
        name: 'oldMessages',
        initialState: {
            values: {},
            totalPage: 0,
            loading: false,
            error: null,
            success: false
        },
        reducers: {
            setLoadOldMessagesLoading: (state, action) => {
                state.loading = action.payload;
            },
            setLoadOldMessagesError: (state, action) => {
                state.error = action.payload;
            },
            setLoadOldMessagesSuccess: (state, action) => {
                state.success = action.payload;
            },
        },
        extraReducers: builder => {
            builder
                .addCase(loadOldMessages.pending, (state) => {
                    state.success = false;
                    state.loading = true;
                    state.error = false;
                })
                .addCase(loadOldMessages.rejected, (state, action) => {
                    state.success = false;
                    state.loading = false;
                    state.error = action.error;
                })
                .addCase(loadOldMessages.fulfilled, (state, action) => {
                    const contact = action.payload[0]
                    const data = action.payload[1].messageList
                    const totalPage = action.payload[1].totalPage
                    state.values[contact] = data;
                    state.totalPage = totalPage;
                    state.success = true;
                    state.loading = false;
                    state.error = false;
                });
        },
    }
)
export const {
    setLoadOldMessagesLoading,
    setLoadOldMessagesError,
    setLoadOldMessagesSuccess,
} = loadOldMessagesSlice.actions;

export const selectLoadOldMessagesIsLoading = (state) => state.oldMessages.loading;
export const selectLoadOldMessagesIsError = (state) => state.oldMessages.error;
export const selectLoadOldMessagesIsSuccess = (state) => state.oldMessages.success;
export const selecAllOldMessages = (state) => state.oldMessages.values;
export const selectTotalPage = (state) => state.oldMessages.totalPage;
export default loadOldMessagesSlice.reducer;