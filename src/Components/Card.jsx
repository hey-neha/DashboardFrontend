import React from "react";
import { RxCross1 } from "react-icons/rx";

const Card = () => {
  return (
    <>
      <div className="w-full h-auto p-7 md:w-[60%] z-10  absolute top-10 mr-48  shadow-2xl rounded-xl">
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px]">Create New Employee</h1>

          <span className="font-extrabold text-2xl">
            <RxCross1 className="" />
          </span>
        </div>

        <hr className="my-5" />
        <div className="mt-5">
          <label className="font-semibold" htmlFor="">
            Name
          </label>
          <input
            className="w-full my-3 p-2 rounded"
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <div className="mt-5">
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            className="w-full my-3 p-2 rounded"
            type="text"
            placeholder="Enter Email"
          />
        </div>

        <hr className="mt-20" />

        <div className="flex flex-row-reverse my-5 gap-3 ">
          <button className="p-3 bg-green-600 rounded-lg w-1/6  ">
            Create
          </button>
          <button className="p-3   bg-gray-100 rounded-lg w-1/6 ">Close</button>
        </div>
      </div>
    </>
  );
};

export default Card;
