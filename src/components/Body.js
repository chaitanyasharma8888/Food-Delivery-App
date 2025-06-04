import RestaurantCard, { withFastDelivery } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useBodyFetchMenu from "../utils/useBodyFetchMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    setListOfRestaurants,
  } = useBodyFetchMenu();
  const [searchText, setSearchText] = useState("");
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const RestaurantCardFastDelivery = withFastDelivery(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Internet Not connected !! please check your connection</h1>;
  }

  const { userName, setUserName, loggedInUserData } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex justify-between mx-4">
          <div className="m-4 p-4">
            <button
              className="bg-orange-200 px-4 py-0.5 rounded-md shadow-lg hover:bg-orange-300"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => {
                  return res.info.avgRating >= 4.6;
                });

                setFilteredRestaurant(filteredList);
                setIsFilterApplied(true);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>

          <div className="m-4 p-4">
            <label>User Name : </label>
            <input
              value={loggedInUserData}
              className="border Border-black px-1"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="m-4 p-4">
            {" "}
            <input
              type="text"
              className="border border-solid border-black mr-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-green-300 px-3 py-0.5 rounded-md shadow-lg hover:bg-green-400"
              onClick={() => {
                const filteredData = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurant(filteredData);
                setIsFilterApplied(true);
              }}
            >
              Search
            </button>
            {isFilterApplied && (
              <button
                className="bg-blue-200 px-4 py-0.5 mx-2 rounded-md shadow-lg hover:bg-blue-300"
                onClick={() => {
                  setFilteredRestaurant(listOfRestaurants);
                  setIsFilterApplied(false);
                }}
              >
                Show All
              </button>
            )}
          </div>
        </div>
        <div className="flex auto flex-wrap mx-4">
          {(isFilterApplied ? filteredRestaurant : listOfRestaurants).map(
            (res) => (
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                {res.info.sla.deliveryTime <= 30 ? (
                  <RestaurantCardFastDelivery restprop={res} />
                ) : (
                  <RestaurantCard restprop={res} />
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
