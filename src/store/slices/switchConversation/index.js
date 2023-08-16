import {createSlice} from "@reduxjs/toolkit";

const initialState = '';

export const switchConversationSlice = createSlice(
    {
        name: 'switchConversation',
        initialState,
        reducers:{
            switchTo: (state, action)=> action.payload
        }
    }
)

export const {switchTo} = switchConversationSlice.actions
export const selectConversation = state => state.switchConversation
export default switchConversationSlice.reducer