import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="bg-black text-white">
      <div className="fixed top-0 left-0 w-full bg-black z-50 shadow-md">
        <Header />
      </div>
      <div className="flex mt-18">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
