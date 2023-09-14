import {configureStore} from '@reduxjs/toolkit';
import toggleChat from '~/features/toggle_chat';
import toggleLoader from '~/features/toggle_loader';
import {sidebarSlice} from '~/features/toggle_sidebar';
import {userAccountSlice} from "~/features/user_account/index.js";
import postsSlice from '~/features/get_posts';
import {getFriendsSlice} from "~/features/get_friends/index.jsx";
import {switchConversationSlice} from "~/features/switch_conversation/index.js";
import {loadOldMessagesSlice} from "~/features/load_old_messages/index.jsx";
import {messengerSlice} from "~/features/messeger/index.jsx";
import {userInfoSlice} from "~/features/user_info/userInfoSlice.js";
import {getCitiesSlice} from "~/features/get_cities/index.js";
import {suggestionFriendsSlice} from "~/features/suggestion_friends/index.jsx";
import {requestFriendsSlice } from '~/features/request_friends';
import {getMediaSlice} from "~/features/get_media/index.jsx";
import {typingStatusSlice} from "~/features/typing_status/index.jsx";
import {getMediaPostDetailsSlice} from "~/features/get_media_post_details/index.jsx";
import {bottomChatSlice} from "~/features/bottom_chat/index.jsx";
import onlineStatusSlice from "~/features/online_status/index.jsx";
import {notificationSlice} from "~/features/notification/index.jsx";
import {searchUserSlice} from "~/features/search_user/index.js";
import {getKeyword} from "~/features/get_search_key/index.js";

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        openChat: toggleChat.reducer,
        firstLoad: toggleLoader.reducer,
        userInfo: userInfoSlice.reducer,
        friends: getFriendsSlice.reducer,
        switchConversation: switchConversationSlice.reducer,
        userAccount: userAccountSlice.reducer,
        oldMessages: loadOldMessagesSlice.reducer,
        messenger: messengerSlice.reducer,
        cities: getCitiesSlice.reducer,
        suggestionFriends: suggestionFriendsSlice.reducer,
        requestFriends: requestFriendsSlice.reducer,
        media: getMediaSlice.reducer,
        typingStatus: typingStatusSlice.reducer,
        mediaPostDetails: getMediaPostDetailsSlice.reducer,
        posts: postsSlice.reducer,
        bottomChatStatus: bottomChatSlice.reducer,
        onlineStatus: onlineStatusSlice.reducer,
        notifications: notificationSlice.reducer,
        users: searchUserSlice.reducer,
        keyword: getKeyword.reducer,
    },
});
export default store