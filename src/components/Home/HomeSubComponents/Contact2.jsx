import React from "react";
import { Link } from "react-router-dom";

const Contact2 = () => {
  return (
    <>
      <div
        className="our-contract bg-[#1f3557] bg-cover "
       
      >
        <div className="px-5 md:px-8 lg:px-12 xl:px-20 py-16">
          <div className="row flex flex-col items-center">
            <div className="col-md-12 w-full">
              <div className="our-cta-box text-center">
                <div className="our-contract-title mb-6">
                  <h2 className="text-3xl lg:text-5xl font-bold text-white">
                    For any Enquiry Regarding
                  </h2>
                </div>
                <div className="our-contract-body">
                  <p className="mb-4 text-lg text-white animate-fadeInUp">
                    At Notion Insurance Broker Pvt Ltd, we understand that
                    choosing the right insurance can be overwhelming. That&apos;s why
                    we make it easy for you to connect with experienced
                    insurance agents who are committed to finding the best
                    coverage tailored to your needs.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 animate-fadeInUp"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact2;
