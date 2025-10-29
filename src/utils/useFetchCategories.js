import { useEffect, useState } from "react";
import { GET_PRODUCT_CATEGORIES_URL } from "./constants";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const data = await fetch(GET_PRODUCT_CATEGORIES_URL);
    const json = await data.json();
    setCategories(json);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories;
};

export default useFetchCategories;
