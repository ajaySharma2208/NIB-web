import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TabPanel,
  CardHeader,
} from "@material-tailwind/react";
import Header from "../../Header";
import TableComponent from "./RelativeComponents/TableComponent";
import { Link } from "react-router-dom";
import InsuranceCard from "./RelativeComponents/InsuranceCard";
import ImageTextCard from "./RelativeComponents/ImageText";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const TABLE_HEADERS_PAGE_1 = [
  "Point of Difference",
  "Comprehensive Insurance",
  "Third-party Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Definition",
    comprehensive:
      "A comprehensive coverage provides complete protection for your car as well as third-party liabilities",
    thirdParty:
      "A comprehensive coverage provides complete protection for your car as well as third-party liabilities",
  },
  {
    point: "Coverage",
    comprehensive:
      "It covers the financial loss to the insured car and a third-party",
    thirdParty:
      "It provides financial compensation if there is a damage to a third-party",
  },
  {
    point: "Legal Requirement",
    comprehensive: "No, this type of policy is not legally required",
    thirdParty:
      "As per the Motor Vehicles Act of 1988, this type of policy is a mandatory requirement",
  },
  {
    point: "Cost",
    comprehensive: "As it offers more coverage, it is generally costlier",
    thirdParty: "It is more affordable as compared to a comprehensive plan",
  },
  {
    point: "Exclusions",
    comprehensive:
      "Any damage to the insured car or a third-party is not covered if you are driving under the influence of alcohol or drugs",
    thirdParty: "Any damage to the vehicle is not covered",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]",
  "w-[30vw]", // 40% width for Third-party Insurance
  "w-[30vw]",// 40% width for Third-party Insurance
];

const getMockVehicleDetails = (numStr, isCar) => {
  const cleanNumber = numStr.replace(/[^A-Z0-9]/ig, "").toUpperCase();
  
  // Extract state
  const stateCode = cleanNumber.substring(0, 2);
  const stateMap = {
    DL: "Delhi",
    MH: "Maharashtra",
    MP: "Madhya Pradesh",
    HR: "Haryana",
    UP: "Uttar Pradesh",
    KA: "Karnataka",
    GJ: "Gujarat",
    RJ: "Rajasthan",
    BR: "Bihar",
    PB: "Punjab",
  };
  const state = stateMap[stateCode] || "India";

  // Generate a simple hash from the string to select index
  let modelHash = 0;
  let ownerHash = 0;
  for (let i = 0; i < cleanNumber.length; i++) {
    modelHash = cleanNumber.charCodeAt(i) + (modelHash * 37);
    ownerHash = cleanNumber.charCodeAt(i) + (ownerHash * 17);
  }
  const modelIndex = Math.abs(modelHash) % 10;
  const ownerIndex = Math.abs(ownerHash) % 10;

  const carModels = [
    { name: "Hyundai i20", fuel: "Petrol", year: 2022 },
    { name: "Maruti Swift", fuel: "Petrol", year: 2021 },
    { name: "Honda City", fuel: "Petrol", year: 2023 },
    { name: "KIA Sonet", fuel: "Petrol", year: 2024 },
    { name: "Tata Nexon", fuel: "Diesel", year: 2022 },
    { name: "Mahindra XUV700", fuel: "Diesel", year: 2023 },
    { name: "Toyota Fortuner", fuel: "Diesel", year: 2021 },
    { name: "Maruti Baleno", fuel: "CNG", year: 2023 },
    { name: "Hyundai Creta", fuel: "Petrol", year: 2024 },
    { name: "Honda Amaze", fuel: "Petrol", year: 2020 },
  ];

  const bikeModels = [
    { name: "Hero Splendor Plus", fuel: "Petrol", year: 2022 },
    { name: "Honda Activa 6G", fuel: "Petrol", year: 2023 },
    { name: "Royal Enfield Classic 350", fuel: "Petrol", year: 2021 },
    { name: "TVS Jupiter", fuel: "Petrol", year: 2022 },
    { name: "Suzuki Access 125", fuel: "Petrol", year: 2023 },
    { name: "Yamaha YZF R15", fuel: "Petrol", year: 2024 },
    { name: "Bajaj Pulsar 150", fuel: "Petrol", year: 2020 },
    { name: "KTM Duke 200", fuel: "Petrol", year: 2023 },
    { name: "TVS Apache RTR 160", fuel: "Petrol", year: 2021 },
    { name: "Honda Shine", fuel: "Petrol", year: 2022 },
  ];

  const owners = [
    "Aarav Sharma",
    "Priya Patel",
    "Amit Verma",
    "Siddharth Rao",
    "Neha Gupta",
    "Vikram Singh",
    "Rajesh Kumar",
    "Suresh Prasad",
    "Karan Malhotra",
    "Anjali Desai",
  ];

  const selectedModel = isCar ? carModels[modelIndex] : bikeModels[modelIndex];
  const selectedOwner = owners[ownerIndex];
  
  return {
    model: selectedModel.name,
    fuel: selectedModel.fuel,
    year: selectedModel.year,
    owner: selectedOwner,
    state: state,
  };
};

const CarInsurance = () => {
  const [step, setStep] = React.useState(1); // 1 = Enter number, 2 = Enter details, 3 = View plans
  const [vehicleNumber, setVehicleNumber] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("9876543210");
  const [vehicleDetails, setVehicleDetails] = React.useState({ model: "", fuel: "", year: "", owner: "", state: "" });
  const [isLoader, setIsLoader] = React.useState(false);
  const [error, setError] = React.useState("");

  // Step 3 interactive states
  const [activeTab, setActiveTab] = React.useState("complete");
  const [activeIdv, setActiveIdv] = React.useState("selected");
  const [selectedAddons, setSelectedAddons] = React.useState({
    zeroDep: true,
    roadside: false,
    engine: false,
    consumables: false,
    keyLock: false,
  });
  const [voluntaryDeductible, setVoluntaryDeductible] = React.useState("zero");

  const [rtoError, setRtoError] = React.useState(false);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      setError("Please enter a valid car number");
      return;
    }
    setError("");

    const cleanNumber = vehicleNumber
      .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-width characters
      .replace(/[^A-Z0-9]/ig, "")
      .trim()
      .toUpperCase();
    const VALID_MOCK_NUMBERS = ["DL3SAY4567", "MP13AH6877", "MH15AB1234"];
    const isValid = VALID_MOCK_NUMBERS.includes(cleanNumber);
    console.log("Car Validation - Input:", vehicleNumber, "Cleaned:", cleanNumber, "Is Valid:", isValid);

    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      if (!isValid) {
        setRtoError(true);
      } else {
        const details = getMockVehicleDetails(vehicleNumber, true);
        setVehicleDetails(details);
        setOwnerName(details.owner);
        setStep(2);
      }
    }, 1200);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (!ownerName.trim()) {
      setError("Please enter owner name");
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    setStep(3);
  };

  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.webp", // Replace with actual image URLs
      insurerName: "Car Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "https://www.ilgi.co/D2DBB68FAE",
    },
  ];
  const insurancetypes = [
    {
      name: "Comprehensive Car Insurance",
      description:
        "This type of insurance policy is the most preferred cover by the car owners. It provides financial support to pay for the damages caused to the own vehicle & the third-party. As the name suggests, this type of insurance provides comprehensive cover.",
    },
    {
      name: "Third-party Car Insurance",
      description:
        "Third-party four-wheeler insurance policy is a mandatory requirement for driving a car in India. Under this cover, the insurance company is liable to pay for the injuries, permanent disability, temporary disability, and death of the third party caused by an accident involving the insured car. This plan also provides coverage for property damage incurred by the third party up to Rs. 7.5 Lakh.",
    },
    {
      name: "Own Damage Car Insurance",
      description:
        "In September 2019, the Insurance Regulatory and Development Authority of India (IRDAI) introduced the Standalone Own-Damage car insurance policy. Under this plan, the insured gets insurance coverage only for the damages sustained by their four-wheeler/car in a road accident, natural/man-made calamity, fire, explosion, theft or any other mishap.",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car Insurance - Notion Insurance Broker PVT. LTD.</title>
        <meta
          name="description"
          content="Protect your vehicle with comprehensive car insurance from Notion Insurance Broker Pvt. Ltd. Our car insurance policies provide extensive coverage, ensuring financial security in case of accidents, theft, or damage."
        />
        <meta
          name="keywords"
          content="car insurance, vehicle insurance, NIB car insurance, Notion Insurance Broker car insurance, car insurance coverage, auto insurance, accident coverage, theft protection, vehicle damage insurance, car insurance policies"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/car-insurance" />
      </Helmet>

      {rtoError ? (
        <div className="min-h-[calc(100vh-76px)] bg-white flex flex-col items-center justify-center pt-10 pb-12 px-5 font-sans w-full">
          <div className="w-full max-w-[550px] mx-auto text-center">
            {/* Magnifying Glass SVG Illustration */}
            <svg className="w-48 h-36 mx-auto mb-6 text-slate-300" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="30" width="140" height="90" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
              <rect x="40" y="40" width="120" height="70" fill="white"/>
              <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round"/>
              <rect x="70" y="50" width="40" height="50" rx="2" fill="#e2e8f0"/>
              <circle cx="130" cy="75" r="22" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2"/>
              <text x="123" y="83" fill="#ef4444" fontSize="24" fontWeight="black" fontFamily="sans-serif">!</text>
              <circle cx="95" cy="75" r="12" stroke="#18417c" strokeWidth="3" fill="none"/>
              <line x1="103" y1="83" x2="115" y2="95" stroke="#18417c" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            {/* Error Message */}
            <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed mb-8">
              Our records show that vehicle number <span className="text-[#f25c05] font-black">{vehicleNumber}</span> is a <span className="text-[#f25c05] font-black">commercial vehicle</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <button
                onClick={() => {
                  setRtoError(false);
                  setStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border-2 border-primary-blue hover:bg-slate-50 text-primary-blue font-black text-xs uppercase tracking-widest rounded-none transition-all duration-200 cursor-pointer"
              >
                Verify your registration number
              </button>
              <button
                onClick={() => {
                  setRtoError(false);
                  // Setup manual details and go to Step 2
                  setVehicleDetails({
                    model: "Hyundai i20",
                    fuel: "Petrol",
                    year: 2022,
                    owner: "Aarav Sharma",
                    state: "Delhi",
                  });
                  setOwnerName("Aarav Sharma");
                  setStep(2);
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-primary-blue hover:bg-[#0052cc] text-white font-black text-xs uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Go to commercial vehicle insurance
              </button>
            </div>

            <button
              onClick={() => {
                setRtoError(false);
                // Setup manual details and go to Step 2
                setVehicleDetails({
                  model: "Hyundai i20",
                  fuel: "Petrol",
                  year: 2022,
                  owner: "Aarav Sharma",
                  state: "Delhi",
                });
                setOwnerName("Aarav Sharma");
                setStep(2);
              }}
              className="w-full max-w-[430px] py-3.5 bg-white border border-slate-200 hover:border-slate-350 text-slate-500 hover:text-slate-700 font-extrabold text-xs uppercase tracking-widest rounded-none transition-all duration-200 cursor-pointer mt-2"
            >
              Continue with car insurance
            </button>
          </div>
        </div>
      ) : (
        <>
          {step === 1 && (
        <div className="min-h-[calc(100vh-76px)] bg-white flex flex-col justify-between pt-10 md:pt-16 pb-6 px-5 md:px-8 lg:px-12 xl:px-20 font-sans w-full">
          {/* Main Content Area */}
          <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 flex-grow">
            
            {/* Left side: Premium Image Cutout */}
            <div className="w-full md:w-[50%] flex justify-center">
              <div className="relative w-full max-w-[550px] flex items-center justify-center">
                <div className="absolute w-[360px] h-[360px] bg-primary-blue/5 rounded-full blur-3xl"></div>
                <img
                  src="assets/images/Products/car-insurance.webp"
                  alt="Car Insurance"
                  className="relative z-10 w-full h-auto object-contain max-h-[480px] scale-110"
                />
              </div>
            </div>

            {/* Right side: Enter Vehicle Number Form */}
            <div className="w-full md:w-[45%]">
              <div className="p-2 md:p-4 flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-[34px] font-black text-gray-900 mb-3 font-sora tracking-tight leading-[1.15]">
                    Buy Car Insurance in <span className="text-[#0065ff]">60 seconds</span>! ⚡
                  </h1>
                  <p className="text-gray-500 text-sm font-semibold tracking-wide">
                    Super fast process. Policies starting at highly affordable rates.
                  </p>
                </div>

                <form onSubmit={handleStep1Submit} className="space-y-6">
                  <div>
                    <div className="relative border-b-2 border-slate-200 focus-within:border-[#0065ff] transition-colors">
                      <input
                        id="vehicleNumber"
                        type="text"
                        required
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                        className="w-full px-0 py-4 bg-transparent text-xl font-bold tracking-widest placeholder:text-slate-300 placeholder:font-normal focus:outline-none transition-all"
                        placeholder="Enter Car Number (e.g. MP-13-AH-6877)"
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-red-600 text-xs font-bold flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-600 mr-2 shrink-0"></span>
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-xs uppercase tracking-widest rounded-none shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    View Prices
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-between text-[11px] text-[#0065ff] font-extrabold uppercase tracking-wider">
                  <a href="#" className="hover:underline">Buying a new car?</a>
                  <a href="#" className="hover:underline">Don't have car number?</a>
                </div>
              </div>
            </div>

          </div>

          {/* Footer stats row at the bottom */}
          <div className="border-t border-slate-100 py-6 mt-12 w-full max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">4.5★</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.3 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Happy Consumers</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">6.29 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Policies Sold</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">20+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Insurance Partners</div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="min-h-[calc(100vh-76px)] bg-white flex flex-col justify-between pt-10 md:pt-16 pb-6 px-5 md:px-8 lg:px-12 xl:px-20 font-sans w-full">
          {/* Main Content Area */}
          <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 flex-grow">
            
            {/* Left side: Premium RTO Smart Card & Trust Badges */}
            <div className="w-full md:w-[48%] flex flex-col justify-start">
              {/* RTO Smart Card - Official RC Form Look */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 p-6 shadow-lg rounded-none relative overflow-hidden w-full max-w-[420px] aspect-[1.586] flex flex-col justify-between border border-slate-200">
                {/* Tricolor top border strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="flex-1 bg-[#FF9933]"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-[#128807]"></div>
                </div>

                {/* Card Header */}
                <div className="border-b border-slate-200 pb-2.5 flex items-center justify-between z-10 mt-1.5">
                  <div>
                    <span className="text-[8px] text-slate-500 font-extrabold uppercase tracking-widest block leading-none">
                      GOVERNMENT OF INDIA • RTO DEPARTMENT
                    </span>
                    <span className="text-[11px] text-primary-blue font-black uppercase tracking-wider block mt-0.5">
                      CERTIFICATE OF REGISTRATION
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#128807]/10 text-[#128807] px-2 py-0.5 rounded-none">
                    <span className="w-1.5 h-1.5 bg-[#128807] rounded-full"></span>
                    <span className="text-[8px] font-black uppercase tracking-wider">VERIFIED</span>
                  </div>
                </div>

                {/* Card Body with Seal & Vehicle Details */}
                <div className="grid grid-cols-12 gap-3 my-3 z-10 items-center">
                  {/* Circular Tricolor RTO Seal */}
                  <div className="col-span-3 flex justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#18417c]/30 flex items-center justify-center p-1 relative bg-white">
                      <div className="w-full h-full rounded-full border border-slate-200 flex flex-col items-center justify-center text-[7px] font-black text-[#18417c] text-center leading-none">
                        <span className="text-amber-600">सत्यमेव</span>
                        <span className="text-primary-blue mt-0.5 font-bold">RTO</span>
                        <span className="text-green-600 mt-0.5">SEAL</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vehicle Model & Owner Details */}
                  <div className="col-span-9 pl-1">
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest block">
                      REGISTERED CAR
                    </span>
                    <h3 className="text-lg font-black font-sora text-slate-800 leading-tight tracking-tight mt-0.5">
                      {vehicleDetails.model}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                      Owner: <span className="text-slate-700 font-bold">{ownerName || vehicleDetails.owner}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer with details */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-3 z-10">
                  <div>
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block">REG NUMBER</span>
                    <span className="text-xs font-bold text-slate-800 tracking-wider uppercase block mt-0.5">{vehicleNumber}</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block">FUEL & YEAR</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5">{vehicleDetails.fuel} • {vehicleDetails.year}</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-wider block">RTO STATE</span>
                    <span className="text-xs font-bold text-slate-800 block mt-0.5 truncate">{vehicleDetails.state}</span>
                  </div>
                </div>
                
                {/* Edit pencil icon overlay */}
                <button onClick={() => setStep(1)} className="absolute top-4 right-4 text-slate-400 hover:text-primary-blue transition-colors z-20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 space-y-4 max-w-[420px]">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Why Choose Notion Insurance?</h4>
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">⚡</span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Quotes in 60 Seconds</h5>
                    <p className="text-[11px] text-gray-500 font-medium">Compare top-rated plans instantly with zero paperwork.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">🛠️</span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">5,000+ Cashless Garages</h5>
                    <p className="text-[11px] text-gray-500 font-medium">Enjoy hassle-free cashless claims across all major cities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">📞</span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Dedicated Claims Support</h5>
                    <p className="text-[11px] text-gray-500 font-medium">Our expert claim managers guide you from start to finish.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Enter Name & Phone number */}
            <div className="w-full md:w-[48%]">
              <div className="bg-white border border-slate-100 rounded-none p-8 md:p-10 flex flex-col justify-center relative shadow-lg">
                <button
                  onClick={() => setStep(1)}
                  className="absolute top-5 left-5 text-gray-400 hover:text-primary-blue flex items-center gap-1.5 text-xs font-bold font-sans transition-all"
                >
                  &larr; Back
                </button>

                <div className="mb-6 pt-3">
                  <h2 className="text-2xl font-black text-gray-900 mb-1 font-sora tracking-tight leading-tight">
                    Almost done! Just one last step
                  </h2>
                  <p className="text-gray-500 text-xs font-semibold">Verify details to view plans instantly</p>
                </div>

                <form onSubmit={handleStep2Submit} className="space-y-4">
                  {/* Full Name field */}
                  <div className="bg-white border border-slate-200 p-3.5 relative flex items-center justify-between transition-all focus-within:border-primary-blue">
                    <div className="w-full">
                      <label className="block text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full bg-transparent text-sm font-bold text-gray-800 focus:outline-none mt-0.5"
                        placeholder="Enter full name"
                      />
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>

                  {/* Phone Number field */}
                  <div className="bg-white border border-slate-200 p-3.5 relative flex items-center justify-between transition-all focus-within:border-primary-blue">
                    <div className="w-full flex items-center gap-3">
                      <div className="border-r border-slate-200 pr-2.5 flex items-center gap-1 cursor-pointer">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">INDIA</span>
                        <span className="text-[10px] text-gray-400">&#9662;</span>
                      </div>
                      <div className="w-full">
                        <label className="block text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                          Mobile Number
                        </label>
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-800 mr-1">+91</span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full bg-transparent text-sm font-bold text-gray-800 focus:outline-none"
                            placeholder="Mobile number"
                          />
                        </div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>

                  {error && (
                    <p className="text-red-600 text-xs font-bold flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-600 mr-2 shrink-0"></span>
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#f25c05] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-widest rounded-none shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    View Prices
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Consent & WhatsApp */}
                <div className="mt-4 text-[10px] text-gray-400 font-medium leading-relaxed">
                  By clicking on "View Prices", you agree to our <a href="#" className="underline text-[#0065ff]">Privacy Policy</a> & <a href="#" className="underline text-[#0065ff]">Terms of Use</a>.
                </div>

                <div className="mt-5 pt-4 border-t border-blue-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[9px] font-bold">✓</span>
                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Get Updates on WhatsApp</span>
                  </div>
                  {/* Mock Toggle Switch */}
                  <div className="w-8 h-4 bg-green-500 rounded-full p-0.5 cursor-pointer flex justify-end">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Footer stats row at the bottom */}
          <div className="border-t border-slate-100 py-6 mt-12 w-full max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">4.5★</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.3 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Happy Consumers</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">6.29 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Policies Sold</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">20+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Insurance Partners</div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="min-h-screen bg-[#f4f7f6] pt-0 pb-12 font-sans w-full">
          {/* Top Info Bar (Policybazaar Style) */}
          <div className="bg-[#f4f7fa] border-b border-slate-200 py-3 px-5 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs w-full">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <button
                onClick={() => setStep(1)}
                className="text-primary-blue hover:underline cursor-pointer flex items-center gap-1.5 font-bold"
              >
                &larr; Back to Number Entry
              </button>
              <span className="text-slate-300">|</span>
              
              {/* Vehicle Pill */}
              <div className="bg-white border border-slate-200 px-3 py-1 flex items-center gap-2 shadow-sm font-semibold text-slate-700">
                <span className="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 font-bold uppercase">{vehicleNumber}</span>
                <strong className="text-slate-800">{vehicleDetails.model}</strong>
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-primary-blue transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>

              {/* NCB Discount Dropdown */}
              <div className="bg-white border border-slate-200 px-3 py-1 flex items-center gap-1.5 shadow-sm font-semibold text-slate-700 cursor-pointer hover:border-slate-300 transition-all">
                <span>NCB discount: <strong className="text-slate-800">20%</strong></span>
                <span className="text-[10px] text-slate-400">&#9662;</span>
              </div>

              {/* Expiry Dropdown */}
              <div className="bg-white border border-slate-200 px-3 py-1 flex items-center gap-1.5 shadow-sm font-semibold text-slate-700 cursor-pointer hover:border-slate-300 transition-all">
                <span>OD Expiry: <strong className="text-slate-800">8-Mar-2027</strong></span>
                <span className="text-[10px] text-slate-400">&#9662;</span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-bold text-slate-700">
              <span className="text-xs">Need Help?</span>
              <a href="tel:+919302182475" className="bg-white border border-slate-200 hover:border-primary-blue px-3 py-1 flex items-center gap-1.5 text-primary-blue shadow-sm hover:shadow transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9302182475
              </a>
            </div>
          </div>

          {/* Main Content Split Grid */}
          <div className="w-full max-w-[1400px] mx-auto mt-6 flex flex-col lg:flex-row items-start justify-between gap-6 px-5 md:px-8">
            
            {/* Left Sidebar (Filter & Addons) */}
            <div className="w-full lg:w-[23%] flex flex-col gap-5">
              {/* IDV Box */}
              <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 font-sora">IDV (Car value)</h4>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5">Must be 10% less than last year</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="radio"
                      name="idv_opt"
                      checked={activeIdv === "selected"}
                      onChange={() => setActiveIdv("selected")}
                      className="text-primary-blue focus:ring-0"
                    />
                    <span>Selected IDV</span>
                  </label>
                  <label className="flex items-center justify-between gap-2 cursor-pointer text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="idv_opt"
                        checked={activeIdv === "custom"}
                        onChange={() => setActiveIdv("custom")}
                        className="text-primary-blue focus:ring-0"
                      />
                      <span>Select IDV</span>
                    </div>
                    <svg className="w-3 h-3 text-slate-400 hover:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </label>
                </div>
              </div>

              {/* Sort & Filter Title */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 border-b border-slate-200 pb-2">
                <span className="uppercase tracking-wider">Sort & Filter</span>
                <button
                  onClick={() => {
                    setSelectedAddons({ zeroDep: false, roadside: false, engine: false, consumables: false, keyLock: false });
                    setVoluntaryDeductible("zero");
                  }}
                  className="text-primary-blue hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Addons List */}
              <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
                <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Addons</h5>
                <div className="space-y-3">
                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedAddons.zeroDep}
                      onChange={(e) => setSelectedAddons({ ...selectedAddons, zeroDep: e.target.checked })}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span className="flex items-center gap-1.5">
                        Zero Depreciation
                        <span className="bg-primary-blue/10 text-primary-blue text-[8px] px-1 py-0.2 font-black uppercase tracking-wider scale-90">Must Buy</span>
                      </span>
                      <p className="text-[9px] text-gray-400 font-normal mt-0.5">Also called 'Bumper to Bumper' cover</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedAddons.roadside}
                      onChange={(e) => setSelectedAddons({ ...selectedAddons, roadside: e.target.checked })}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span>24x7 Roadside Assistance</span>
                      <p className="text-[9px] text-gray-400 font-normal mt-0.5">Emergency support for flat tires, towing etc.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedAddons.engine}
                      onChange={(e) => setSelectedAddons({ ...selectedAddons, engine: e.target.checked })}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span>Engine Protection Cover</span>
                      <p className="text-[9px] text-gray-400 font-normal mt-0.5">Protects engine against hydrostatic lock & leakages</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedAddons.consumables}
                      onChange={(e) => setSelectedAddons({ ...selectedAddons, consumables: e.target.checked })}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span>Consumables Cover</span>
                      <p className="text-[9px] text-gray-400 font-normal mt-0.5">Covers cost of engine oil, nuts, bolts, etc.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-[11px] font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={selectedAddons.keyLock}
                      onChange={(e) => setSelectedAddons({ ...selectedAddons, keyLock: e.target.checked })}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 mt-0.5"
                    />
                    <div>
                      <span>Key & Lock Replacement</span>
                      <p className="text-[9px] text-gray-400 font-normal mt-0.5">Covers cost of duplicate keys & locks</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Deductibles */}
              <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
                <h5 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Deductibles</h5>
                <div className="space-y-2">
                  {[
                    { id: "zero", label: "Zero Deductible" },
                    { id: "2500", label: "₹2500 Voluntary Deductible" },
                    { id: "5000", label: "₹5000 Voluntary Deductible" },
                    { id: "7500", label: "₹7500 Voluntary Deductible" },
                    { id: "15000", label: "₹15000 Voluntary Deductible" },
                  ].map((d) => (
                    <label key={d.id} className="flex items-center gap-2 cursor-pointer text-[11px] font-bold text-slate-700">
                      <input
                        type="radio"
                        name="deductible"
                        checked={voluntaryDeductible === d.id}
                        onChange={() => setVoluntaryDeductible(d.id)}
                        className="text-primary-blue focus:ring-0"
                      />
                      <span>{d.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column: Plan Cards */}
            <div className="w-full lg:w-[52%] flex flex-col gap-6">
              {/* Tab Selector */}
              <div className="flex border border-slate-200 font-sans text-xs w-full bg-white shadow-sm p-1">
                <button
                  onClick={() => setActiveTab("complete")}
                  className={`flex-1 py-3 font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-none ${
                    activeTab === "complete"
                      ? "text-[#18417c] border-b-2 border-[#18417c] bg-[#18417c]/5"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <span className="text-sm">🛡️</span>
                  <span>Complete Protection</span>
                </button>
                <button
                  onClick={() => setActiveTab("saver")}
                  className={`flex-1 py-3 font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all rounded-none ${
                    activeTab === "saver"
                      ? "text-[#18417c] border-b-2 border-[#18417c] bg-[#18417c]/5"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <span className="text-sm">⚡</span>
                  <span className="flex items-center gap-2">
                    Super Saver plans
                    <span className="bg-[#128807] text-white text-[8px] font-black px-1.5 py-0.5 rounded-none">35% cheaper</span>
                  </span>
                </button>
              </div>

              {/* Title Section */}
              <div>
                <h2 className="text-lg font-black text-slate-800 font-sora">9 Own Damage plans</h2>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">Cover losses due to accident, fire and theft</p>
              </div>

              {/* Quotes List */}
              <div className="space-y-4">
                
                {/* Plan 1: Oriental Insurance (Policybazaar Exclusive Offer) */}
                <div className="border border-purple-200 bg-gradient-to-br from-purple-50/10 to-white relative shadow-md p-6">
                  {/* Exclusive Tag */}
                  <span className="absolute top-0 right-0 bg-purple-600 text-white text-[8px] font-black uppercase tracking-wider px-3 py-1">
                    Notion Exclusive Offer
                  </span>
                  
                  <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-4">
                      {/* Logo Placeholder */}
                      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-[#18417c] text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                        ORIENTAL
                      </div>
                      <div>
                        <span className="bg-purple-100 text-purple-700 text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider">
                          Exclusive Deal for {vehicleDetails.model} in {vehicleDetails.state}
                        </span>
                        <h4 className="text-sm font-black text-slate-800 font-sora mt-1">Oriental Insurance</h4>
                        <p className="text-[10px] text-gray-400 font-semibold">100% Protection | Zero Compromise</p>
                      </div>
                    </div>
                    
                    {/* Price & Buy Button */}
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold block">IDV Cover: <strong className="text-slate-700">₹6,00,000</strong></span>
                      <button className="mt-1.5 px-6 py-2.5 bg-[#f25c05] hover:bg-orange-600 text-white font-black text-sm rounded-none shadow-md hover:shadow-lg transition-all flex items-center gap-1.5">
                        ₹1,379
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Included Badges & Details */}
                  <div className="flex flex-wrap items-center gap-2.5 mt-3 text-[10px] font-bold text-slate-600">
                    <span className="bg-[#128807]/10 text-[#128807] px-2 py-0.5 rounded-none flex items-center gap-1 uppercase tracking-wider">
                      ✓ 24x7 Roadside Assistance (Included)
                    </span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-none uppercase">Zero Paper Claims upto 1 Lakh</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-none uppercase">Self-Video Claims</span>
                  </div>

                  {/* Bottom Footer Links */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-4 text-[10px] font-extrabold uppercase tracking-wider text-[#0065ff]">
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-500">
                      <input type="checkbox" className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-3.5 h-3.5" />
                      <span>Add to Compare</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 hover:underline cursor-pointer">29 Cashless Garages</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer">View Coverage</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer flex items-center gap-1 text-[9px]">
                        📥 Download Pdf
                      </span>
                    </div>
                  </div>
                </div>

                {/* Plan 2: United India Insurance */}
                <div className="border border-slate-200 bg-white relative shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-amber-600 text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                        UNITED
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-800 font-sora">United India Insurance</h4>
                        <p className="text-[10px] text-gray-400 font-semibold">Standard comprehensive policy covering accidental damage</p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold block">IDV Cover: <strong className="text-slate-700">₹7,65,000</strong></span>
                      <button className="mt-1.5 px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-sm rounded-none shadow-md hover:shadow-lg transition-all flex items-center gap-1.5">
                        ₹1,758
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 mt-3 text-[10px] font-bold text-slate-600">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-none uppercase">Self-Video Claims</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-4 text-[10px] font-extrabold uppercase tracking-wider text-[#0065ff]">
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-500">
                      <input type="checkbox" className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-3.5 h-3.5" />
                      <span>Add to Compare</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 hover:underline cursor-pointer">15 Cashless Garages</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer">View Coverage</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer flex items-center gap-1 text-[9px]">
                        📥 Download Pdf
                      </span>
                    </div>
                  </div>
                </div>

                {/* Plan 3: HDFC ERGO */}
                <div className="border border-slate-200 bg-white relative shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-red-600 text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                        HDFC
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-800 font-sora">HDFC ERGO General Insurance</h4>
                        <p className="text-[10px] text-gray-400 font-semibold">Award-winning claim settlement record & fast response</p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold block">IDV Cover: <strong className="text-slate-700">₹7,20,000</strong></span>
                      <button className="mt-1.5 px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-sm rounded-none shadow-md hover:shadow-lg transition-all flex items-center gap-1.5">
                        ₹2,140
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 mt-3 text-[10px] font-bold text-slate-600">
                    <span className="bg-[#128807]/10 text-[#128807] px-2 py-0.5 rounded-none uppercase">Claim settled in 4 hours</span>
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-none uppercase">Zero Paper Claims</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-4 text-[10px] font-extrabold uppercase tracking-wider text-[#0065ff]">
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-500">
                      <input type="checkbox" className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-3.5 h-3.5" />
                      <span>Add to Compare</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 hover:underline cursor-pointer">42 Cashless Garages</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer">View Coverage</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer flex items-center gap-1 text-[9px]">
                        📥 Download Pdf
                      </span>
                    </div>
                  </div>
                </div>

                {/* Plan 4: ICICI Lombard */}
                <div className="border border-slate-200 bg-white relative shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-orange-500 text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                        ICICI
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-800 font-sora">ICICI Lombard General Insurance</h4>
                        <p className="text-[10px] text-gray-400 font-semibold">Immediate digitally-signed policy in your inbox</p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="text-[10px] text-slate-400 font-bold block">IDV Cover: <strong className="text-slate-700">₹7,50,000</strong></span>
                      <button className="mt-1.5 px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-sm rounded-none shadow-md hover:shadow-lg transition-all flex items-center gap-1.5">
                        ₹2,480
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 mt-3 text-[10px] font-bold text-slate-600">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-none uppercase">Zero Depreciation included</span>
                    <span className="bg-[#128807]/10 text-[#128807] px-2 py-0.5 rounded-none uppercase">24x7 Claims Support</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-4 text-[10px] font-extrabold uppercase tracking-wider text-[#0065ff]">
                    <label className="flex items-center gap-1.5 cursor-pointer text-slate-500">
                      <input type="checkbox" className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-3.5 h-3.5" />
                      <span>Add to Compare</span>
                    </label>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 hover:underline cursor-pointer">56 Cashless Garages</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer">View Coverage</span>
                      <span className="text-slate-350">|</span>
                      <span className="hover:underline cursor-pointer flex items-center gap-1 text-[9px]">
                        📥 Download Pdf
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Sidebar (Benefits & Trust) */}
            <div className="w-full lg:w-[21%] flex flex-col gap-5">
              
              {/* Exclusive Benefits Card */}
              <div className="bg-[#eef4ff] border border-blue-100 p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary-blue">
                  <span className="text-lg">🏆</span>
                  <h4 className="text-xs font-black uppercase tracking-wider font-sora">Exclusive Benefits</h4>
                </div>
                
                <ul className="space-y-2.5 text-[11px] font-bold text-slate-600">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0065ff] shrink-0">+</span>
                    <span>24x7 claim support, even on holidays</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0065ff] shrink-0">+</span>
                    <span>Get a dedicated claims manager</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0065ff] shrink-0">+</span>
                    <span>Ensure you get the highest claim payout</span>
                  </li>
                </ul>

                {/* Profile Box */}
                <div className="bg-white border border-blue-50/50 p-2.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#18417c] text-white font-black text-xs flex items-center justify-center shrink-0 uppercase tracking-widest">
                    AS
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-slate-800 leading-none">Amit Sharma</h5>
                    <p className="text-[9px] text-gray-400 font-semibold mt-0.5">98*****240 🔒</p>
                  </div>
                </div>
              </div>

              {/* Network Garages Card */}
              <div className="bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 font-sora border-b border-slate-100 pb-2">
                  1,000+ Garages Across India
                </h4>
                
                <ul className="space-y-2.5 text-[11px] font-bold text-slate-500">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#128807] shrink-0">+</span>
                    <span>Nationwide Cashless Claim Support</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#128807] shrink-0">+</span>
                    <span>Quick Repairs Within 5 Days</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#128807] shrink-0">+</span>
                    <span>Car Pick-Up & Drop Service, 365 Days</span>
                  </li>
                </ul>
              </div>

              {/* Lowest Price Guaranteed Yellow Card */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/55 p-5 shadow-sm relative overflow-hidden flex flex-col gap-4">
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-amber-200/40 rounded-full flex items-center justify-center text-4xl">
                  📉
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 font-sora">
                    Lowest Price Guaranteed
                  </h4>
                  <p className="text-[10px] text-amber-900/60 font-semibold mt-1">
                    Found a better price? We will match it instantly.
                  </p>
                </div>
                <button className="w-full py-2 bg-white hover:bg-slate-50 text-primary-blue font-extrabold text-[10px] border border-primary-blue/20 shadow-sm transition-all rounded-none uppercase tracking-wide">
                  Match my price
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
        </>
      )}
    </>
  );
};

export default CarInsurance;
