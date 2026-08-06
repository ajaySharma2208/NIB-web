import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { 
  FaCheckCircle, 
  FaHandshake, 
  FaUsers, 
  FaClock, 
  FaMedal, 
  FaArrowRight 
} from "react-icons/fa";

const AllProduct = () => {
  return (
    <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 font-sans pb-10 flex flex-col gap-8">

      {/* Mobile Only Buttons (Visible only on mobile) */}
      <div className="w-full flex justify-center gap-4 mt-2 md:hidden">
        <Link to="/become-a-posp" className="w-1/2">
          <Button className="w-full bg-primary-blue hover:bg-blue-800 normal-case text-xs py-3 rounded-xl shadow-none">
            Become a POSP
          </Button>
        </Link>
        <Link to="/login" className="w-1/2">
          <Button className="w-full bg-accent-orange hover:bg-orange-600 normal-case text-xs py-3 rounded-xl shadow-none">
            Login
          </Button>
        </Link>
      </div>

      {/* Main 3 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* MOTOR INSURANCE */}
        <div className="bg-white rounded-[28px] border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between min-h-[250px]">
          <h2 className="text-lg font-black text-gray-900 text-center mb-8 uppercase tracking-wider">
            Motor Insurance
          </h2>
          <div className="grid grid-cols-3 gap-3 items-start justify-center">
            
            {/* Car Insurance */}
            <Link to="/car-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_car.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Car Insurance"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Car Insurance
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Seellen pra custom custom sedara.
              </p>
            </Link>

            {/* Two-Wheeler Insurance */}
            <Link to="/two-wheeler-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_bike.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Two-Wheeler Insurance"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Two-Wheeler<br/>Insurance
              </p>
            </Link>

            {/* Fleet & Commercial */}
            <Link to="/commercial-vehicle" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_truck.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Fleet & Commercial"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Fleet &<br/>Commercial
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                For complex, tailored corporate and fleet
              </p>
            </Link>

          </div>
        </div>

        {/* LIFE INSURANCE */}
        <div className="bg-white rounded-[28px] border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between min-h-[250px]">
          <h2 className="text-lg font-black text-gray-900 text-center mb-8 uppercase tracking-wider">
            Life Insurance
          </h2>
          <div className="grid grid-cols-2 gap-4 items-start justify-center">
            
            {/* Term Insurance */}
            <Link to="/term-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_shield.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Term Insurance"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Term Insurance
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Protects your protective insurance and risk insurance.
              </p>
            </Link>

            {/* Endowment Plan */}
            <Link to="/endowment-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_tree.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Endowment Plan"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Endowment Plan
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Floursing your rees and trrouration auores and compass.
              </p>
            </Link>

          </div>
        </div>

        {/* HEALTH INSURANCE */}
        <div className="bg-white rounded-[28px] border border-blue-50 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between min-h-[250px]">
          <h2 className="text-lg font-black text-gray-900 text-center mb-8 uppercase tracking-wider">
            Health Insurance
          </h2>
          <div className="grid grid-cols-3 gap-3 items-start justify-center">
            
            {/* Individual Health */}
            <Link to="/individual-health-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_health_individual.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Individual Health"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Individual<br/>Health
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Argle aeration active and communication.
              </p>
            </Link>

            {/* Family Health */}
            <Link to="/family-health-insurance" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_health_family.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Family Health"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Family Health
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Family, health, generatonals and families.
              </p>
            </Link>

            {/* Senior Citizen Plans */}
            <Link to="/senior-citizen-plan" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-16 h-12 flex items-center justify-center overflow-hidden mb-2">
                <img
                  src="/assets/images/Products/3d_health_senior.jpg"
                  className="max-h-full max-w-full object-contain"
                  alt="Senior Citizen Plans"
                />
              </div>
              <p className="text-[11px] font-extrabold text-gray-800 group-hover:text-primary-blue transition-colors leading-tight mb-1">
                Senior Citizen<br/>Plans
              </p>
              <p className="text-[9px] text-gray-400 font-semibold leading-normal">
                Healthy healthy and healthy alid-does.
              </p>
            </Link>

          </div>
        </div>

      </div>

      {/* Bottom Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-between py-5 px-8 bg-[#f4f7fc] border border-blue-50 rounded-[24px] mt-4">
        
        {/* Years of Experience */}
        <div className="flex items-center gap-2.5">
          <FaCheckCircle className="text-primary-blue text-base shrink-0" />
          <div>
            <p className="text-sm font-black text-primary-blue leading-none mb-0.5">10+</p>
            <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider leading-none">Years of Experience</p>
          </div>
        </div>

        {/* Insurance Partners */}
        <div className="flex items-center gap-2.5">
          <FaHandshake className="text-primary-blue text-base shrink-0" />
          <div>
            <p className="text-sm font-black text-primary-blue leading-none mb-0.5">50+</p>
            <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider leading-none">Insurance Partners</p>
          </div>
        </div>

        {/* Happy Clients */}
        <div className="flex items-center gap-2.5">
          <FaUsers className="text-primary-blue text-base shrink-0" />
          <div>
            <p className="text-sm font-black text-primary-blue leading-none mb-0.5">1000+</p>
            <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider leading-none">Happy Clients</p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="flex items-center gap-2.5">
          <FaClock className="text-primary-blue text-base shrink-0" />
          <div>
            <p className="text-sm font-black text-primary-blue leading-none mb-0.5">24/7</p>
            <p className="text-[9px] font-extrabold text-gray-500 uppercase tracking-wider leading-none">Customer Support</p>
          </div>
        </div>

        {/* IRDAI Broker License */}
        <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
          <FaMedal className="text-primary-blue text-base shrink-0 animate-bounce" />
          <p className="text-[9px] font-black text-gray-500 uppercase tracking-wider leading-tight">
            We are IRDAI Licensed Insurance Broker
          </p>
        </div>

        {/* Know More Button */}
        <div className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-1 flex justify-end max-lg:justify-center">
          <Link to="/about-us" className="w-full sm:w-auto">
            <button className="w-full text-[10px] uppercase font-black text-primary-blue border border-primary-blue bg-white hover:bg-primary-blue hover:text-white px-4 py-2.5 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer">
              KNOW MORE ABOUT US <FaArrowRight className="text-[8px]" />
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default AllProduct;
