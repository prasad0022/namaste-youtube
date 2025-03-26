import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router";
import RecCard from "./RecCard";

const Recommendation = () => {
  const [searchParams] = useSearchParams();
  const currId = searchParams.get("v");
  const { videoList } = useSelector((store) => store.video);
  return (
    <div>
      <div className="p-2">
        <div className="m-1">
          {videoList?.items
            ?.filter((video) => video.id !== currId)
            ?.map((video) => (
              <NavLink to={"/watch?v=" + video.id}>
                <RecCard key={video.id} videoData={video} />
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
