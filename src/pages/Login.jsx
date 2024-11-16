import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetAuth from "../Hooks/useGetAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/Home/Login_Register/GoogleLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin } = useGetAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    userLogin(data.email, data.password)
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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Plz Enter A Corecct Email</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <p className="text-red-500">Enter a Correct Password</p>
                )}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div>
              <GoogleLogin></GoogleLogin>
            </div>
            <div className="text-center my-4">
              <p>
                Yo Are New
                <Link to="/register">
                  <span className="text-red-700 underline ml-2 font-semibold">
                    Create a Account ?
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
