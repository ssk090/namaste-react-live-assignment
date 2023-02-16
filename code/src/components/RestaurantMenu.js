import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const params = useParams();
  // const { id } = params;
  // you can use this as well
  const { id } = useParams();
  const restraunt = useRestaurant(id);

  if (!restraunt) return <Shimmer />;

  return (
    <div className="flex mb-[100px]">
      <div className="h-[80vh]">
        <h1 className="font-bold">Restraunt ID : {restraunt.id}</h1>
        <h1 className="font-bold text-2xl">{restraunt.name}</h1>
        <img src={IMG_CDN_URL + restraunt.cloudinaryImageId} alt="food-image" />
        <h1 className="font-bold">
          Location : {restraunt.area},{restraunt.city}
        </h1>
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
