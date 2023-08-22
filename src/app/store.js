import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from '~/features/toggleSidebar'
import toggleChat from '~/features/toggleChat';
import toggleLoader from '~/features/toggleLoader';
import {getFriendsSlice} from "~/features/getFriends/index.js";
import {switchConversationSlice} from "~/features/switchConversation/index.js";
import {userAccountSlice} from "~/features/userAccount/index.js";
import {getUserInfoSlice} from "~/features/userInfoSlice/index.js";
import {authenticationSlice} from "~/features/authentication/index.js";
import {suggestionFriendsSlice} from "~/features/suggestionFriends/index.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        openChat: toggleChat.reducer,
        firstLoad: toggleLoader.reducer,
        userInfo: getUserInfoSlice.reducer,
        friends: getFriendsSlice.reducer,
        switchConversation: switchConversationSlice.reducer,
        userAccount: userAccountSlice.reducer,
        authentication: authenticationSlice.reducer,
        suggestionFriends: suggestionFriendsSlice.reducer
    },
});
export default store