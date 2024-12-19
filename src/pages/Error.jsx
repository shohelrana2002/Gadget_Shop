import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen items-center flex flex-col justify-center text-center">
      <h3 className="text-4xl text-rose-700">
        Page Not Found <span className="text-5xl text-gray-900">404</span>
      </h3>

      <p className="text-2xl">
        Back To Home Page ?{" "}
        <Link className="btn btn-outline btn-primary">Home </Link>
      </p>
    </div>
  );
};

export default Error;
