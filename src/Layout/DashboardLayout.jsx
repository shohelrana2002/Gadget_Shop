import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/SideBar";

const DashboardLayout = () => {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="col-span-2 ">
        <SideBar></SideBar>
      </div>
      <div className="col-span-10 p-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
