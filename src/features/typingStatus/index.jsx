import {createSlice} from "@reduxjs/toolkit";

export const typingStatusSlice = createSlice({
    name: "typingStatus",
    initialState:{},
    reducers:{
        setTypingStatus: (state, action) => {
            const user = action.payload.user;
            console.log('action.payload')
            console.log(action.payload)
            state[user] = action.payload.typingStatus;
        }
    }
})

export const {
    setTypingStatus
} = typingStatusSlice.actions

export const selectTypingStatus = state => state.typingStatus;
export default typingStatusSlice.reducer;