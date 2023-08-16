import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/slices/toggleSidebar'
import toggleChat from '../features/slices/toggleChat';
import toogleLoader from '../features/slices/toggleLoader';
import {getUserInfoSlice} from "../features/slices/getUserInfoSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer,
        firstLoad: toogleLoader.reducer,
        userInfo: getUserInfoSlice.reducer
    },
});
export default store