import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/slices/toggleSidebar'
import toggleChat from '../features/slices/toggleChat';
import toogleLoader from '../features/slices/toggleLoader';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        openChat: toggleChat.reducer,
        firstLoad: toogleLoader.reducer
    },
});
export default store