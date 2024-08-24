import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState(false);

  const stateFun = () => {
    setstate(!state);
  };

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    conformedPas: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (event) => {
    const { fullname, email, password, conformedPas } = user;
    event.preventDefault();

    if (fullname && email && password && password === conformedPas) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        console.log(res.data.message);
        // Optionally redirect after successful registration
        /*  navigate("/loginpage"); */
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="w-full h-auto flex flex-col">
      {/* Navbar */}
      <div className="p-4 md:p-6">
        <Navbar />
      </div>

      <div className="flex flex-col gap-10 md:flex-row justify-center items-center w-full ">
        {/* Left part */}
        <div className="hidden md:block">
          <img
            className="w-[260px] md:w-[400px] lg:w-[500px]"
            src="https://hr.politicksnow.in/assets/custom/auth/images/theme-3.svg"
            alt="Illustration"
          />
        </div>

        {/* Register form */}
        <div className="w-full max-w-md mt-5 md:mt-10 lg:mt-12 md:max-w-lg lg:max-w-xl">
          <form className="bg-white shadow-xl rounded-3xl p-5 md:p-6 lg:p-7">
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] mb-4">
              Register
            </h1>

            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                value={user.fullname}
                onChange={HandleChange}
                placeholder="Enter your full name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

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

            <div className="mb-4">
              <label
                htmlFor="conformedPas"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="conformedPas"
                name="conformedPas"
                type="password"
                value={user.conformedPas}
                onChange={HandleChange}
                placeholder="Confirm your password"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={register}
              className="w-full py-3 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Register
            </button>

            <div className="text-center mt-2 text-gray-500">or</div>

            <div
              onClick={() => navigate("/loginpage")}
              className="mt-2 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] cursor-pointer hover:underline"
            >
              Login
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <img
            className="w-[260px] md:w-[400px] lg:w-[500px]"
            src="https://hr.politicksnow.in/assets/custom/auth/images/common.svg"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
