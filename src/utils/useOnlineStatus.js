//how to think for creating the hook
//first think about the contract of hook i.e what is input of hook and what is output/return of hook
//without turning off internet connection browser gives us ability to check our website how it behave when go offline or simulate a offline experience

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    }); //way to add eventListener to webpage via javascript

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []); //executed just once due to empty array of dependency

  return onlineStatus;
};


export default useOnlineStatus;
