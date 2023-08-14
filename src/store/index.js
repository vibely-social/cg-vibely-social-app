import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/toggleSidebar'
import toggleChat from './slices/toggleChat';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer
    },
});
export default store