import React from "react";

const SidebarList = ({ section }) => {
  return (
    <div>
      {section.title !== "Main" && (
        <h1 className="text-lg font-bold p-2">{section.title}</h1>
      )}
      <ul>
        {section.items.map((item, index) => (
          <li
            key={index}
            className="p-3 flex justify-between rounded-xl hover:bg-neutral-800"
          >
            <span className="text-2xl">{item.icon}</span>{" "}
            <p className="w-35 p-1">{item.name}</p>
          </li>
        ))}
      </ul>
      <hr className="border-neutral-800" />
    </div>
  );
};

export default SidebarList;
