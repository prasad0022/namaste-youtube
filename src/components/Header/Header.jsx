import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="py-3 px-8 flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/doodle/48/youtube-play--v2.png"
          alt="youtube-play--v2"
        />
        <span className="text-2xl font-medium">YouTube</span>
      </div>
      <Search />
      <p className="w-25 bg-neutral-800 hover:bg-neutral-700 cursor-pointer text-center rounded-full h-10 p-2 text-[15px] font-medium">
        + Create
      </p>
      <img
        className="w-10 h-10 cursor-pointer"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png"
        alt="user-male-circle"
      />
    </div>
  );
};

export default Header;
