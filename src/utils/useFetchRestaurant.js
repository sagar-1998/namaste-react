import { useEffect, useState } from "react";
import { GET_BASE_URL } from "./constants";

const useFetchRestaurant = (resId) => {
  const [resData, setResData] = useState({});

  const fetchResById = async () => {
    const data = await fetch(GET_BASE_URL + "/listRestaurantMenu/" + resId);
    const res = await data.json();
    setResData(res);
  };

  useEffect(() => {
    fetchResById();
  }, []);

  return resData;
};

export default useFetchRestaurant;
