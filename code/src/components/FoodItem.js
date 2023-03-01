import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-2 shadow hover:shadow-md cursor-pointer">
      <img
        src={
          cloudinaryImageId
            ? IMG_CDN_URL + cloudinaryImageId
            : "https://www.nepad.org/sites/default/files/styles/800_520/public/default_images/cop_placeholder_0.png?itok=upZ4ocsR"
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>
        <strong>Rupees:</strong> : {price / 100}
      </h4>
    </div>
  );
};

export default FoodItem;
