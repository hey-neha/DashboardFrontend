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
import Card from "../Card/Card";
import { CiDatabase } from "react-icons/ci";
import FileCom from "../File/FileCom";
import veredaImg from "../../assets/veredaLogo.jpg";
import MyTable from "../Table/MyTable";

import { BsArrowBarUp } from "react-icons/bs";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

const Add = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [dataToggle, setDataToggle] = useState(false);
  const [isfile, setIsFile] = useState(false);

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

  const dataToggleFun = () => {
    setDataToggle(!dataToggle);
  };

  const fileFun = () => {
    setIsFile(!isfile);
  };

  return (
    <>
      <div className="w-full h-auto md:h-screen p-3 bg-gray-10 flex">
        {/* left side------------------------------ */}

        <div className="md:h-screen hidden md:block w-full md:w-1/6 h-full">
          <div>
            <img
              className="mt-3"
              style={{ width: "80px", height: "50px", marginLeft: "8px" }}
              src={veredaImg}
              alt="logo"
            />
          </div>
          {/*  first component start from here ------------------------------- */}

          <div className="flex w-full flex-col md:flex-row gap-3 mt-9 md:mt-11 p-1  hover: bg-gradient-to-r from-[#53ADE4] to-[#277BA8]    rounded-xl hover:text-white">
            <div className="bg-white shadow-white p-2  w-1/3 md:w-1/5 text-black  rounded-xl">
              <CiHome style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <span className="font-semibold mt-16 text-center text-white">
                Dashboard
              </span>
            </div>
          </div>

          {/* second */}
          <div>
            <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-1  hover:text-white rounded-xl hover: bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  ">
              <div className="bg-white shadow-white text-black p-2 w-1/3 md:w-1/5  rounded-xl">
                <IoPeopleSharp
                  className="hover:text-green-600"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>

              <div className="flex justify-around gap-10 md:gap-16">
                <div>
                  <span className="font-semibold mt-16 text-center text-white">
                    Staff
                  </span>
                </div>
                <div className="mt-2 text-white">
                  <MdOutlineArrowForwardIos
                    onClick={ToggleFun}
                    className=""
                    style={{ width: "12px" }}
                  />
                </div>
              </div>
            </div>
            {isToggled ? (
              <div className="flex flex-col  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]   gap-2 md:gap-4 md:text-center   ">
                <span className="flex gap-5">
                  <p className="w-[5px] h-[5px] text-center  rounded-full mt-3"></p>
                  <p className="text-[17px] font-semibold">Employee</p>
                </span>
                <span className="flex gap-5 ">
                  <p className="w-[5px] h-[5px]  text-center rounded-full mt-3"></p>
                  <p className="text-[17px] font-semibold">Client</p>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* third */}
          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-1 hover: bg-gradient-to-r from-[#53ADE4] to-[#277BA8] hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black  w-1/3 md:w-1/5  p-2 hover:text-green-600 rounded-xl">
              <FaHandPaper style={{ width: "20px", height: "20px" }} />
            </div>

            <div className="flex justify-around gap-10 md:gap-20">
              <div>
                <span className="font-semibold mt-16 text-center text-white">
                  Hr
                </span>
              </div>
              <div className="mt-2">
                <MdOutlineArrowForwardIos
                  className=" text-white"
                  style={{ width: "12px", marginLeft: "" }}
                />
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="flex w-full flex-col md:flex-row gap-3 my-3 p-1 hover: bg-gradient-to-r from-[#53ADE4] to-[#277BA8] hover:text-white rounded-xl">
            <div className="bg-white shadow-2xl text-black  w-1/3 md:w-1/5  p-2  hover:text-green-600 rounded-xl">
              <IoCameraReverse style={{ width: "20px", height: "20px" }} />
            </div>
            <div className="flex justify-around gap-10 md:gap-14 ">
              <div>
                <span className="font-semibold mt-16 text-center text-white">
                  Zoom
                </span>
              </div>
              <div className="mt-2">
                <MdOutlineArrowForwardIos
                  className=" text-white"
                  style={{ width: "12px" }}
                />
              </div>
            </div>
          </div>
          {/* 
          ----------------- */}

          <div>
            <div className="flex w-full flex-col  md:flex-row gap-3 my-3 p-1 hover: bg-gradient-to-r from-[#53ADE4] to-[#277BA8] hover:text-white rounded-xl">
              <div className="bg-white shadow-2xl text-black   w-1/3 md:w-1/5  p-2  rounded-xl">
                <IoPeopleSharp
                  className=""
                  style={{ width: "20px", height: "20px" }}
                />
              </div>

              <div className="flex justify-between gap-6 md:gap-7">
                <div>
                  <span className="font-semibold mt-20 text-center text-white">
                    Candidate
                  </span>
                </div>
                <div className="mt-2">
                  <MdOutlineArrowForwardIos
                    className=" text-white"
                    onClick={dataToggleFun}
                    style={{ width: "12px" }}
                  />
                </div>
              </div>
            </div>
            {dataToggle ? (
              <div className="flex flex-col  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  gap-2 md:gap-4 md:text-center">
                <span className="flex  gap-5">
                  <p className="w-[5px] h-[5px]  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  text-center  rounded-full mt-3"></p>
                  <p className="text-[17px] font-semibold">Add</p>
                </span>
                <span className="flex gap-5 ">
                  <p className="w-[5px] h-[5px]  text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]   rounded-full mt-3"></p>
                  <p className="text-[17px] font-semibold">View</p>
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

          <div className=" flex flex-row-reverse  relative mr-[14px] md:mr-[42px]">
            {/* drop-down profile */}
            <div>
              <div className="flex gap-2 w-[150px] shadow-sm hover:bg-gray-100 rounded-2xl p-2">
                <CgProfile style={{ width: "30px", height: "30px" }} />
                <img src={veredaImg} className="w-14 h-10" alt="" />
                <RiArrowRightWideFill onClick={IsProfileFun} className="mt-2" />
              </div>
              {isProfile ? (
                <div className="bg-white p-8 w-[210px] absolute z-10 shadow-2xl my-5 rounded-2xl ">
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

            {/*    english language section ---------------------------------------------*/}
            <div className="hidden  md:block">
              <div>
                <div className="p-3 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ml-10  md:ml-11 flex shadow-sm justify-around w-[150px] text-white hover:bg-gray-100 rounded-2xl">
                  <TbWorld
                    style={{ marginTop: "", width: "30px", height: "30px" }}
                  />
                  <h2>English</h2>
                  <RiArrowRightWideFill
                    onClick={IsTrueFun}
                    className="mt-1"
                    style={{ marginTop: "", width: "20px", height: "20px" }}
                  />
                </div>
                <div className="mr-52">
                  {isTrue ? (
                    <div className="bg-white text-start w-[200px] absolute z-10 shadow-2xl my-5 rounded-2xl">
                      <div className="flex justify-center flex-col w-full gap-2 mt-8">
                        <p className="hover:bg-gray-200 w-full p-2">English</p>
                        <p className="hover:bg-gray-200 w-full p-2">Spanish</p>
                        <p className="hover:bg-gray-200 w-full p-2">
                          Portuguese
                        </p>
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
                        <p className="hover:bg-gray-200 w-full p-2">
                          Vietnamese
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {/* right */}
          </div>
          {/* employee and dashboard and 3 card using flex */}
          <div className="">
            <div className="">
              {/* export, import, search and delete */}
              <div className="flex flex-col md:flex-row md:justify-between gap-7 mt-5 md:mt-12">
                {/* Left section */}
                <div className="flex justify-between gap-1 mt-1 md:ml-9">
                  {/* Export Button */}
                  <div className="flex-grow bg-gradient-to-r from-[#53ADE4] to-[#277BA8] h-[45px] flex p-4 items-center gap-2 rounded text-white">
                    <BsArrowBarUp className="w-5 h-5 mt-1" />
                    <span className="text-[18px]">Export</span>
                  </div>

                  {/* Import Button */}
                  <div className="flex-grow bg-gradient-to-r from-[#53ADE4] to-[#277BA8] h-[45px] flex p-4 items-center gap-2 rounded text-white">
                    <HiOutlineArrowDownTray className="w-5 h-5 mt-1" />
                    <span className="text-[18px]">Import</span>
                  </div>

                  {/* Delete Button */}
                  <div className="flex-grow bg-gradient-to-r from-[#53ADE4] to-[#277BA8] h-[45px] flex p-4 items-center gap-2 rounded text-white">
                    <MdOutlineDeleteForever className="w-5 h-5 mt-1" />
                    <span className="text-[18px]">Delete</span>
                  </div>

                  {/* Sort by Button */}
                  <div className="flex-grow bg-gradient-to-r from-[#53ADE4] to-[#277BA8] h-[45px] flex p-4 items-center gap-2 rounded text-white">
                    <LiaSortAmountDownSolid className="w-5 h-5 mt-1" />
                    <span className="text-[16px]">Sort by</span>
                  </div>
                </div>

                {/* Right section */}
                <div className="flex flex-col md:flex-row justify-center gap-2 h-10 md:mr-9 mt-3 md:mt-0">
                  {/* Search Bar */}
                  <div className="flex-grow flex justify-center p-2 border-2 bg-gray-100 rounded h-[45px]">
                    <IoIosSearch className="w-6 h-7 mt-1" />
                    <input
                      className="border-none text-[16px] bg-gray-100 w-full"
                      type="text"
                      placeholder="Search"
                    />
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-1">
                    <div className="p-3 text-white bg-gradient-to-r from-[#53ADE4] to-[#277BA8] rounded-lg">
                      <GoPeople className="w-5 h-5" />
                    </div>

                    {/* CSV file section */}
                    <div className="relative">
                      <div
                        onClick={fileFun}
                        className="p-3 text-white bg-gradient-to-r from-[#53ADE4] to-[#277BA8] rounded-lg cursor-pointer"
                      >
                        <FaFileCsv className="w-5 h-5" />
                      </div>

                      {/* File upload form */}
                      {isfile && (
                        <div className="bg-white p-8 absolute z-10 shadow-2xl my-2 rounded-2xl">
                          <FileCom />
                        </div>
                      )}
                    </div>

                    {/* Add New Item Button */}
                    <div className="p-3 text-white bg-gradient-to-r from-[#53ADE4] to-[#277BA8] rounded-lg">
                      <IoIosAdd onClick={isCardFun} className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Component */}
              {isCard && <Card />}

              {/* Table Component */}
              <div className="mt-5">
                <MyTable />
              </div>
            </div>
          </div>

          {/* card container with flex boxes */}
        </div>
      </div>
    </>
  );
};

export default Add;
