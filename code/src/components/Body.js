import { restrautList } from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

//Config Driven UI

function filterData(searchInput, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt.data.name.toLowerCase().includes(searchInput)
  );
}

const Body = () => {
  // searchText is a local state variable
  const [searchInput, setSearchInput] = useState("");
  const [restraunts, setRestraunts] = useState(restrautList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
            if (e.target.value === "") {
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restraunts);
            setRestraunts(data);
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restraunts.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
