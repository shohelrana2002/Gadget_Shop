import React from "react";
import useGetAuth from "../../../Hooks/useGetAuth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useGetAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        if (res.user.providerId) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Success Your Login",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
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
