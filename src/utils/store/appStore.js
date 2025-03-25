import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import videoSlice from "./videoSlice";

const appStore = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        video: videoSlice
    }
});

export default appStore;