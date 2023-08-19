import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from './slices/toggleSidebar'
import toggleChat from './slices/toggleChat';
import toogleLoader from './slices/toggleLoader';
import userInfoReducer from "./slices/getUserInfoSlice/UserInfoSlice.js"

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer,
        firstLoad: toogleLoader.reducer,
        userInfo: userInfoReducer
    },
});
export default store