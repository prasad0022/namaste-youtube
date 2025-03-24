import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const appStore = configureStore({
    reducer: {
        sidebar: sidebarSlice,
    }
});

export default appStore;