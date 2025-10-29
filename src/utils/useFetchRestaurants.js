import { useState, useEffect } from "react";
import { GET_BASE_URL } from "./constants";
const useFetchRestaurants = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch(GET_BASE_URL + "listRestaurants");
    const json = await data.json();
    // console.log(json);
    setProducts(json);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useFetchRestaurants;
