import { useState, useEffect,useContext } from "react";
import CreateContext from "../utils/UserContext";

const User = ({ name }) => {
  const [count, setCount] = useState(0); 
  const [count2] = useState(2);

  const {loggedInUserData}=useContext(CreateContext);

  useEffect(() => {
    const timer = setInterval(() => {
      
    }, 1000);

   

    return () => {
     
      clearInterval(timer); 
    };
  }, []);

  

  return (
    <>
      <div className="user-card">
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          COUNT
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:India</h3>
        <h4>Contact:chaitanya@</h4>
        <h4>Context data:{loggedInUserData}</h4>
      </div>
    </>
  );
};

export default User;
