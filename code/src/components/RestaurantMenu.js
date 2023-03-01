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
  const restaurant = useRestaurant(id);

  if (!restaurant) return <Shimmer />;

  return (
    <div className="flex mb-16 p-6 m-6">
      <div className="w-1/2">
        {/* <h1 className="font-bold mb-2 text-xl">
          Restaurant ID: {restaurant.id}
        </h1> */}
        <h1 className="font-bold mb-2 text-3xl">{restaurant.name}</h1>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="food-image"
          className="mb-4 rounded-lg"
        />
        <h1 className="font-bold text-lg mb-2">
          Location: {restaurant.area}, {restaurant.city}
        </h1>
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="font-bold mb-4 text-3xl">Menu</h1>
        <ul data-testid="menu">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between mb-4 shadow-sm hover:shadow-md cursor-pointer pl-5 pr-5"
            >
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold mt-2 text-green-600">
                  Rs. {item.price / 100}
                </p>
              </div>
              <button
                data-testid="addBtn"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
                onClick={() => addFoodItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

//2hr 17mins
