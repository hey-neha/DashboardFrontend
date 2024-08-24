import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Header/Navbar";

import { useNavigate } from "react-router-dom";

const LoginPag = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Login = (event) => {
    const { email, password } = user;
    event.preventDefault();

    if (email && password) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <div className="w-full h-auto flex flex-col">
        <div className="p-5">
          <Navbar />
        </div>

        <div
          className="flex flex-col md:flex-row justify-center items-center w-full  
"
        >
          {/*  left part */}

          <div className="hidden md:block">
            <img
              className="w-[260px] md:w-[400px] lg:w-[500px]"
              src="https://hr.politicksnow.in/assets/custom/auth/images/theme-3.svg"
              alt=""
            />
          </div>
          {/* login page */}
          <div className="w-full h-auto mt-5 md:mt-10 flex items-center justify-center ">
            <form className="bg-white shadow-xl rounded-3xl p-8 md:p-10 lg:p-12 w-full max-w-md">
              <h1 className="text-3xl font-bold  text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  mb-8 ">
                Welcome Back
              </h1>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={user.email}
                  onChange={HandleChange}
                  placeholder="Enter your email"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={HandleChange}
                  placeholder="Enter your password"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                onClick={Login}
                className="w-full py-3 bg-gradient-to-r from-[#53ADE4] to-[#277BA8]  text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>

              <div className="text-center mt-3 text-gray-500">or</div>

              <div
                onClick={() => navigate("/register")}
                className="mt-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] font-semibold cursor-pointer hover:underline"
              >
                Register
              </div>
            </form>
          </div>

          <div className="hidden md:block">
            <img
              className="w-[260px] md:w-[400px] lg:w-[500px]"
              src="https://hr.politicksnow.in/assets/custom/auth/images/common.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPag;
