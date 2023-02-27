import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const params = useParams();
  // const { id } = params;
  // you can use this as well
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
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
      <div className="pl-7">
        <h1 className="font-bold">Menu</h1>
        <ul>
          {Object.values(restraunt?.menu?.items).map((item) => (
            <div className="flex items-center">
              <li key={item.id}>
                {item.name} -{" "}
                <button
                  className="bg-green-200 p-2 m-2 rounded-lg hover:bg-green-400"
                  onClick={() => addFoodItem(item)}
                >
                  Add Item
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

//2hr 17mins
