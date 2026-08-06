import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataContext } from "../Context/DataContext";

// Replace with your actual logo import
const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className=" h-20  rounded-lg flex items-center justify-center">
    
             <img
              src="assets/images/header/logo.webp"
              alt="Notion insurance "
              loading='lazy'
              className="mr-4 py-0 cursor-pointer object-cover  h-full w-full  lg:ml-2"
            />
    </div>
 
    <div>
      {/* <Typography variant="h5" className="font-bold text-gray-900">
    Notion Insurance Brokers
      </Typography>
     */}
    </div>
  </div>
);

export function Contactus() {
  const location = useLocation();
  const navigate = useNavigate();
  const { sendMail, responseMessage, loading, error } = useDataContext();
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    messageSubject: "",
    messageDetails: "",
  });

const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "insurance-quote", label: "Insurance Quote" },
  { value: "policy-renewal", label: "Policy Renewal" },
  
  // Motor Insurance Types
  { value: "motor-vehicle-insurance", label: "Motor Vehicle Insurance" }, // Motor Vehicle
  { value: "two-wheeler-insurance", label: "Two-Wheeler Insurance" }, // Two-Wheeler Insurance
  { value: "commercial-vehicle-insurance", label: "Commercial Vehicle Insurance" }, // Commercial Vehicle
  
  // Non-Motor Insurance Types
  { value: "health-insurance", label: "Health Insurance" }, // Health Insurance
  { value: "life-insurance", label: "Life Insurance" }, // Life Insurance
  { value: "home-insurance", label: "Home Insurance" }, // Home Insurance
  { value: "travel-insurance", label: "Travel Insurance" }, // Travel Insurance
  { value: "business-insurance", label: "Business Insurance" }, // Business Insurance
  { value: "pet-insurance", label: "Pet Insurance" }, // Pet Insurance
  { value: "other-insurance", label: "Other Insurance" }, // Other Insurance
  
  // Other
];


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const insurerName = queryParams.get("subject");

    if (insurerName && insurerName !== formData.subject) {
      setFormData((prevData) => ({
        ...prevData,
        messageSubject: insurerName,
      }));
    }
    navigate("/contact-us");
  }, [location.search, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiData = {
      name: formData.fullName,
      email: formData.emailAddress,
      mobile: formData.phoneNumber,
      subject: formData.messageSubject,
      details: formData.messageDetails,
    };
    await sendMail(apiData);
  };

  useEffect(() => {
    if (responseMessage) {
      toast.success(responseMessage.message + " success");
    }
    if (error) {
      toast.error("Error: " + error);
    }
    setFormData({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      messageSubject: "",
      messageDetails: "",
    });
  }, [responseMessage, error]);

  return (
    <>
      <section className="min-h-screen  py-8 px-4">
        {/* Header with Logo */}
   <div className="max-w-6xl mx-auto mb-8 px-4">
  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4">

    {/* Logo */}
    <img
      src="assets/images/header/logo.webp"
      alt="Notion Insurance"
      loading="lazy"
      className="cursor-pointer h-16 w-auto sm:h-20 object-contain"
    />

    {/* Contact Info */}
   

  </div>
</div>


        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
            {/* Right Side - Form */}
            <div className="lg:w-3/5 w-full">
              <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                <CardBody className="p-8">
                  <div className="text-center mb-8">
                    <Typography variant="h4" className="font-bold text-gray-900 mb-2">
                      Get In Touch
                    </Typography>
                    
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile No *
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                          type="tel"
                          required
                          placeholder="Enter mobile number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                          type="email"
                          required
                          placeholder="Enter your email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                          required
                          name="messageSubject"
                          value={formData.messageSubject}
                          onChange={handleChange}
                        >
                          {subjectOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message Details *
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl  focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                        required
                        placeholder="Tell us how we can help you..."
                        name="messageDetails"
                        value={formData.messageDetails}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-0"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📞</span>
              </div>
              <Typography variant="h6" className="font-semibold mb-2">
                Call Us
              </Typography>
              <Typography className="text-gray-600">
               9302182475 <br />
               755-4911343
              </Typography>
            </div>
            
        
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-50">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">📍</span>
              </div>
              <Typography variant="h6" className="font-semibold mb-2">
                Visit Us
              </Typography>
              <Typography className="text-gray-600">
                Plot No. 1 ,3rd Floor Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026
              </Typography>
            </div>
          </div>
        </div>
      </section>
      
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Contactus;