import React from "react";

const VideoCard = ({ videoData }) => {
  return (
    <div className="w-100">
      <div>
        <img
          className="w-100 rounded-2xl h-70"
          src={videoData?.snippet?.thumbnails?.standard?.url}
          alt="thumbnail"
        />
      </div>
      <div className="px-3">
        <h1 className="w-auto font-medium text-lg">
          {videoData?.snippet?.title}
        </h1>
        <h2 className="mt-2 text-neutral-400 font-medium">
          {videoData?.snippet?.channelTitle}
        </h2>
        <p className="text-neutral-400 font-medium">
          {new Intl.NumberFormat("en-US", {
            notation: "compact",
          }).format(videoData?.statistics?.viewCount)}{" "}
          views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
