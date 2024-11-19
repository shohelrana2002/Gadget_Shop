import React from "react";
import { NavLink } from "react-router-dom";
import { GrAdd, GrHome, GrLogout, GrOverview } from "react-icons/gr";
import useUserData from "../../Hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import useGetAuth from "../../Hooks/useGetAuth";
const sellerRouters = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2></MdOutlineInventory2>,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <GrAdd></GrAdd>,
  },
];
const SideBar = () => {
  const userData = useUserData();
  const { userLogout } = useGetAuth();
  return (
    <div className="bg-slate-200  min-h-screen border-r  px-8 py-16 border-black">
      <h3 className="text-3xl font-semibold mb-8">Gadget Shop</h3>
      <ul className="flex flex-col gap-2 ">
        <li className="p-2 border border-green-600 rounded-md hover:shadow-md">
          <NavLink
            className="flex items-center gap-2"
            to={"/dashboard/overview"}
          >
            Overview
            <span className="text-green-700 text-xl">
              <GrOverview></GrOverview>
            </span>
          </NavLink>
        </li>

        {userData.role === "seller" &&
          sellerRouters.map((route) => (
            <li
              key={route.id}
              className="p-2 border border-green-600 rounded-md hover:shadow-md"
            >
              <NavLink className="flex items-center gap-2" to={route.route}>
                {route.title}
                <span className="text-green-700 text-xl">{route.icon}</span>
              </NavLink>
            </li>
          ))}

        <li className="p-2 border border-green-600 rounded-md hover:shadow-md">
          <NavLink className="flex items-center gap-2" to={"/"}>
            Home
            <span className="text-green-700 text-xl">
              <GrHome></GrHome>
            </span>
          </NavLink>
        </li>
        <li className="p-2 border border-green-600 rounded-md hover:shadow-md">
          <button
            onClick={() => userLogout()}
            className="flex items-center gap-2"
            to={"/"}
          >
            Logout
            <span className="text-green-700 text-xl">
              <GrLogout></GrLogout>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
