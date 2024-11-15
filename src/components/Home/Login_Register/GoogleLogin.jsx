import React from "react";
import useGetAuth from "../../../Hooks/useGetAuth";
import { FcGoogle } from "react-icons/fc";
const GoogleLogin = () => {
  const { googleLogin } = useGetAuth();
  const handleGoogleLogin = () => {
    googleLogin();
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
        </button>
      </div>
      <div className="divider opacity-25"></div>
    </div>
  );
};

export default GoogleLogin;
