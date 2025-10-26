import { useEffect, useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { GET_RES_URL } from "../utils/constants";
import Shimmer from "../utils/Shimmer";

const resInfoData = resData.map((res) => {
  return res.info;
});
const RestaurantContainer = () => {
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchProperData = (data) => {
    const restaurantsInfo =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants = restaurantsInfo.map((res) => {
      return res.info;
    });
    return restaurants;
  };

  const fetchData = async () => {
    let data = await fetch(GET_RES_URL);
    data = await data.json();

    setResData(fetchProperData(data));
    setFilteredResData(fetchProperData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchBtnClick = () => {
    const filteredRestaurantsList = resData.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredRestaurantsList);
    setFilteredResData(filteredRestaurantsList);
  };

  return (
    <div>
      <div className="filter-search-container">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearchBtnClick}>
          Search
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            const filteredResDataByRating = resData.filter(
              (res) => res.avgRating > 2.5
            );
            setResData(filteredResDataByRating);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {filteredResData?.length > 0 ? (
        <div className="res-container">
          {filteredResData.map((res) => {
            return <RestaurantCard key={res.id} resData={res} />;
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default RestaurantContainer;
