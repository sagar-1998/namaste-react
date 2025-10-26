import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.resData;
  return (
    <div className="res-card">
      <img
        className="res-card-img"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      />
      <div className="res-card-desc">
        <p className="res-desc__item res-desc__item_name">{name}</p>
        <p className="res-desc__item res-desc__item_cuisine">
          {cuisines.join(", ")}
        </p>
        <p className="res-desc__item res-desc__item_rating">
          {avgRating} stars
        </p>
        <p className="res-desc__item res-desc__item_eta">
          {sla?.deliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
