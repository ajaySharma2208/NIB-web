import React from "react";

const InsuranceCard = ({ logo, insurerName, price, keyFeatures, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:hover:scale-105 duration-300 border hover:shadow-xl">
      <div className="div grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex items-center">
          <img src={logo} alt={insurerName} className="h-16 w-20 mr-4" />
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-semibold">{insurerName}</h3>
          </div>
        </div>
        <div className="mt-4 w-full items-center flex flex-col justify-center">
          <p className="text-gray-500">STARTING FROM</p>
          <p className="text-2xl font-bold">₹ {price}</p>
        </div>
        <div className="w-full items-center flex  justify-center">
          <button
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            className="bg-deep-orange-700 w-[60%] hover:bg-deep-orange-800 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Check Premium
          </button>
        </div>
      </div>
      <div className="mt-4 flex lg:flex-row flex-col gap-3 lg:gap-10">
        <h4 className="text-sm font-semibold">Key Features:</h4>
        <ul className="list-disc grid grid-cols-1 lg:grid-cols-2 list-inside text-gray-600">
          {keyFeatures.map((feature, index) => (
            <div key={index}>
              <span className="text-green-500 mr-1">✓</span> {feature}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsuranceCard;
