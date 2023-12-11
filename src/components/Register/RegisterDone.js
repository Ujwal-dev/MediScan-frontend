import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

export default function RegisterDone() {
  return (
    <div id="register">
        <Header />
    <div className="h-[90vh] flex items-center justify-center">
        <div className="w-[450px] h-[fit-content] flex flex-col p-8 px-25 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            <span className="text-[cadetblue]">Registration Successful</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Sign in to access our services.
          </div>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <Link className="text-sm text-[cadetblue]" to="/login">
              Sign in!
            </Link>
          </div>
        </div>
      </div>
      </div>
  )
}
