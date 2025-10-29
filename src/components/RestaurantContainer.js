import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { addPromotionFlag } from "../utils/utility";
import withPromotion from "../hoc/withPromotion";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import UserContext from "../Context/UserContext";
const RestaurantContainer = () => {
  const data = useFetchRestaurants();
  const onlineStatus = useOnlineStatus();
  const [resData, setResData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const listOfRestaurants =
    data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    setFilteredResData(listOfRestaurants);
  }, [data]);

  useEffect(() => {
    setResData(listOfRestaurants);
  }, []);

  const handleSearchBtnClick = () => {
    const filteredRestaurantsList = resData?.filter((res) => {
      // console.log(res.info.name.toLowerCase(), searchText);

      return res.info.name.toLowerCase().includes(searchText);
    });
    setFilteredResData(filteredRestaurantsList);
  };

  if (!onlineStatus) {
    return (
      <h1 className="centered">
        😳 Looks like you are Offline, Please check your internet connection!!!
      </h1>
    );
  }

  const RestaurantCardPromoted = withPromotion(RestaurantCard);
  return (
    <div className="" data-testid="resCard">
      <div className="p-10 ">
        <h2>{userName}</h2>
      </div>
      <div className="my-10 px-6 ">
        <input
          data-testid={"searchInput"}
          className="px-5 py-2 border-1 border-gray-400 rounded-md"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-emerald-100 px-4 py-2 rounded-lg ml-2 shadow-sm shadow-cyan-950 cursor-pointer"
          onClick={handleSearchBtnClick}
        >
          Search
        </button>
        <button
          className="filter-btn bg-indigo-300 px-4 py-2 rounded-lg ml-10 shadow-md shadow-blue-800 cursor-pointer"
          type="button"
          onClick={() => {
            const filteredResDataByRating = resData?.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            // console.log(filteredResDataByRating);
            setFilteredResData(filteredResDataByRating);
            // setResData(filteredResDataByRating);
          }}
          data-testid={"topRatedResBtn"}
        >
          Top Rated Restaurants
        </button>
        <input
          className="p-2 mx-5 border border-gray-500 rounded-md"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      {filteredResData?.length > 0 ? (
        <div className="res-container flex flex-wrap justify-evenly">
          {filteredResData.map((resData, i) => {
            const res = resData.info;

            return (
              <Link
                key={res.id}
                to={"/restaurants/" + res.id.toString() + i.toString()}
              >
                {res.veg ? (
                  <RestaurantCardPromoted resData={{ ...res, imageIndex: i }} />
                ) : (
                  <RestaurantCard resData={{ ...res, imageIndex: i }} />
                )}
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
