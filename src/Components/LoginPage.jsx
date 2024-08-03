import React, { useState } from "react";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSingFunction = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="w-full h-auto flex flex-col  justify-center ">
      <form className="absolute rounded-3xl p-9 shadow-2xl  bg-white  w-[38%] my-36 mx-auto right-0 left-0 text-black ">
        <h1 className="font-semibold text-3xl mb-5">
          {isSignInForm ? "Login " : "Register"}
        </h1>

        {!isSignInForm && (
          <div>
            <label htmlFor="" className="font-semibold text-gray-500">
              Full Name
            </label>
            <input
              /*   ref={fullname} */
              type="text"
              placeholder=" Full Name"
              className="p-3 my-2 w-full border outline-none rounded-lg"
            />
          </div>
        )}

        <div>
          <label htmlFor="" className="font-semibold text-gray-500">
            Email
          </label>
          <input
            /* ref={email} */
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full border outline-none rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="" className="font-semibold text-gray-500">
            Password
          </label>
          <input
            /*  ref={password} */
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full outline-none  border rounded-lg"
          />
        </div>

        {!isSignInForm && (
          <div>
            <label
              htmlFor=""
              className=" outline-none font-semibold text-gray-500"
            >
              Conform Password
            </label>
            <input
              /*  ref={password} */
              type="password"
              placeholder="Password"
              className="p-3 my-2 w-full  border rounded-lg"
            />
          </div>
        )}
        {/*  <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p> */}
        <button
          /*  onClick={handleBtnCLick} */
          className="p-4 my-2 bg-sky-400 w-full rounded-lg cursor-pointer"
        >
          {isSignInForm ? "Login" : "Register"}
        </button>
        <p
          onClick={toggleSingFunction}
          className="py-2 cursor-pointer text-center" /* onClick={toggleSignInFunction} */
        >
          {isSignInForm
            ? "Don't have an account? Register"
            : "Allready have an account ? Login."}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
