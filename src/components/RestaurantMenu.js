import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowindex] = useState(null);
  const dummy = "dummy";

  if (resInfo === null) return <Shimmer />;

  const { name, city, avgRating, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="text-center pb-2">
        <h4 className="font-bold my-6 text-2xl m-1">{name}</h4>
        <p className="font-semibold m-1">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>

        {categories.map((category, index) => {
          return (
            <div key={index}>
              <RestaurantCategory
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowindex={() => setShowindex(index)}
                dummy={dummy}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
