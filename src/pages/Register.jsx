import { Link, useNavigate } from "react-router-dom";
import useGetAuth from "../Hooks/useGetAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/Home/Login_Register/GoogleLogin";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { createAccount } = useGetAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];
    const userData = { email, role, status, wishlist };
    // console.log(userData);
    createAccount(data.email, data.password)
      .then(() => {
        axios.post("http://localhost:3000/users", userData).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              position: "top-right",
              icon: "success",
              title: "Regestion Success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
            form.reset();
          }
        });
      })
      .catch((data) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Gadget Shop | Register</title>
      </Helmet>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:w-1/2 w-full lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 lg:w-1/2 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  {errors.email && <p>Email is Required</p>}
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
                  {errors.password?.type === "required" && (
                    <p>Password is Required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p>password Must Be six Digit </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    // {...register("confirmPassword", {
                    //   required: true,
                    //   validate: (value) => {
                    //     if (watch("password") !== value) {
                    //       return <p>Your Password Don't match</p>;
                    //     }
                    //   },
                    // })}

                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        watch("password") === value ||
                        "Your Passwords don't match",
                    })}

                    // {...register("confirmPassword", {
                    //   required: "Confirm Password is required",
                    //   validate: (value) =>
                    //     watch("password") === value ||
                    //     "Your Passwords don't match",
                    // })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  {/* {errors.confirmPassword && <p>Boot Password Must Be match</p>} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs
                  "
                    {...register("role", { required: true })}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                  {errors.role && <p>Select On</p>}
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="text-center my-4">
                <p>
                  You Have Already Account?
                  <Link to="/login">
                    <span className="text-red-700 underline ml-2 font-semibold">
                      Login Now
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
