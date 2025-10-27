import { useState, useEffect } from "react";
import { GET_PRODUCT_DETAIL_URL, MENU_RES_URL } from "../utils/constants";
import { useParams } from "react-router";
import { strCapitalize } from "../utils/utility";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const [product, setProduct] = useState({});

  const fetchResData = async () => {
    const data = await fetch(GET_PRODUCT_DETAIL_URL + resId);
    const json = await data.json();
    console.log(json);
    setProduct(json);
  };

  useEffect(() => {
    fetchResData();
  }, []);

  const { thumbnail, title, description, brand, tags, price } = product;
  return (
    <div className="centered">
      <img className="product-img" src={thumbnail} alt={"Product Image"} />
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{brand}</h2>
      <h2> ${price} USD</h2>
      <h2>{tags?.map((el) => strCapitalize(el))?.join(", ")}</h2>
    </div>
  );
};

export default RestaurantDetails;
