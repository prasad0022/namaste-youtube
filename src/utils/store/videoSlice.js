import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoList: null
    },
    reducers: {
        addVideoList: (state, action) => {
            state.videoList = action.payload;
        },
        removeVideoList: (state) => {
            state.videoList = null;
        }
    }
});

export const { addVideoList, removeVideoList } = videoSlice.actions;

export default videoSlice.reducer;
