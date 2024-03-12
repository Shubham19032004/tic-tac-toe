import React from "react";
import { Link } from "react-router-dom";
export default function Signin() {
    
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Login
        </h1>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="flex justify-end">
                <span className="pr-2 font-light">Create a new Account</span>
                <Link className="text-indigo-600 underline" to={"/signup"}>
                  Signup
                </Link>
              </div>
        <div className="w-full flex justify-center">
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Submit
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}