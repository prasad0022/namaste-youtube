import React from "react";
import SidebarList from "./SidebarList";
import { sidebarData } from "../../utils/mockData";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isMenu } = useSelector((store) => store.sidebar);

  return (
    <div className="h-screen p-3 overflow-y-scroll custom-scrollbar">
      {isMenu &&
        sidebarData.content.map((section, index) => (
          <SidebarList key={index} section={section} />
        ))}
    </div>
  );
};

export default Sidebar;
