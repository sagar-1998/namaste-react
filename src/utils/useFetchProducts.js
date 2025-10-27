import { useState, useEffect } from "react";
import { GET_PRODUCT_URL } from "./constants";
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch(GET_PRODUCT_URL);
    const json = await data.json();
    setProducts(json?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
};

export default useFetchProducts;
