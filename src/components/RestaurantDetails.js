import { useParams } from "react-router";
import Shimmer from "../utils/Shimmer";
import { CDN_URL, images } from "../utils/constants";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetails = ({ resInfo }) => {
  const { resId } = useParams();
  const ogResId = resId?.toString().slice(0, -1);
  const resData = useFetchRestaurant(ogResId);
  const newResData = resData?.data?.cards[2]?.card?.card?.info;
  const imageIndex = resId?.slice(-1);
  const [showIndex, setShowIndex] = useState(-1);

  if (!(Object.keys(resData).length > 0)) {
    return <Shimmer numberOfCards={1} />;
  }

  const { name, costForTwo, cuisines, sla } = newResData;
  // console.log(resData);
  const category =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (el) =>
        el?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="flex items-center mt-6 w-6/12 mx-auto bg-gray-50 rounded-2xl shadow-lg">
        <div className="flex justify-center p-3 w-max rounded-lg">
          <img
            className="w-[500px] rounded-2xl"
            src={images[imageIndex]}
            alt={"Product Image"}
          />
        </div>
        <div className=" ml-10">
          <h1 className="font-bold text-4xl">{name}</h1>
          <p className="font-bold text-lg"> {cuisines?.join(", ")}</p>
          <h2>{costForTwo}</h2>
          <h2>{sla?.deliveryTime} mins</h2>
        </div>
      </div>

      <div className="w-6/12 mx-auto">
        {category.map((el, i) => {
          // console.log(el, i);

          return (
            // This is the controlled component
            <RestaurantCategory
              currentIndex={showIndex}
              categoryIndex={i}
              showItems={i === showIndex ? true : false}
              setShowIndex={(i) => setShowIndex(i)}
              key={el?.card?.card?.title}
              sortedData={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
