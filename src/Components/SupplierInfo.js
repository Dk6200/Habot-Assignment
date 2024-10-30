import React from "react";

const SupplierInfo = () => {
  return (
    <div className="bg-customBGBlue flex justify-center items-center py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:w-[1000px] md:flex-row justify-between items-center">
          <div className="bg-[#E8FBFF] p-4 mb-4 md:mb-0 md:mr-12 rounded-md">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Let Suppliers{" "}
              <span className="relative inline-block pb-1">
                Find You
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
              </span>
            </h1>
          </div>
          <button className="w-full md:w-auto bg-customOrange text-white px-6 py-3 md:py-4 rounded-md text-lg font-bold">
            Get Verified
          </button>
        </div>
      </div>
    </div>
  );
};
export default SupplierInfo;
