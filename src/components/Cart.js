import { useSelector, useDispatch } from "react-redux";
import AddedCartItems from "../components/AddedCartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const data = useSelector((store) => store.cart.items); 
  console.log("data90909", data);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center ">
        <h2 className="font-bold m-3">Cart Added Items</h2>
        <button
          className="m-3 bg-gray-500 text-white p-2 rounded-xl hover: cursor-pointer hover:bg-gray-700"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {data.length === 0 ? (
          <h2 className="font-medium m-16">
            Cart is Empty.<br/>Please Add Items into Cart.
          </h2>
        ) : (
          <div className="px-4 w-3/12 m-auto">
            <AddedCartItems items={data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
