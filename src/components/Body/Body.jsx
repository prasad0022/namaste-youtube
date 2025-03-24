import React from "react";
import VideoCard from "./VideoCard";
import { videoList } from "../../utils/mockData";

const Body = () => {
  return (
    <div className="p-5 w-screen overflow-y-auto custom-scrollbar">
      <div className="flex flex-wrap justify-between">
        {videoList.items.map((video) => (
          <VideoCard key={video.id} videoData={video} />
        ))}
      </div>
    </div>
  );
};

export default Body;
