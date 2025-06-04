import { CDN_URL } from "../utils/constants/";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-b-gray-500 rounded-xl my-0.5 "
            >
              <div className="flex justify-between font-normal px-2">
                <span className="px-2">
                  {item?.card?.info?.name}-(₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                  )<br />
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  {item?.card?.info?.ratings?.aggregatedRating?.rating < 4
                    ? "⭐⭐⭐⭐"
                    : "⭐⭐⭐⭐⭐"}
                  <br />
                </span>

                <div>
                  <button
                    className="bg-blue-300 hover:bg-blue-500 rounded-lg absolute py-0.5 px-1.5 ml-[-17] mt-14 text-xs font-semibold"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                  <img
                    className="w-26 h-16 px-1 py-1 rounded-lg shadow-xl"
                    src={CDN_URL + item?.card?.info?.imageId}
                  />
                </div>
              </div>

              <span className="flex justify-start flex-wrap font-light px-4 py-2 text-xs">
                {item.card.info.description}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
