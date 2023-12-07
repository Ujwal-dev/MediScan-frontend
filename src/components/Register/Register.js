import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Register() {
  return (
    <div>
      <Header />
      <div className="h-[max-content] py-[20px] flex items-center justify-center">
        <div className="w-[450px] h-[fit-content] flex flex-col p-8 px-25 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            <span className="text-[cadetblue]">Register</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Register to access our services.
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">
              <label
                for="username"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                for="email"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                for="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div className="block relative">
              <label
                for="check-password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="check-password"
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>
            <div></div>
            <button
              type="submit"
              className="bg-[cadetblue] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <Link className="text-sm text-[cadetblue]" to="/login">
              Sign in!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}