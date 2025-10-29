import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({
  showItems,
  sortedData,
  setShowIndex,
  categoryIndex,
  currentIndex,
}) => {
  const handleClick = () => {
    // console.log(currentIndex, categoryIndex);
    if (categoryIndex == currentIndex) {
      // console.log("inside if ");
      setShowIndex(-1);
    } else setShowIndex(categoryIndex);
  };
  return (
    <div className="bg-white shadow-lg my-6 p-5 rounded-md cursor-pointer">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <span>{sortedData?.card?.card?.title}</span>
        <span> ⬇️ </span>
      </div>

      <div className="">
        {showItems && <ItemList list={sortedData?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
