import { useState, useEffect } from "react";
import restaurantData from '../utils/mockAPI.json';

const useBodyFetchMenu = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const dataRec = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await dataRec.json();
    // console.log("jsonjson",json);
    setListOfRestaurants(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    setFilteredRestaurant(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant,setListOfRestaurants };
};

export default useBodyFetchMenu;
