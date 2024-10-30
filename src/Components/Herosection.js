import React from "react";
import arrow from "../Assests/Arrow.png";

const Herosection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-12 py-8 md:py-0 mt-8">
      <div className="w-full md:w-2/5 p-2">
        <h1 className="text-3xl md:text-4xl font-semibold py-6 md:py-10 font-poppins">
          Ready to dive into{" "}
          <span className="text-3xl md:text-4xl font-semibold text-purple-900">
            HABOT?
          </span>
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="relative bg-green-600 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-md mt-8 flex items-center text-white">
          Sign Up Today!{" "}
          <img
            src={arrow}
            alt="icon"
            className="lg:h-5  lg:w-8 md:h-6  md:w-6 ml-2 md:ml-4"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0 w-full md:w-3/5 text-center">
        <ul className="text-sm md:text-base ">
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Abu Dhabi
          </li>
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Dubai
          </li>
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Sharjah & Ajman
          </li>
        </ul>
        <ul className="text-sm md:text-base">
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Abu Dhabi
          </li>
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Dubai
          </li>
          <li className="border-2 border-orange-600 px-4 md:px-6 py-2 md:py-3 mb-3 rounded-md">
            Sharjah & Ajman
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Herosection;
