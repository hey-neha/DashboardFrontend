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
import { CgProfile } from "react-icons/cg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Employee from "./Employee";
import { TbClick } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { CiDatabase } from "react-icons/ci";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isData, setIsData] = useState(false);

  const DataFun = () => {
    setIsData(!isData);
  };

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

          <div className="flex w-full flex-col md:flex-row gap-3 mt-8 p-2 hover:bg-green-600 text-black rounded-xl hover:text-white">
            <div className="  bg-white shadow-white p-2 text-black  hover:text-green-500 rounded-xl">
              <CiHome style={{ width: "20px", height: "20px" }} />
            </div>
            <div className="">
              <span className="font-semibold  mt-16">Dashboard</span>
            </div>
          </div>

          {/*   ------------------ */}

          {/* second */}

          <div>
            <div className="flex w-full flex-col text-black md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white rounded-xl">
              <div className=" bg-white  shadow-2xl text-black   p-2 rounded-xl">
                <IoPeopleSharp
                  className=" hover:text-green-600"
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
              <div className="flex flex-col gap-5 ml-16 ">
                <span className="flex gap-5 hover:text-green-600">
                  {" "}
                  <p className=" w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p className="">Employee</p>
                </span>

                <span className="   flex gap-5   hover:text-green-600">
                  <p className=" w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  <p className="">Client</p>
                </span>
              </div>
            ) : (
              " "
            )}
          </div>

          {/*    ---------------- */}

          {/* third */}

          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 text-black hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black p-2 hover:text-green-600 rounded-xl">
              <FaHandPaper style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold  mt-12">Hr</span>
            </div>

            <div className="mt-2">
              <MdOutlineArrowForwardIos
                style={{ width: "12px", marginLeft: "120px" }}
              />
            </div>
          </div>

          {/* fourth */}

          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white  rounded-xl">
            <div className="bg-white shadow-2xl text-black p-1 hover:text-green-600 rounded-xl">
              <IoCameraReverse style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold  mt-12">Zoom meting</span>
            </div>

            <div className="mt-2">
              <MdOutlineArrowForwardIos
                style={{ width: "12px", marginLeft: "50px" }}
              />
            </div>
          </div>

          {/*  ---------- */}

          <div>
            <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-2 hover:bg-green-600 hover:text-white  rounded-xl">
              <div className="bg-white shadow-2xl text-black p-1 hover:text-green-600 rounded-xl">
                <CiDatabase style={{ width: "30px", height: "30px" }} />
              </div>
              <div>
                <span className="font-semibold  mt-12">ClientData</span>
              </div>

              <div className="mt-2">
                <MdOutlineArrowForwardIos
                  onClick={DataFun}
                  style={{ width: "12px", marginLeft: "60px" }}
                />
              </div>
            </div>

            {isData ? (
              <div className="flex flex-col gap-5 ml-16 relative z-10 ">
                <span className="flex gap-5 hover:text-green-600">
                  {" "}
                  <p className=" w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>
                  {/*        link add------------------------- */}
                  <p className="">Add</p>
                </span>

                <span className="   flex gap-5   hover:text-green-600">
                  <p className=" w-[5px] h-[5px] bg-green-400 rounded-full mt-3"></p>

                  <p className="">View</p>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/*  right side  -----------------------------------*/}

        <div className="w-full ">
          {/*   ------------------ left and right-------- */}

          <div className="flex justify-between  p-3 relative ">
            {/*    drop-down profile ------------------------- */}

            <div>
              <div className=" flex gap-2 w-[150px]  shadow-sm hover:bg-gray-100 rounded-2xl    p-3">
                <CgProfile style={{ width: "30px", height: "30px" }} />
                <h1 className="text-[18px]">Vereda</h1>
                <RiArrowRightWideFill
                  onClick={IsProfileFun}
                  style={{ marginTop: "5px" }}
                />
              </div>

              {isProfile ? (
                <div className="bg-white p-8 w-[210px] absolute z-50 shadow-2xl my-5 rounded-2xl  ">
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
                  onClick={IsTrueFun}
                  style={{ marginTop: "5px", width: "20px", height: "20px" }}
                />
              </div>

              <div className="mr-52">
                {isTrue ? (
                  <div className="bg-white  text-start w-[200px] absolute z-50 shadow-2xl my-5 rounded-2xl   ">
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
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* employee and dashbaord and 3 card using flex */}

          <div className="ml-5">
            <h1 className="font-semibold text-2xl mt-6">Dashboard</h1>

            {/*         three component--------------------------- */}
            <div className="flex justify-between  flex-col  md:flex-row gap-3">
              <div className="flex justify-between mt-12 p-7 w-1/3 rounded-lg shadow-lg">
                <div className="flex justify-between gap-6">
                  <div className="bg-orange-300 rounded-2xl p-2 ">
                    <TbClick
                      style={{
                        color: "white",
                        marginTop: "3px",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <span>
                    <p className="text-sm ">Total</p>
                    <h1 className="font-semibold text-xl">Clients</h1>
                  </span>
                </div>

                <h1 className="font-semibold text-xl">1</h1>
              </div>

              <div className="flex justify-between mt-12 p-7 w-1/3 rounded-lg shadow-lg">
                <div className="flex justify-between gap-6">
                  <div className="bg-green-300 p-2 rounded-2xl">
                    <IoMdPeople
                      style={{
                        color: "white",
                        marginTop: "6px",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <span>
                    <p className="text-sm ">Total</p>
                    <h1 className="font-semibold text-xl">Employees</h1>
                  </span>
                </div>

                <h1 className="font-semibold text-xl">2</h1>
              </div>

              <div className="flex justify-between mt-12 p-7 w-1/3 rounded-lg shadow-lg">
                <div className="flex justify-between gap-6">
                  <div className="bg-pink-600 p-2 rounded-2xl">
                    <GoProjectRoadmap
                      style={{
                        marginTop: "6px",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </div>

                  <span>
                    <p className="text-sm ">Total</p>
                    <h1 className="font-semibold text-xl">Projects</h1>
                  </span>
                </div>

                <h1 className="font-semibold text-xl">3</h1>
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

export default Dashboard;
