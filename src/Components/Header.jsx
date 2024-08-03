import React from "react";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";

const Header = () => {
  return (
    <div className="w-full  h-screen">
      <div className="p-5">
        <Navbar />
      </div>
      <div
        className="  flex justify-center w-full h-screen flex-col md:flex-row 
"
      >
        {/*  left part */}

        <div className=" w-full ">
          <img
            className="mt-10"
            style={{ width: "260px" }}
            src="https://hr.politicksnow.in/assets/custom/auth/images/theme-3.svg"
            alt=""
          />
        </div>

        {/*   right part */}

        <div className="mt-40 md:mt-64">
          <LoginPage />
        </div>

        <div className="">
          <img
            className=""
            style={{ width: "400px" }}
            src="https://hr.politicksnow.in/assets/custom/auth/images/common.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
