import { configureStore } from '@reduxjs/toolkit';
import { getCitiesSlice } from "~/features/getCities/index.js";
import { getFriendsSlice } from "~/features/getFriends/index.js";
import { getMediaSlice } from "~/features/getMedia/index.jsx";
import { getMediaPostDetailsSlice } from "~/features/getMediaPostDetails/index.jsx";
import { loadOldMessagesSlice } from "~/features/loadOldMessages/index.js";
import { messengerSlice } from "~/features/messeger/index.js";
import { suggestionFriendsSlice } from "~/features/suggestionFriends/index.js";
import { switchConversationSlice } from "~/features/switchConversation/index.js";
import toggleChat from '~/features/toggleChat';
import toggleLoader from '~/features/toggleLoader';
import sidebarSlice from '~/features/toggleSidebar';
import { userAccountSlice } from "~/features/userAccount/index.js";
import getUserInfoSlice from "~/features/userInfoSlice/UserInfoSlice.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        openChat: toggleChat.reducer,
        firstLoad: toggleLoader.reducer,
        userInfo: getUserInfoSlice,
        friends: getFriendsSlice.reducer,
        switchConversation: switchConversationSlice.reducer,
        userAccount: userAccountSlice.reducer,
        oldMessages: loadOldMessagesSlice.reducer,
        messenger: messengerSlice.reducer,
        cities: getCitiesSlice.reducer,
        suggestionFriends: suggestionFriendsSlice.reducer,
        media: getMediaSlice.reducer,
        mediaPostDetails: getMediaPostDetailsSlice.reducer,
    },
});
export default store