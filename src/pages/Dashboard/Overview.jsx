import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";

const Overview = () => {
  const { user } = useGetAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h2 className="text-center font-bold text-xl">{user.email}</h2>
    </div>
  );
};

export default Overview;
