import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaFileCsv } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import Card from "./Card";

const Dashboard = () => {
  const [isTrue, setIsTrue] = useState(true);

  const toggleFunction = () => {
    setIsTrue(!isTrue);
  };

  return (
    <>
      <div className="w-fulll h-auto md:h-screen p-3 bg-gray-50  z-1  absolute flex justify-between">
        {/* left side------------------------------ */}

        <div className="md:h-screen w-full   md:w-1/4 h-full">
          <div>
            <img
              className="mt-3"
              style={{ width: "50px", height: "50px", marginLeft: "90px" }}
              src="https://hr.politicksnow.in/storage/uploads/logo/logo-dark.png?timestamp=1722580507"
              alt=""
            />
          </div>
          {/*  first component start from here ------------------------------- */}

          <div className="flex w-full flex-col md:flex-row gap-3 mt-8 p-2 bg-green-600 text-white rounded-xl">
            <div className="bg-white p-2 text-green-600 rounded-xl">
              <CiHome style={{ width: "30px", height: "30px" }} />
            </div>
            <div>
              <span className="font-semibold  mt-12">Dashboard</span>
            </div>
          </div>

          {/* second */}

          <div className="flex w-full flex-col text-black md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white rounded-xl">
            <div className=" bg-white  shadow-2xl text-black   p-2 rounded-xl">
              <IoPeopleSharp
                className=" hover:text-green-600"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div>
              <span className="font-semibold mt-20">Staff</span>
            </div>

            <div className="mt-4">
              <MdOutlineArrowForwardIos style={{ marginLeft: "110px" }} />
            </div>
          </div>

          {/* third */}

          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 text-black hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black p-2 hover:text-green-600 rounded-xl">
              <FaHandPaper style={{ width: "30px", height: "30px" }} />
            </div>
            <div>
              <span className="font-semibold  mt-12">Hr</span>
            </div>

            <div className="mt-4">
              <MdOutlineArrowForwardIos style={{ marginLeft: "120px" }} />
            </div>
          </div>

          {/* fourth */}

          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white  rounded-xl">
            <div className="bg-white shadow-2xl text-black  p-2 hover:text-green-600 rounded-xl">
              <IoCameraReverse style={{ width: "30px", height: "30px" }} />
            </div>
            <div>
              <span className="font-semibold  mt-12">Zoom meting</span>
            </div>

            <div className="mt-4">
              <MdOutlineArrowForwardIos style={{ marginLeft: "60px" }} />
            </div>
          </div>
        </div>

        {/*  right side  -----------------------------------*/}

        <div className="w-full ">
          {/*   ------------------ left and right-------- */}

          <div className="flex justify-between p-4 mx-20">
            {/*     left --------*/}
            <div>
              <select
                id="language"
                className="p-3  rounded-2xl w-32 outline-none"
              >
                <option value="" disabled></option>
                <option value="en">Profile</option>
                <option value="es">Logout</option>
              </select>
            </div>

            {/*      right */}

            <div className="">
              <select
                id="language"
                className="p-3 rounded-2xl w-32 outline-none "
              >
                <option value=""></option>
                <option className="hover:text-green-600">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="jp">Japanese</option>
              </select>
            </div>
          </div>

          {/* employee and dashbaord and 3 card using flex */}
          <div className="flex gap-[350px]">
            <div className="mx-28 mt-5">
              <h1 className="text-2xl">Employee</h1>
              <p className="pt-2">Dashboard</p>
            </div>
            {/*      three card --------------------------*/}

            <div className="flex justify-center mt-12 ml-32 gap-1 h-10">
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
          {/*       card  container with flex boxex--------------------- */}

          <div className="">
            {/*      boxes --- card---------- */}

            <div className=" mx-20  border text-center rounded-lg h-auto mt-3 p-5 w-1/4">
              <button className="text-white p-2 rounded-2xl  bg-green-600">
                <spna className="font-bold text-3xl">+</spna>
              </button>
              <h1 className=" font-semibold mt-4 "> new Employee</h1>
              <p className="mt-3 text-gray-500">
                Click here to add new employee
              </p>
            </div>
          </div>

          <div className="flex justify-center z-50 ">
            <Card/>
          </div>

          {/* ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
