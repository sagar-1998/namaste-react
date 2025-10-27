import { useEffect, useState } from "react";
import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { GET_RES_URL, GET_PRODUCT_URL } from "../utils/constants";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchProducts from "../utils/useFetchProducts";
const resInfoData = resData.map((res) => {
  return res.info;
});
const RestaurantContainer = () => {
  const products = useFetchProducts();
  const onlineStatus = useOnlineStatus();
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredResData(products);
  }, [products]);

  useEffect(() => {
    setResData(products);
  }, []);

  const handleSearchBtnClick = () => {
    const filteredRestaurantsList = resData.filter((res) =>
      res.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResData(filteredRestaurantsList);
  };

  if (!onlineStatus) {
    return (
      <h1 className="centered">
        😳 Looks like you are Offline, Please check your internet connection!!!
      </h1>
    );
  }

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
            return (
              <Link key={res.id} to={"/restaurants/" + res.id}>
                <RestaurantCard key={res.id} resData={res} />{" "}
              </Link>
            );
          })}
        </div>
      ) : (
        <Shimmer numberOfCards={10} />
      )}
    </div>
  );
};

export default RestaurantContainer;
