import React from "react";

const RecCard = ({ videoData }) => {
  return (
    <div>
      <div className="flex">
        <div className="p-1 w-50 h-30 ">
          <img
            className="rounded-2xl"
            src={videoData?.snippet?.thumbnails?.standard?.url}
            alt="thumbnail"
          />
        </div>
        <div className="p-3 w-60">
          <h1 className="w-auto font-medium text-sm">
            {videoData?.snippet?.title.slice(0, 60) + ".."}
          </h1>
          <h2 className="mt-2 text-neutral-400 font-sm">
            {videoData?.snippet?.channelTitle}
          </h2>
          <p className="text-neutral-400 font-sm">
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(videoData?.statistics?.viewCount)}{" "}
            views
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
