import {createSlice} from "@reduxjs/toolkit";


export const messengerSlice = createSlice(
    {
        name: 'messenger',
        initialState: {
            unreadMessageCount: {},
            newMessages: []
        },
        reducers: {
            addUnreadMessage: (state, action) => {
                const sender = action.payload.sender
                if (state.unreadMessageCount[sender]){
                    state.unreadMessageCount[sender] += 1
                }else {
                    state.unreadMessageCount[sender] = 1
                }
            },
            addNewMessage: (state,action) => {
                state.newMessages = [...state.newMessages, action.payload]
            },
            resetNewMessages: (state) => state.newMessages = [],
            resetUnreadMessage: (state, action) => state.unreadMessageCount[action.payload] = 0
        }
    }
);

export const {
    addUnreadMessage,
    addNewMessage,
    resetNewMessages,
    resetUnreadMessage
} = messengerSlice.actions

export const selectUnreadMessage = (state) => state.messenger.unreadMessageCount
export const selectNewsMessages = (state) => state.messenger.newMessages

export default messengerSlice.reducer