import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowindex, dummy }) => {
  // console.log("data in accordion", data);

  // const [showItems, setShowItems] = useState(false);//for open and close accordion state

  const toggleVisibility = () => {
    setShowindex(); // Toggle the current state (means flip the current state or change the current state)
    // console.log("showItems", !showItems); // Note: we log the new state, not current
  };

  return (
    <>
      <div className="my-1">
        <div
          className="bg-blue-200 shadow-sm w-6/12 mx-auto my-0.5 py-4 px-2 flex justify-between hover:cursor-pointer  hover:bg-blue-300 border border-yellow-100 rounded-lg"
          onClick={toggleVisibility}
        >
          {/*Header section*/}

          <span className="font-bold">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>{showItems ? "🔽" : "⏫"}</span>

          {/*Accordion Body section*/}
        </div>
        {showItems && (
          <div className="w-6/12 h-auto mx-auto  bg-blue-100 rounded-xl">
            <span>
              <ItemList items={data?.itemCards} dummy={dummy} />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCategory;
