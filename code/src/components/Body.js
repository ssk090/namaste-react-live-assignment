import { restrautList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//Config Driven UI

function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}

const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Matching Restaurants Found</h1>;

  //Conditional Rendering
  return (
    <>
      <div className="h-full flex justify-center mx-auto mt-3">
        <input
          type="text"
          className="w-500 p-2 border border-gray-500 rounded-lg"
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
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list" style={{ marginBottom: "75px" }}>
          {filteredRestaurants?.map((restraunt) => {
            return (
              <Link
                className="restaurant-list"
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
