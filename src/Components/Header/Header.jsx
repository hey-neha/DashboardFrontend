import React from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import { useState } from "react";

const Header = () => {
  const [state, setstate] = useState(false);

  const stateFun = () => {
    setstate(!state);
  };
  return (
    <div className="w-full  h-screen flex flex-col">
      <div className="p-5">
        <Navbar />
      </div>
      <div
        className="flex flex-col md:flex-row justify-center items-center w-full h-screen  
"
      >
        {/*  left part */}

        <div className="full">
          <img
            className="mt-10 w-[260px] md:w-[500px]"
            src="https://hr.politicksnow.in/assets/custom/auth/images/theme-3.svg"
            alt=""
          />
        </div>

       <Register/>

        {/*  <LoginPage1 />  */}

        <div className="full">
          <img
            className="w-full max-w-[1000px] h-auto"
            src="https://hr.politicksnow.in/assets/custom/auth/images/common.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
