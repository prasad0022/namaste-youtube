/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { addVideoList } from "../../utils/store/videoSlice";
import { YOUTUBE_API } from "../../utils/constants";
import { NavLink } from "react-router";

const VideoContainer = () => {
  const { videoList } = useSelector((store) => store.video);
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideoList = async () => {
      const videoData = await fetch(YOUTUBE_API);
      const jsonData = await videoData.json();
      dispatch(addVideoList(jsonData));
    };
    getVideoList();
  }, []);

  return (
    <div className="p-7 overflow-y-auto custom-scrollbar">
      <div className="flex flex-wrap justify-between">
        {videoList?.items?.map((video) => (
          <NavLink to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} videoData={video} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
