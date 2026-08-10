import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import TableComponent from "./RelativeComponents/TableComponent";
import InsuranceCard from "./RelativeComponents/InsuranceCard";
import ImageTextCard from "./RelativeComponents/ImageText";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const TABLE_HEADERS_PAGE_1 = [
  "Feature/Type",
  "Comprehensive Insurance",
  "Third-party Insurance",
  "Own Damage Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Coverage",
    comprehensive:
      "Own-Damage, Third-Party Liabilities,Theft, Fire, Natural,Calamities",
    thirdParty: "Third-Party Liabilities",
    ownDamage: "Own-Damage, Third-Party Liabilities,Theft, Fire",
  },
  {
    point: "Add-Ons Availability",
    comprehensive: "yes",
    thirdParty: "No",
    ownDamage: "Limited",
  },
  {
    point: "Premium",
    comprehensive: "High",
    thirdParty: "Low",
    ownDamage: "Moderated",
  },
  {
    point: "Legal Compliance (in India)",
    comprehensive: "yes",
    thirdParty: "No",
    ownDamage: "Limited",
  },
  // Add more rows as needed
];

// Define column widths as Tailwind CSS classes
const COLUMN_WIDTHS = [
  "w-5", // 25% width for Point of Difference
  "w-20", // 40% width for Comprehensive Insurance
  "w-20", // 40% width for Third-party Insurance
  "w-20", // 20% width for Own Damage Insurance
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

const TwoWheelerInsurance = () => {
  const [step, setStep] = React.useState(1); // 1 = Enter number, 2 = Enter details, 3 = View plans
  const [vehicleNumber, setVehicleNumber] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("9876543210");
  const [vehicleDetails, setVehicleDetails] = React.useState({ model: "", fuel: "", year: "", owner: "", state: "" });
  const [isLoader, setIsLoader] = React.useState(false);
  const [error, setError] = React.useState("");
  const [rtoError, setRtoError] = React.useState(false);

  // Step 3 interactive states for Bike
  const [planType, setPlanType] = React.useState("Third Party");
  const [discountChecked, setDiscountChecked] = React.useState(true);
  const [paCover, setPaCover] = React.useState(false);
  const [passengerCover, setPassengerCover] = React.useState(false);
  const [planDuration, setPlanDuration] = React.useState("1 year");
  const [isAlertOpen, setIsAlertOpen] = React.useState(true);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!vehicleNumber.trim()) {
      setError("Please enter a valid bike number");
      return;
    }
    setError("");

    const cleanNumber = vehicleNumber
      .replace(/[\u200B-\u200D\uFEFF]/g, "") // strip zero-width characters
      .replace(/[^A-Z0-9]/ig, "")
      .trim()
      .toUpperCase();
    const VALID_MOCK_NUMBERS = ["UP16CD9999", "KA51EF8888"];
    const isValid = VALID_MOCK_NUMBERS.includes(cleanNumber);
    console.log("Bike Validation - Input:", vehicleNumber, "Cleaned:", cleanNumber, "Is Valid:", isValid);

    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      if (!isValid) {
        setRtoError(true);
      } else {
        const details = getMockVehicleDetails(vehicleNumber, false);
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
      insurerName: "Bike Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "https://www.ilgi.co/B16EE338DD",
    },
  ];
  const insurancetypes = [
    {
      name: "Comprehensive Bike Insurance",
      description:
        "This type of insurance policy is the most preferred cover by the car owners. It provides financial support to pay for the damages caused to the own vehicle & the third-party. As the name suggests, this type of insurance provides comprehensive cover.",
    },
    {
      name: "Own-Damage Bike Insurance",
      description:
        "The standalone own-damage two-wheeler insurance policy gives coverage for the damages sustained by the insured bike due to an accident, theft, fire, natural disaster and man-made calamity. A standalone own-damage policy provides flexibility to policyholders for choosing an insurance company of their choice. The policyholders can buy a third-party policy and own-damage policy either from the same insurer or a different one. An insured individual can expand the coverage of a own-damage insurance policy by buying add-on covers.",
    },
    {
      name: "Third Party Bike Insurance",
      description:
        "It is compulsory for bike riders to have a third-party two-wheeler insurance plan for their two-wheelers. It is also known as liability-only policy which covers physical injuries, temporary or permanent disability, and death of the third party person due to an accident or a mishap. This motorcycle or scooter insurance policy also covers the property damage expenses sustained by the third party up to Rs. 1 Lakh, but does not cover damages to your own bike.",
    },
  ];

  if (isLoader) {
    return (
      <div className="min-h-[calc(100vh-76px)] bg-white flex flex-col items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Pulsing ring loader */}
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#0065ff]/20 border-t-[#0065ff] rounded-full animate-spin"></div>
            <div className="absolute w-8 h-8 bg-[#0065ff]/10 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-lg font-black text-gray-900 font-sora tracking-tight mt-2">
            Fetching Vehicle Details...
          </h2>
          <p className="text-gray-500 text-xs font-semibold">
            Connecting to RTO / VAHAN Database for <span className="text-[#0065ff] font-bold">{vehicleNumber}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Two-Wheeler Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get comprehensive two-wheeler insurance from Notion Insurance Broker Pvt. Ltd. Safeguard your bike or scooter with extensive coverage against accidents, theft, and damage. Enjoy peace of mind on every ride."
        />
        <meta
          name="keywords"
          content="two-wheeler insurance, bike insurance, scooter insurance, NIB two-wheeler insurance, Notion Insurance Broker two-wheeler insurance, two-wheeler insurance coverage, bike accident insurance, scooter theft protection, two-wheeler damage coverage, motorcycle insurance policies"
        />
        <link
          rel="canonical"
          href="https://www.notioninsurance.com/two-wheeler-insurance"
        />
      </Helmet>

      {rtoError ? (
        <div className="min-h-[calc(100vh-76px)] bg-white flex flex-col items-center justify-center pt-10 pb-12 px-5 font-sans w-full">
          <div className="w-full max-w-[550px] mx-auto text-center">
            {/* Magnifying Glass SVG Illustration */}
            <svg className="w-48 h-36 mx-auto mb-6 text-slate-350" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    model: "Hero Splendor Plus",
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
                  model: "Hero Splendor Plus",
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
              Continue with twowheeler insurance
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
                  src="assets/images/Products/bike-insurance.webp"
                  alt="Two Wheeler Insurance"
                  className="relative z-10 w-full h-auto object-contain max-h-[480px] scale-110"
                />
              </div>
            </div>

            {/* Right side: Enter Vehicle Number Form */}
            <div className="w-full md:w-[45%]">
              <div className="p-2 md:p-4 flex flex-col justify-center">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-[34px] font-black text-gray-900 mb-3 font-sora tracking-tight leading-[1.15]">
                    Buy Two-Wheeler Insurance in <span className="text-[#0065ff]">60 seconds</span>! ⚡
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
                        placeholder="Enter Bike Number (e.g. MH-15-AB-1234)"
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
                  <a href="#" className="hover:underline">Buying a new bike?</a>
                  <a href="#" className="hover:underline">Don't have bike number?</a>
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
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.2 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Bikes Insured</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.7 Crore+</div>
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
                      REGISTERED TWO-WHEELER
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
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.2 Crore+</div>
              <div className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wider">Bikes Insured</div>
            </div>
            <div className="border-l border-slate-100">
              <div className="text-lg font-black text-slate-800 font-sora leading-none mb-1">1.7 Crore+</div>
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
          {/* Top Info Bar */}
          <div className="bg-white border-b border-slate-200 py-3 px-5 md:px-8 lg:px-12 xl:px-20 flex items-center justify-between text-xs w-full">
            <div className="flex items-center gap-2">
              <span className="text-primary-blue font-black text-lg tracking-wider font-sora">NIB</span>
              <span className="text-slate-300">|</span>
              <span className="font-extrabold text-slate-500 uppercase tracking-widest text-[9px]">Two-Wheeler Insurance</span>
            </div>
            
            <div className="flex items-center gap-3 font-bold text-slate-700">
              {/* Language Selection */}
              <div className="border border-slate-200 px-3 py-1 flex items-center gap-1.5 shadow-sm bg-white cursor-pointer hover:border-slate-350 transition-all">
                <span>🌐 English</span>
                <span className="text-[10px] text-slate-400">&#9662;</span>
              </div>
              
              <a href="tel:+919302182475" className="bg-[#18417c] hover:bg-[#002b66] text-white px-4 py-1.5 flex items-center gap-1.5 shadow-sm transition-all text-[11px] font-black uppercase tracking-wider">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call us
              </a>
            </div>
          </div>

          {/* Main Grid container */}
          <div className="w-full max-w-[1400px] mx-auto mt-6 flex flex-col lg:flex-row items-start justify-between gap-6 px-5 md:px-8">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[23%] flex flex-col gap-5">
              
              {/* Your bike details */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm relative">
                <button
                  onClick={() => setStep(1)}
                  className="absolute top-5 right-5 text-primary-blue hover:underline text-[10px] font-extrabold uppercase tracking-wider"
                >
                  Edit
                </button>
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Your bike details</h4>
                <div className="space-y-1">
                  <h5 className="text-sm font-black text-slate-800 font-sora leading-tight">{vehicleDetails.model}</h5>
                  <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">{vehicleNumber} • {vehicleDetails.year} Registered</p>
                </div>
              </div>

              {/* Addons */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Addons</h4>
                  <a href="#" className="text-primary-blue hover:underline text-[9px] font-bold uppercase tracking-wider">Know more</a>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={paCover}
                      onChange={(e) => setPaCover(e.target.checked)}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-4 h-4"
                    />
                    <span>Personal Accident Cover</span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={passengerCover}
                      onChange={(e) => setPassengerCover(e.target.checked)}
                      className="rounded-none border-slate-300 text-primary-blue focus:ring-0 w-4 h-4"
                    />
                    <span>PA cover for passenger</span>
                  </label>
                </div>
              </div>

              {/* Plan duration */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-slate-700">Plan duration</span>
                <select
                  value={planDuration}
                  onChange={(e) => setPlanDuration(e.target.value)}
                  className="bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-800 rounded-none focus:outline-none focus:border-primary-blue"
                >
                  <option value="1 year">1 year</option>
                  <option value="2 years">2 years</option>
                  <option value="3 years">3 years</option>
                </select>
              </div>

            </div>

            {/* Center Column */}
            <div className="w-full lg:w-[52%] flex flex-col gap-6">
              
              {/* Alert expired banner */}
              {isAlertOpen && (
                <div className="bg-red-50 border border-red-200/60 p-3 px-4 flex items-center justify-between text-xs text-red-800 font-semibold relative">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⏰</span>
                    <span>Hurry up! Your policy has already expired</span>
                  </div>
                  <button
                    onClick={() => setIsAlertOpen(false)}
                    className="text-red-400 hover:text-red-700 transition-colors text-sm font-black cursor-pointer leading-none"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Filters row */}
              <div className="bg-white border border-slate-200 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs">
                
                {/* Plan Type Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-500">Plan Type</span>
                  <select
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className="border border-slate-200 px-3 py-1.5 font-bold text-slate-800 rounded-none focus:outline-none bg-white"
                  >
                    <option value="Third Party">Third Party</option>
                    <option value="Comprehensive">Comprehensive</option>
                  </select>
                </div>

                {/* Switch toggle discount */}
                <div className="flex items-center gap-3">
                  <span className="bg-[#128807]/10 text-[#128807] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5">
                    🎉 Get discount! Save ₹50 more
                  </span>
                  
                  {/* Toggle Switch */}
                  <div
                    onClick={() => setDiscountChecked(!discountChecked)}
                    className={`w-10 h-5 p-0.5 rounded-full cursor-pointer flex transition-colors duration-200 ${
                      discountChecked ? "bg-green-500 justify-end" : "bg-slate-350 justify-start"
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                  </div>
                </div>

              </div>

              {/* Plan Count Info */}
              <div>
                <h3 className="text-base font-black text-slate-800 font-sora">
                  {planType === "Third Party" ? "1 third party plan available" : "3 plans available"}
                </h3>
                <p className="text-[11px] text-gray-500 font-semibold mt-0.5">
                  {planType === "Third Party"
                    ? "Covers damages to third-party only and not your vehicle"
                    : "Covers damages to third-party as well as your own vehicle"}
                </p>
              </div>

              {/* Plan Lists */}
              <div className="space-y-4">
                
                {/* United India Card */}
                <div className="bg-white border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Logo */}
                    <div className="w-16 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-amber-600 text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                      UNITED
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 font-sora">United India Insurance</h4>
                      <p className="text-[10px] text-gray-400 font-semibold">Reliable government-backed coverage for two-wheelers</p>
                    </div>
                  </div>

                  {/* Buy Button */}
                  <div className="w-full sm:w-auto text-right shrink-0">
                    <button className="w-full sm:w-auto px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-xs uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      Buy @ {planType === "Third Party" ? "₹714" : "₹1,124"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Additional plans for Comprehensive */}
                {planType === "Comprehensive" && (
                  <>
                    {/* Oriental Insurance */}
                    <div className="bg-white border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-16 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-[#18417c] text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                          ORIENTAL
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-slate-800 font-sora">Oriental Insurance</h4>
                          <p className="text-[10px] text-gray-400 font-semibold">Premium own-damage protection with fast claim processing</p>
                        </div>
                      </div>

                      <div className="w-full sm:w-auto text-right shrink-0">
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-xs uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          Buy @ ₹1,340
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* ICICI Lombard */}
                    <div className="bg-white border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-16 h-12 bg-white border border-slate-200 flex items-center justify-center font-black text-orange-500 text-[10px] text-center p-1 shadow-sm leading-none shrink-0 uppercase tracking-widest font-sora">
                          ICICI
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-slate-800 font-sora">ICICI Lombard</h4>
                          <p className="text-[10px] text-gray-400 font-semibold">Immediate digital certificate delivery in your inbox</p>
                        </div>
                      </div>

                      <div className="w-full sm:w-auto text-right shrink-0">
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-[#0065ff] hover:bg-[#0052cc] text-white font-black text-xs uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                          Buy @ ₹1,550
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </>
                )}

              </div>
              
              <div className="text-[10px] text-slate-400 font-bold text-center mt-2">
                * Note: Prices are exclusive of GST. T&C Apply.
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[21%] flex flex-col gap-5">
              
              {/* Claims support card */}
              <div className="bg-[#eef4ff] border border-blue-100 p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary-blue">
                  <span className="text-lg">🛵</span>
                  <h4 className="text-[11px] font-black uppercase tracking-wider font-sora">Claims support anytime!</h4>
                </div>
                
                <ul className="space-y-2.5 text-[11px] font-semibold text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span>24x7 Claims assistance for all customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span>Dedicated claim manager helping you at every step</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span>Get latest updates at regular intervals for claims</span>
                  </li>
                </ul>

                <button className="w-full py-2 bg-white hover:bg-slate-50 text-primary-blue font-extrabold text-[10px] border border-blue-100 shadow-sm transition-all rounded-none uppercase tracking-wide">
                  Show claim process ▾
                </button>
              </div>

              {/* Why buy from Policybazaar */}
              <div className="bg-white border border-slate-200 p-5 shadow-sm flex flex-col gap-4">
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-800 font-sora border-b border-slate-100 pb-2">
                  Why buy from Notion Insurance?
                </h4>
                
                <ul className="space-y-2.5 text-[11px] font-semibold text-slate-500">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue shrink-0">❖</span>
                    <span>Claim assistance anytime, anywhere!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue shrink-0">❖</span>
                    <span>Compare and choose best plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue shrink-0">❖</span>
                    <span>24*7 support helpline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue shrink-0">❖</span>
                    <span>Get your policy instantly with quick and easy KYC process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-blue shrink-0">❖</span>
                    <span>1 Lakh+ people visit to buy bike insurance everyday</span>
                  </li>
                </ul>
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

export default TwoWheelerInsurance;
