import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

export const sidebarSlice = createSlice(
    {
        name: 'sidebar',
        initialState,
        reducers:{
            toggle: (state, action)=> action.payload
        }
    }
)

export const {toggle} = sidebarSlice.actions
export const selectSidebarPosition = state => state.sidebar
export default sidebarSlice