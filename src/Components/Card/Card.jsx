import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [inputArr, setInputArr] = useState([]);
  const [inputData, setInputData] = useState({
    fullname: "",
    mobileNum: "",
    altmobileNum: "",
    dob: "",
    qualification: "",
    email: "",
    intrested: "",
    remark: "",
  });

  const [isCard, setIsCard] = useState(true);
  const isCardFun = () => {
    setIsCard(!isCard);
  };

  function changeHandle(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function changHandle(event) {
    event.preventDefault();

    const {
      fullname,
      mobileNum,
      altmobileNum,
      dob,
      qualification,
      email,
      intrested,
      remark,
    } = inputData;

    setInputArr([
      ...inputArr,
      {
        fullname,
        mobileNum,
        altmobileNum,
        dob,
        qualification,
        email,
        intrested,
        remark,
      },
    ]);

    if (
      fullname &&
      email &&
      mobileNum &&
      altmobileNum &&
      qualification &&
      intrested &&
      remark &&
      dob
    ) {
      axios
        .post("http://localhost:9002/create-employee", inputData)
        .then((res) => {
          console.log(res.data.message);
        });
    } else {
      alert("Invalid input");
    }
  }

  useEffect(() => {
    console.log(inputArr);
  }, [inputArr]);

  return (
    <>
      <div
        className={`w-full max-w-md h-auto p-4 md:h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-lg rounded-lg ${
          isCard ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            Create New Employee
          </h1>
          <span
            className="text-2xl cursor-pointer text-gray-600 hover:text-red-500"
            onClick={isCardFun}
          >
            <RxCross1 />
          </span>
        </div>

        <form onSubmit={changHandle}>
          {/*       name-------------------------------- */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="fullname"
              value={inputData.fullname}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter Name"
            />
          </div>

          {/*     mobile number --------------------------------*/}

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              name="mobileNum"
              value={inputData.mobileNum}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter Your Mobile Number"
            />
          </div>

          {/*      Alt Number --------------------------------------------------------*/}

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Alt Number
            </label>
            <input
              name="altmobileNum"
              value={inputData.altmobileNum}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter Your Alternate Mobile Number"
            />
          </div>

          {/*    DOB -----------------------------------------*/}

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              name="dob"
              value={inputData.dob}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="date"
              placeholder="Enter DOB"
            />
          </div>

          {/* Qualification ------------------------------------------------*/}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Qualification
            </label>
            <input
              name="qualification"
              value={inputData.qualification}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter Your qualification"
            />
          </div>
          {/*      Email Id --------------*/}

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={inputData.email}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="email"
              placeholder="Enter Email"
            />
          </div>

          {/* intrested ------------------------------*/}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Intrested
            </label>
            <input
              name="intrested"
              value={inputData.intrested}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter your interests "
            />
          </div>

          {/*     remark ------------------------------------------------*/}

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Remark
            </label>
            <input
              name="remark"
              value={inputData.remark}
              onChange={changeHandle}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              type="text"
              placeholder="Enter your remark "
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={isCardFun}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1.5 rounded-lg shadow-sm"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-white hover:bg-green-700 px-3 py-1.5 rounded-lg shadow-sm"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Card;
