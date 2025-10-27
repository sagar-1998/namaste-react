import { useEffect, useState } from "react";
import { GET_PRODUCT_DETAIL_URL } from "./constants";

const useFetchProduct = (resId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await fetch(GET_PRODUCT_DETAIL_URL + resId.toString());
    const res = await data.json();
    setProduct(res);
  };

  return product;
};

export default useFetchProduct;
