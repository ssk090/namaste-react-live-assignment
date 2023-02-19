import { IMG_CDN_URL } from "../contants";

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <>
      <div className="w-[200px] border border-black p-[10px] m-[10px] rounded-[5px]">
        <img
          className="w-full rounded-[5px]"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
