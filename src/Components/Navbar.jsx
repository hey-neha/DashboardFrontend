import React from "react";

const Navbar = () => {
  return (
    <div className="h-auto w-full p-1 bg-white  shadow-2xl white rounded-xl">
      <div className="flex justify-between mx-11 md:mx-20 ">
        <img
          className="mt-3"
          style={{ width: "50px", height: "50px" }}
          src="https://hr.politicksnow.in/storage/uploads/logo/logo-dark.png?timestamp=1722580507"
          alt=""
        />

        {/*    drop-down */}

        <div>
          <select id="language" className="p-3 rounded w-32 outline-none">
            <option value="" disabled>
              Select a language
            </option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="jp">Japanese</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
