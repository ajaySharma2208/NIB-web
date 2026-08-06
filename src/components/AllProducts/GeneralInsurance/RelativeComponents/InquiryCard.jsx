import React from "react";
import { Link } from "react-router-dom";

const InquiryCard = ({ insurerName }) => {
  return (
    <div className="bg-white xl:w-fit rounded-lg shadow-md p-4 mb-4 md:hover:scale-105 duration-300 border hover:shadow-xl">
      <div className="flex  flex-col">
        <h3 className="text-lg font-semibold">
          For Any Enquiry Related To {insurerName}
        </h3>
      </div>
      <div className="items-center flex  justify-center">
        <button className="bg-blue-900  hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4">
          <Link className="text-white"  to={`/contact?subject=${encodeURIComponent(insurerName)}`}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default InquiryCard;
