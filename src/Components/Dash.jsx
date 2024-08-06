import React, { useState } from "react"; /* 
import { CiHome } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb"; */

// import { CiHome } from "react-icons/ci";
// import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaFileCsv } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io"; /* 
import Card from "./Card";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Employee from "./Employee";
import { TbClick } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go"; */

const Dashboard = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const ToggleFun = () => {
    setIsToggled(!isToggled);
  };

  const IsTrueFun = () => {
    setIsTrue(!isTrue);
  };

  const IsProfileFun = () => {
    setIsProfile(!isProfile);
  };

  return (
    <>
      <div className="">
        {/*         three component--------------------------- */}

        <div className="flex justify-between mx-16 ">
          <div className="mt-3 ml-5">
            <h1 className="text-2xl">Employee</h1>

            <div className="flex justify-between mt-3 gap-3">
              <p className="text-green-500">Dashboard</p>
              <MdOutlineArrowForwardIos style={{ marginTop: "6px" }} />
              <p>Employee</p>
            </div>
          </div>
          {/*      three card --------------------------*/}

          <div className="flex justify-center gap-1 h-10">
            <div className="p-3 text-white bg-green-600  rounded-lg">
              <GoPeople style={{ width: "20px ", height: "20px" }} />
            </div>
            <div className="p-3 text-white bg-green-600  rounded-lg">
              <FaFileCsv style={{ width: "20px ", height: "20px" }} />
            </div>

            <div className="p-3 text-white bg-green-600  rounded-lg">
              <IoIosAdd style={{ width: "20px ", height: "20px" }} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/*      boxes --- card---------- */}
          <div className=" mx-20  border text-center rounded-lg h-auto  p-5 w-1/4">
            <button className="text-white p-2 rounded-2xl  bg-green-600">
              <spna className="font-bold text-3xl">+</spna>
            </button>
            <h1 className=" font-semibold mt-4 "> new Employee</h1>
            <p className="mt-3 text-gray-500">Click here to add new employee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
