import { restrautList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2804332&lng=85.8499032&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!isOnline)
    return (
      <h1 className="text-center font-bold text-2xl mt-4">
        🔴 You are Offline, Please check your internet connection
      </h1>
    );

  // Early Retrun
  if (!allRestaurants) return null;
  return (
    <>
      <div className="h-full flex justify-center mx-auto mt-3">
        <input
          type="text"
          className="w-500 p-2 border border-gray-500 rounded-lg focus:bg-blue-100"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg ml-4"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {/* Conditional Rendering */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="flex flex-wrap justify-center"
          style={{ marginBottom: "75px" }}
        >
          {filteredRestaurants?.map((restraunt) => {
            return (
              <Link
                className="flex flex-wrap justify-center"
                to={"/restraunt/" + restraunt.data.id}
              >
                <RestaurantCard {...restraunt.data} key={restraunt.data.id} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
