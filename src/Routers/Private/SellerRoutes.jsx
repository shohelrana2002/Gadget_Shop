import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/Loading";
import useUserData from "../../Hooks/useUserData";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useGetAuth();
  const userData = useUserData();
  const location = useLocation();
  if (loading || !userData?.role) {
    return <Loading></Loading>;
  }
  if (user && userData?.role === "seller") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
