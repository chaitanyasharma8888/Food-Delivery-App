import { CDN_URL } from "../Utils/Constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { restprop } = props;
  console.log("restprop 9090", restprop);

  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    restprop?.info;
  console.log(cuisines, "cuisines");

  const { loggedInUserData } = useContext(UserContext);

  return (
    <div className="p-4 bg-gray-200 m-2 w-[280px] h-[550px] rounded-lg hover:bg-gray-400 shadow-lg">
      <img
        className="w-[280px] h-80 rounded-lg"
        alt="rest-card"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5 className="font-bold py-2 text-xl">{name}</h5>
      <h5 className="font-thin">{costForTwo}Rupees</h5>
      <h6 className="flex flex-wrap overflow-clip font-thin">
        {cuisines.join(",")}
      </h6>
      <h6 className="font-thin">{avgRating}⭐⭐⭐⭐</h6>
    </div>
  );
};

export const withFastDelivery = (RestaurantCard) => {
  return (restprop) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 rounded-lg px-0.5 py-1 hover:cursor-pointer">
          FastDelivery⏫
        </label>

        <RestaurantCard {...restprop} />
      </div>
    );
  };
};

export default RestaurantCard;
