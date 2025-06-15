import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import mockAPIMenuData from "../utils/mockAPImenuData.json"

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_API + resId);
    // const json = await data.json();
    setResInfo(mockAPIMenuData?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
