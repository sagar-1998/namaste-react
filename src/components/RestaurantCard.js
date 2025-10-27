import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { title, category, rating, price, warrantyInformation, images } =
    props.resData;
  return (
    <div className="res-card">
      <img className="res-card-img" src={images[0]} alt="Restaurant Image" />
      <div className="res-card-desc">
        <p className="res-desc__item res-desc__item_name">{title}</p>
        <p className="res-desc__item res-desc__item_cuisine">{category}</p>
        <p className="res-desc__item res-desc__item_rating">{rating} stars</p>
        <p className="res-desc__item res-desc__item_eta">{price}</p>
        <p className="res-desc__item res-desc__item_eta">
          {warrantyInformation}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
