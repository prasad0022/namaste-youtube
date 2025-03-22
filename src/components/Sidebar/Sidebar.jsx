import React from "react";
import SidebarList from "./SidebarList";
import { sidebarData } from "../../utils/mockData";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen p-3 overflow-y-scroll fixed custom-scrollbar">
      {sidebarData.content.map((section, index) => (
        <SidebarList key={index} section={section} />
      ))}
    </div>
  );
};

export default Sidebar;
