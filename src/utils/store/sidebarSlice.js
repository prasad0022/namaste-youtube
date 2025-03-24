import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isMenu: true
    },
    reducers: {
        setIsMenu: (state) => {
            state.isMenu = !state.isMenu;
        }
    }
});

export const { setIsMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;