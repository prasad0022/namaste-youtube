import React from "react";

const Search = () => {
  return (
    <div className="flex items-center gap-3">
      <input
        placeholder="Search"
        className="outline-2 outline-neutral-800 rounded-full w-150 h-10 px-6"
        type="search"
      />
      <img
        className="w-7 cursor-pointer"
        src="https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png"
        alt="search--v1"
      />
    </div>
  );
};

export default Search;
