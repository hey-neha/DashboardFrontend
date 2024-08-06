import React from "react";
import { GoPeople } from "react-icons/go";
import { FaFileCsv } from "react-icons/fa";
// import { IoIosAdd } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";
// import { FaFileCsv } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import Card from "./Card";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { TbClick } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { useState } from "react";

const Employee = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
      {/*  ---------------- */}

      <div className="w-fulll h-auto md:h-screen p-3  bg-gray-10 flex">
        {/* left side------------------------------ */}

        <div className="md:h-screen w-full md:w-1/4 h-full">
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

          <div className="flex justify-between  p-3 ">
            {/*    drop-down profile ------------------------- */}

            <div>
              <div className=" flex gap-2 w-[150px]  shadow-sm hover:bg-gray-100 rounded-2xl  ml-16  p-3">
                <CgProfile style={{ width: "30px", height: "30px" }} />
                <h1 className="text-[18px]">Vereda</h1>
                <RiArrowRightWideFill
                  onClick={() => setIsTrue(true)}
                  style={{ marginTop: "5px" }}
                />
              </div>

              {isTrue ? (
                <div className="bg-white p-8 w-[210px] shadow-2xl my-5 rounded-2xl relative z-10 ">
                  <div className="flex justify-center gap-5  hover:bg-gray-200 mr-7">
                    <CgProfile style={{ width: "20px", height: "20px" }} />
                    <p>Profile</p>
                  </div>

                  <div className="flex justify-center  hover:bg-gray-200 gap-5 mr-7 mt-8">
                    <IoMdLogOut style={{ width: "20px", height: "20px" }} />
                    <p>Logout</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            {/*      right */}

            <div>
              <div className="p-3 flex shadow-sm  justify-around w-[150px] hover:bg-gray-100 rounded-2xl">
                <TbWorld
                  style={{ marginTop: "5px", width: "20px", height: "20px" }}
                />
                <h2>English</h2>

                <RiArrowRightWideFill
                  onClick={() => setIsTrue(true)}
                  style={{ marginTop: "5px", width: "20px", height: "20px" }}
                />
              </div>

              <div className="bg-white w-[210px] text-start shadow-2xl my-5 rounded-2xl relative  ">
                {isTrue ? (
                  <div className="flex justify-center flex-col w-full gap-2  mt-8">
                    <p className="hover:bg-gray-200 w-full p-2 ">English</p>
                    <p className="hover:bg-gray-200 w-full p-2">Spanish</p>
                    <p className="hover:bg-gray-200 w-full p-2">Portuguese</p>
                    <p className="hover:bg-gray-200 w-full p-2">
                      Mandarin Chinese
                    </p>
                    <p className="hover:bg-gray-200 w-full p-2">Hindi</p>
                    <p className="hover:bg-gray-200 w-full p-2">Russian</p>
                    <p className="hover:bg-gray-200 w-full p-2">Japanese</p>
                    <p className="hover:bg-gray-200 w-full p-2">German</p>
                    <p className="hover:bg-gray-200 w-full p-2">French</p>
                    <p className="hover:bg-gray-200 w-full p-2">Italian</p>
                    <p className="hover:bg-gray-200 w-full p-2">Korean</p>
                    <p className="hover:bg-gray-200 w-full p-2">Turkish</p>
                    <p className="hover:bg-gray-200 w-full p-2">Arabic</p>
                    <p className="hover:bg-gray-200 w-full p-2">
                      Persian (Farsi)
                    </p>
                    <p className="hover:bg-gray-200 w-full p-2">Yoruba</p>
                    <p className="hover:bg-gray-200 w-full p-2">Xhosa</p>
                    <p className="hover:bg-gray-200 w-full p-2">Zulu</p>
                    <p className="hover:bg-gray-200 w-full p-2">Igbo</p>
                    <p className="hover:bg-gray-200 w-full p-2">Bengali</p>
                    <p className="hover:bg-gray-200 w-full p-2">Vietnamese</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* employee and dashbaord and 3 card using flex */}

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
                <p className="mt-3 text-gray-500">
                  Click here to add new employee
                </p>
              </div>
            </div>
          </div>

          {/*       card  container with flex boxex--------------------- */}

          {/*  <div className="flex justify-center z-50 ">
            <Card />
          </div> */}

          {/* ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default Employee;
