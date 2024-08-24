import React from "react";
import veredaLogo from "../../assets/veredaLogo.jpg";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { RiArrowRightWideFill } from "react-icons/ri";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const IsTrueFun = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="h-auto w-full p-1 bg-white  shadow-2xl white rounded-xl">
      <div className="flex justify-between mx-11 md:mx-20 lg:mx-24 ">
        <img
          className="mt-3"
          style={{ width: "70px", height: "50px" }}
          src={veredaLogo}
          alt=""
        />

        {/*    drop-down */}

        <div className="hidden md:block">
          <div>
            <div className="p-3 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] flex shadow-sm justify-around w-[150px] text-white hover:bg-gray-100 rounded-2xl">
              <TbWorld
                style={{ marginTop: "", width: "20px", height: "20px" }}
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
      </div>
    </div>
  );
};

export default Navbar;
