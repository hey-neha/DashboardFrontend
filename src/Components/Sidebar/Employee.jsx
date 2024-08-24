import React from "react";
import { CiHome } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { IoCameraReverse } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaFileCsv } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
// import Card from "./Card";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
// import Employee from "./Employee";
import { TbClick } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Card from "./Card";
import { CiDatabase } from "react-icons/ci";

const Employee = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCard, setIsCard] = useState(false);

  const ToggleFun = () => {
    setIsToggled(!isToggled);
  };

  const IsTrueFun = () => {
    setIsTrue(!isTrue);
  };

  const IsProfileFun = () => {
    setIsProfile(!isProfile);
  };

  const isCardFun = () => {
    setIsCard(!isCard);
  };

  /*  card--------------------------- */

  return (
    <>
      <div className="w-full h-auto md:h-screen p-3 bg-gray-10 flex">
        {/* left side------------------------------ */}

        <div className="md:h-screen w-full md:w-1/4 h-full">
          <div>
            <img
              className="mt-3"
              style={{ width: "50px", height: "50px", marginLeft: "90px" }}
              src="https://hr.politicksnow.in/storage/uploads/logo/logo-dark.png?timestamp=1722580507"
              alt="logo"
            />
          </div>
          {/*  first component start from here ------------------------------- */}

          <div className="flex w-full flex-col md:flex-row gap-3 mt-8 p-2 hover:bg-green-600 text-black rounded-xl hover:text-white">
            <div className="bg-white shadow-white p-2 text-black hover:text-green-500 rounded-xl">
              <CiHome style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold mt-16">Dashboard</span>
            </div>
          </div>

          {/* second */}
          <div>
            <div className="flex w-full flex-col text-black md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white rounded-xl">
              <div className="bg-white shadow-2xl text-black p-2 rounded-xl">
                <IoPeopleSharp
                  className="hover:text-green-600"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
              <div>
                <span className="font-semibold mt-20">Staff</span>
              </div>
              <div className="mt-3">
                <MdOutlineArrowForwardIos
                  onClick={ToggleFun}
                  style={{ width: "12px", marginLeft: "110px" }}
                />
              </div>
            </div>
            {isToggled ? (
              <div className="flex flex-col gap-5 ml-16">
                <span className="flex gap-5 hover:text-green-600">
                  <p className="w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p>Employee</p>
                </span>
                <span className="flex gap-5 hover:text-green-600">
                  <p className="w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p>Client</p>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* third */}
          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 text-black hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black p-2 hover:text-green-600 rounded-xl">
              <FaHandPaper style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold mt-12">Hr</span>
            </div>
            <div className="mt-4">
              <MdOutlineArrowForwardIos
                style={{ width: "12px", marginLeft: "130px" }}
              />
            </div>
          </div>
          {/* fourth */}
          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black p-1 hover:text-green-600 rounded-xl">
              <IoCameraReverse style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold mt-12">Zoom meeting</span>
            </div>
            <div className="mt-2">
              <MdOutlineArrowForwardIos
                style={{ width: "12px", marginLeft: "60px" }}
              />
            </div>
          </div>
          {/* 
          ----------------- */}

          <div>
            <div className="flex w-full flex-col text-black md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white rounded-xl">
              <div className="bg-white shadow-2xl text-black p-2 rounded-xl">
                <IoPeopleSharp
                  className="hover:text-green-600"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
              <div>
                <span className="font-semibold mt-20">ClientData</span>
              </div>
              <div className="mt-3">
                <MdOutlineArrowForwardIos
                  onClick={ToggleFun}
                  style={{ width: "12px", marginLeft: "110px" }}
                />
              </div>
            </div>
            {isToggled ? (
              <div className="flex flex-col gap-5 ml-16">
                <span className="flex gap-5 hover:text-green-600">
                  <p className="w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p>Add</p>
                </span>
                <span className="flex gap-5 hover:text-green-600">
                  <p className="w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p>View</p>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* right side -----------------------------------*/}
        <div className="w-full">
          {/* left and right */}
          <div className="flex justify-between p-3 relative">
            {/* drop-down profile */}
            <div>
              <div className="flex gap-2 w-[150px] shadow-sm hover:bg-gray-100 rounded-2xl p-3">
                <CgProfile style={{ width: "30px", height: "30px" }} />
                <h1 className="text-[18px]">Vereda</h1>
                <RiArrowRightWideFill
                  onClick={IsProfileFun}
                  style={{ marginTop: "5px" }}
                />
              </div>
              {isProfile ? (
                <div className="bg-white p-8 w-[210px] absolute z-10 shadow-2xl my-5 rounded-2xl">
                  <div className="flex justify-center gap-5 hover:bg-gray-200 mr-7">
                    <CgProfile style={{ width: "20px", height: "20px" }} />
                    <p>Profile</p>
                  </div>
                  <div className="flex justify-center hover:bg-gray-200 gap-5 mr-7 mt-8">
                    <IoMdLogOut style={{ width: "20px", height: "20px" }} />
                    <p>Logout</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* right */}
            <div>
              <div className="p-3 flex shadow-sm justify-around w-[150px] hover:bg-gray-100 rounded-2xl">
                <TbWorld
                  style={{ marginTop: "5px", width: "20px", height: "20px" }}
                />
                <h2>English</h2>
                <RiArrowRightWideFill
                  onClick={IsTrueFun}
                  style={{ marginTop: "5px", width: "20px", height: "20px" }}
                />
              </div>
              <div className="mr-52">
                {isTrue ? (
                  <div className="bg-white text-start w-[200px] absolute z-10 shadow-2xl my-5 rounded-2xl">
                    <div className="flex justify-center flex-col w-full gap-2 mt-8">
                      <p className="hover:bg-gray-200 w-full p-2">English</p>
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
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* employee and dashboard and 3 card using flex */}
          <div>
            <div>
              {/* three component */}
              <div className="flex justify-between mt-5">
                <div className="mt-3 ml-5">
                  <h1 className="text-2xl">Employee</h1>
                  <div className="flex justify-between mt-3 gap-3">
                    <p className="text-green-500">Dashboard</p>
                    <MdOutlineArrowForwardIos style={{ marginTop: "6px" }} />
                    <p>Employee</p>
                  </div>
                </div>
                {/* card components start from here---------------------------------------------- */}

                <div>{isCard ? <Card /> : ""}</div>

                {/* three card */}
                <div className="flex justify-center gap-1 h-10 mr-16">
                  <div className="p-3 text-white bg-green-600 rounded-lg">
                    <GoPeople style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div className="p-3 text-white bg-green-600 rounded-lg">
                    <FaFileCsv style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div className="p-3 text-white bg-green-600 rounded-lg">
                    <IoIosAdd
                      onClick={isCardFun}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 relative">
                {/* boxes - card */}
                <div className="border text-center rounded-lg h-auto mx-5 p-5 w-1/4">
                  <button
                    className="text-white p-2 rounded-2xl bg-green-600"
                    onClick={isCardFun}
                  >
                    <span className="font-bold text-3xl">+</span>
                  </button>
                  <h1 className="font-semibold mt-4">New Employee</h1>
                  <p className="mt-3 text-gray-500">
                    Click here to add new employee
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card container with flex boxes */}
        </div>
      </div>
    </>
  );
};

export default Employee;
