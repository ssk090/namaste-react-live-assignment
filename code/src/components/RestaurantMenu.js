import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const params = useParams();
  // const { id } = params;
  // you can use this as well
  const { id } = useParams();
  const [restraunt, setRestraunt] = useState(null);

  useEffect(() => {
    getRrestrauntInfo();
  }, []);

  async function getRrestrauntInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=20.2804332&lng=85.8499032&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestraunt(json.data);
  }

  if (!restraunt) return <Shimmer />;

  return (
    <div className="flex mb-[100px]">
      <div className="h-[80vh]">
        <h1 className="font-bold">Restraunt ID : {restraunt.id}</h1>
        <h1 className="font-bold text-2xl">{restraunt.name}</h1>
        <img src={IMG_CDN_URL + restraunt.cloudinaryImageId} alt="food-image" />
      </div>
      <div>
        <h1 className="font-bold">Menu</h1>
        <ul>
          {Object.values(restraunt?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
