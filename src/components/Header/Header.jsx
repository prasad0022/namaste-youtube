import React from "react";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { setIsMenu } from "../../utils/store/sidebarSlice";
import { NavLink } from "react-router";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="py-3 px-8 flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <img
          onClick={() => {
            dispatch(setIsMenu());
          }}
          className="w-6"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
          alt="menu--v6"
        />
        <img
          className="ml-8"
          src="https://img.icons8.com/doodle/48/youtube-play--v2.png"
          alt="youtube-play--v2"
        />
        <NavLink to={"/"}>
          <span className="text-2xl font-medium">YouTube</span>
        </NavLink>
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
