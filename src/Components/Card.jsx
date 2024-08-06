import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Card = () => {
  const [inputArr, setInputArr] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const [isCard, setIsCard] = useState(false);

  const isCardFun = () => {
    setIsCard(!isCard);
  };

  function changeHandle(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  let { name, email } = inputData;

  function changHandle() {
    setInputArr([...inputArr, { name, email }]);
  }

  useEffect(() => {
    console.log(inputArr);
  }, [inputArr]);

  return (
    <>
      <div
        className={`w-full h-auto p-7 md:w-[60%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-2xl rounded-xl ${
          isCard ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px]">Create New Employee</h1>
          <span
            className="font-extrabold text-2xl cursor-pointer"
            onClick={isCardFun}
          >
            <RxCross1 />
          </span>
        </div>
        <hr className="my-5" />
        <div className="mt-5">
          <label className="font-semibold" htmlFor="">
            Name
          </label>
          <input
            name="name"
            value={inputData.name}
            className="w-full my-3 p-2 rounded border"
            type="text"
            placeholder="Enter Name"
            onChange={changeHandle}
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            name="email"
            value={inputData.email}
            className="w-full my-3 p-2 rounded  border "
            type="text"
            placeholder="Enter Email"
            onChange={changeHandle}
          />
        </div>
        <hr className="mt-20" />
        <div className="flex flex-row-reverse my-5 gap-3">
          <button
            onClick={changHandle}
            className="p-3 bg-green-600 rounded-lg w-1/6"
          >
            Create
          </button>
          <button
            className="p-3 bg-gray-100 rounded-lg w-1/6"
            onClick={isCardFun}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
