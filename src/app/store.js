import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/toggleSidebar/sidebarSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    },
});