import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import Recommendation from "./Recommendation";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="p-5 flex">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="w-100">
        <Recommendation />
      </div>
    </div>
  );
};

export default WatchPage;
