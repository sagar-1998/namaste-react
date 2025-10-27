import { useParams } from "react-router";
import { strCapitalize } from "../utils/utility";
import Shimmer from "../utils/Shimmer";
import useFetchProduct from "../utils/useFetchProduct";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const product = useFetchProduct(resId);
  if (!(Object.keys(product).length > 0)) {
    return <Shimmer numberOfCards={1} />;
  }

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
