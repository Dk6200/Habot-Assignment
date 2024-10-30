import React from "react";
import BGimage from "../Assests/div.jpg";
import CheckIMG from "../Assests/check.png";

const Habot = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="lg:w-11/12  bg-[#0a2c46] flex justify-between flex-col md:flex-row items-center  p-6">
        
        {/* Video/Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img
            className="lg:w[100%] h-auto object-cover rounded-lg"
            src={BGimage}
            alt="Background"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-8 md:ml-8">
          {/* Buyer and Supplier Header */}
          <div className="flex items-center justify-between md:justify-start space-x-16 mb-6">
            <h1 className="text-[22px] md:text-[26px] font-bold text-red-500 relative inline-block">
              Buyer
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180%] h-[3px] bg-red-500"></span>
            </h1>
            <h1 className="text-[22px] md:text-[26px] font-bold text-white">Supplier</h1>
          </div>

          {/* Buyer Steps */}
          <div className="space-y-4 max-w-[461px]">
            <div className="flex items-center">
              <img src={CheckIMG} alt="check" className="w-5 h-5" />
              <p className="text-lg text-white pl-2">
                Post your requirements.
              </p>
            </div>
            <div className="flex items-center">
              <img src={CheckIMG} alt="check" className="w-5 h-5" />
              <p className="text-lg text-white pl-2">
                Sit back for multiple suppliers to contact you.
              </p>
            </div>
            <div className="flex ">
              <img src={CheckIMG} alt="check" className="w-5 h-5 mt-1" />
              <p className="text-lg text-white pl-2 ">
                Choose among the suppliers based on the <br/>ratings and reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habot;
