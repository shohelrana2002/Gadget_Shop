import React from "react";
import { NavLink, Link } from "react-router-dom";
import useGetAuth from "../Hooks/useGetAuth";
import UserDropDown from "./Home/UserDropDown";

const Navbar = () => {
  const { user } = useGetAuth();
  return (
    <div>
      <div className="navbar h-16 top-0 fixed z-10 shadow-sm opacity-80 bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <h2 className=" text-xl">Gadget Shop</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact-us"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <UserDropDown></UserDropDown>
          </div>
        ) : (
          <div className="navbar-end">
            <div className="flex gap-2 items-center">
              <Link to="/login">
                <button className=" btn-sm btn btn-outline btn-primary text-white py-1 rounded-md">
                  Sing In
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-primary btn-sm text-white py-1 rounded-md">
                  Sing Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
