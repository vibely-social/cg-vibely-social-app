import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/toggleSidebar'
import toggleChat from './slices/toggleChat';
import toogleLoader from './slices/toggleLoader';
import {getUserInfoSlice} from "~/store/slices/getUserInfoSlice/index.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer,
        firstLoad: toogleLoader.reducer,
        userInfo: getUserInfoSlice.reducer
    },
});
export default store