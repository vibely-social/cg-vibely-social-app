import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/toggleSidebar'
import toggleChat from './slices/toggleChat';
import toogleLoader from './slices/toggleLoader';
import {getFriendsSlice} from "~/store/slices/getFriends/index.js";
import {switchConversationSlice} from "~/store/slices/switchConversation/index.js";
import {userAccountSlice} from "~/store/slices/userAccount/index.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer,
        firstLoad: toogleLoader.reducer,
        friends: getFriendsSlice.reducer,
        switchConversation: switchConversationSlice.reducer,
        userAccount: userAccountSlice.reducer
    },
});
export default store