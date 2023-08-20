import {createSlice} from "@reduxjs/toolkit";


export const authenticationSlice = createSlice(
    {
        name: 'authentication',
        initialState: 0,
        reducers: {
            setLastAuth: (state, action)=> action.payload
        }
    }
)
export const {setLastAuth} = authenticationSlice.actions
export const selectLastAuth = state => state.authentication
export default authenticationSlice.reducer