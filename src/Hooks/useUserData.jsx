import { useEffect, useState } from "react";
import useGetAuth from "./useGetAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = useGetAuth();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`http://localhost:3000/user/${user?.email}`);
      setUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading]);
  return userData;
};

export default useUserData;
