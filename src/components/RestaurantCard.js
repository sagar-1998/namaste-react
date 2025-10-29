import { CDN_URL, images } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  const { name, cuisines, avgRating, costOfTwo, imageIndex } = resData;
  const cuisinesImages = images;
  const { userName } = useContext(UserContext);
  // console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="p-2 m-2 w-60 h-[400px] bg-gray-100 rounded-lg hover:bg-gray-200 transition"
    >
      <div className="">
        <img
          className="max-w-[100%] bg-clip-content bg-white rounded-md"
          src={cuisinesImages[imageIndex] || cuisinesImages[0]}
          alt="Restaurant Image"
        />
      </div>
      <div className=" my-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="">{cuisines?.join(", ")}</p>
        <p className="">{avgRating} stars</p>
        <p className="">{costOfTwo}</p>
        <p className="">User name: {userName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
