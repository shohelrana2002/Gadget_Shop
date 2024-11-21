import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import userPic from "/user.png";
import { Link } from "react-router-dom";
import useUserData from "../../Hooks/useUserData";
const UserDropDown = () => {
  const { user, userLogout } = useGetAuth();
  const userData = useUserData();
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="flex  justify-center items-center">
      <div className="px-3 rounded-full mx-3 bg-secondary">
        {userData?.wishlist?.length}
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img
                src={`${user?.photoURL || userPic}`}
                alt={`${user?.photoURL || userPic}`}
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link to={"/dashboard/overview"}>Dashboard</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm btn-primary"
            >
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
