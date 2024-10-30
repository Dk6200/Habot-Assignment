import React from "react";
import logo from "../Assests/Logo.png";
import Background from "../Assests/Background.png";
import SuitIcon from "../Assests/suitcase.png";
import MapIcon from "../Assests/Map.png";
import ArrowImage from "../Assests/Vector.png";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 sm:px-8">
        <div className="flex items-center py-1">
          <img src={logo} alt="logo" className="w-[120px] h-[50px] ml-2 sm:ml-4" />
        </div>

        <div className="flex justify-between items-center list-none gap-4 sm:gap-8 mr-2 sm:mr-4">
          <li className="text-sm sm:text-base">Find Supplies</li>
          <li className="text-sm sm:text-base">
            <div className="flex justify-center items-center">
              Find Service Tags{" "}
              <img className="h-2 ml-1 mt-1" src={ArrowImage} alt="down arrow" />
            </div>
          </li>
          <button className="text-sm sm:text-base font-semibold text-[#00732F] px-3 sm:px-5 py-1 sm:py-2 border-2 border-[#00732F] rounded-md">
            Login/Signup
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src={Background}
          alt="background-img"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-purple-900 opacity-50"></div>
        <div className="w-full sm:w-[935px] h-[122px] absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-tight">
            Are You a Supplier?
            <br />
            <span className="lg:text-[40px] font-semibold text-white">
              Explore Matching Opportunities.
            </span>
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center text-center w-full mx-auto space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative">
              <img
                src={SuitIcon}
                alt="Search Icon"
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-orange-500"
              />
              <input
                type="text"
                placeholder="Search Your Required Service Here"
                className="input-icon bg-white text-[#D1D5DB] w-full sm:w-[300px] h-[36px] sm:h-[56px] pl-10 sm:pl-12 pr-2 border border-[#D1D5DB] rounded-[5px]"
              />
            </div>
            <div className="relative">
              <img
                src={MapIcon}
                alt="Search Icon"
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-orange-500"
              />
              <input
                type="text"
                placeholder="Search Your Required Service Here"
                className="input-icon bg-white text-[#D1D5DB] w-full sm:w-[300px] h-[36px] sm:h-[56px] pl-10 sm:pl-12 pr-2 border border-[#D1D5DB] rounded-[5px]"
              />
            </div>

            <button className="py-2 sm:py-4 px-6 sm:px-9 bg-[#00732F] text-white rounded-[5px] text-sm sm:text-base">
              Search
            </button>
          </div>

          <div className="text-xs sm:text-lg leading-[18px] sm:leading-[27px] text-center mt-2">
            <p className="font-bold text-white">
              Are you a buyer?
              <span className="font-normal underline">
                Click here if you are looking to post requirements
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
