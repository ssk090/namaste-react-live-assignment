import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Mixes",
  "Flights",
  "Music",
  "React",
  "Computer",
  "Gaming",
  "Live",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {lists.map((list) => {
        return <Button key={list} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
{
  /* <div className="flex">
<Button name="All" />
<Button name="Gaming" />
<Button name="Songs" />
<Button name="Live" />
<Button name="Cricket" />
<Button name="Football" />
<Button name="News" />
<Button name="Cooking" />
<Button name="Valentine's" />
</div>; */
}
