import { LOGO_URL } from "../Utils/Constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";

const Header = () => {
  const [loginData, setLoginData] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUserData } = useContext(UserContext); 
  console.log("data User Login:", loggedInUserData);

  
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex justify-between bg-blue-50 shadow-lg my-2 rounded-sm w-full ">
      <div className="logo-container">
        <img className="w-40 rounded-sm" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4">
          <li className="px-2 font-bold">
            OnlineStatus{onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-2 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold">
            
            <Link to="/cart" data-testid="cart-count">🛒({cartItems.length} Items)</Link>
          </li>
          <button
            className="login px-4 font-normal bg-blue-200 hover:bg-blue-300 rounded-md"
            onClick={() => {
              loginData === "Login"
                ? setLoginData("Logout")
                : setLoginData("Login");
            }}
          >
            {loginData === "Login"
              ? loginData
              : loginData + " :" + loggedInUserData}
          </button>
       
        </ul>
      </div>
    </div>
  );
};

export default Header;
