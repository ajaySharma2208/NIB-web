import React, { useEffect, useState } from 'react';
import { Dialog } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useDataContext } from '../../../Context/DataContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  FaShieldAlt, 
  FaHeadphones, 
  FaClipboardCheck, 
  FaMedal, 
  FaLock, 
  FaUser, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPlay, 
  FaArrowRight,
  FaChevronDown
} from "react-icons/fa";

const Hero = () => {
    const [open, setOpen] = useState(false);
    const { sendMail, loading, responseMessage, error } = useDataContext();
    
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        insuranceType: '',
        city: ''
    });

    const handleOpen = () => setOpen(!open);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile || !formData.insuranceType || !formData.city) {
            toast.error("Please fill all the fields");
            return;
        }
        if (formData.mobile.length < 10) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        const mailData = {
            name: formData.name,
            email: "quote-request@notioninsurance.com",
            mobile: formData.mobile,
            subject: `Quote Request: ${formData.insuranceType}`,
            details: `Selected City: ${formData.city}`
        };

        await sendMail(mailData);
    };

    useEffect(() => {
        if (responseMessage) {
            toast.success("Quote request submitted successfully!");
            setFormData({ name: '', mobile: '', insuranceType: '', city: '' });
        }
        if (error) {
            toast.error(`Error: ${error}`);
        }
    }, [responseMessage, error]);

    return (
        <div className="w-full py-12 lg:py-16 px-5 md:px-8 lg:px-12 xl:px-20 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
                
                {/* Left Column - Copy & Badge (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-gray-900 leading-[1.12] tracking-tight">
                        Buy Insurance,<br />
                        <span className="text-primary-blue">Simple</span> and <span className="text-accent-orange">Easy</span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed text-justify">
                        We are a professional organization with a dedicated team of qualified insurance professionals, committed to meeting the diverse insurance and risk management needs of clients nationwide. Our team specializes in providing customized solutions for individuals and businesses across various sectors, including life, health, home, and business insurance.We understand that every client has unique requirements, and we work closely with them to identify the best strategies to mitigate risks and protect their assets.With a focus on integrity, transparency, and customer satisfaction, we offer expert guidance and support, ensuring that our clients receive comprehensive coverage tailored to their specific needs.
                    </p>

                    {/* Feature bullet list - horizontal layout */}
                    <div className="flex flex-wrap items-center justify-between gap-4 py-4.5 border-t border-b border-gray-100 mt-2">
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#f3f7fc] border border-blue-100 flex items-center justify-center text-primary-blue text-xs">
                                <FaShieldAlt />
                            </div>
                            <div>
                                <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Trusted by</p>
                                <p className="text-[11px] font-black text-gray-800 leading-none">1000+ Clients</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#f3f7fc] border border-blue-100 flex items-center justify-center text-primary-blue text-xs">
                                <FaHeadphones />
                            </div>
                            <div>
                                <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Expert</p>
                                <p className="text-[11px] font-black text-gray-800 leading-none">Support</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#f3f7fc] border border-blue-100 flex items-center justify-center text-primary-blue text-xs">
                                <FaClipboardCheck />
                            </div>
                            <div>
                                <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider leading-none mb-0.5">Quick & Easy</p>
                                <p className="text-[11px] font-black text-gray-800 leading-none">Claim Process</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-8 h-8 rounded-full bg-[#f3f7fc] border border-blue-100 flex items-center justify-center text-primary-blue text-xs">
                                <FaMedal />
                            </div>
                            <div>
                                <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider leading-none mb-0.5">IRDAI Licensed</p>
                                <p className="text-[11px] font-black text-gray-800 leading-none">Insurance Broker</p>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button 
                            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-blue hover:bg-blue-800 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-none cursor-pointer"
                        >
                            GET A FREE QUOTE <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Middle Column - Circular Family Image & Play Modal (3 cols) */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-6 z-0 lg:translate-x-24">
                    {/* CSS dot background decoration */}
                    <div className="absolute top-4 left-[-15px] -z-10 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:8px_8px] opacity-70"></div>
                    
                    {/* Large light blue backdrop circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[105%] h-[105%] rounded-full bg-[#f0f5ff] border border-blue-50/50"></div>

                    {/* Circle Image Wrapper */}
                    <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl">
                        <img 
                            className="w-full h-full object-cover"
                            src="/assets/images/hero/happy_family_hero.jpg"
                            alt="NIB Indian family insurance"
                            loading='lazy'
                        />
                    </div>

                    {/* Floating top right badge */}
                    <div className="absolute top-6 right-6 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 z-10">
                        <FaShieldAlt className="text-primary-blue text-lg" />
                    </div>

                    {/* Floating bottom left Play Video card - overlapping edge */}
                    <div 
                        onClick={handleOpen} 
                        className="absolute bottom-4 left-[-10px] bg-white rounded-2xl shadow-xl border border-gray-100 px-4.5 py-3 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-200 w-auto z-20"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-white text-xs pl-0.5 shadow-md">
                            <FaPlay />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-900 uppercase tracking-wider leading-none mb-1">WATCH VIDEO</p>
                            <p className="text-[9px] text-gray-400 font-extrabold uppercase leading-none">Protect What Matters</p>
                        </div>
                    </div>

                    {/* Video Player Modal */}
                    <Dialog
                        open={open}
                        handler={handleOpen}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                        className='object-contain overflow-hidden'
                    >
                        <iframe 
                            loading='lazy' 
                            className='w-full h-[300px] md:h-[400px] iframe border-none' 
                            src="https://www.youtube.com/embed/WtTeXHkZ6pI?autoplay=1&mute=1" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                            allowFullScreen
                        ></iframe>
                    </Dialog>
                </div>

                <div className="lg:col-span-4 z-10 relative lg:-translate-x-8">
                    <div id="quote-form" className="bg-white rounded-[32px] border border-gray-100 shadow-2xl p-6 sm:p-8 relative max-w-[350px] w-full mx-auto lg:mr-0 lg:ml-auto">
                        <div className="mb-6">
                            <h3 className="text-[15px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Get Your Free</h3>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-black text-gray-900 leading-none">
                                    <span className="border-b-[3px] border-primary-blue pb-1 text-primary-blue mr-1">Insurance</span> Quote
                                </h3>
                            </div>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Name */}
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-gray-400 text-sm"><FaUser /></span>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-800 placeholder-gray-400 transition-all duration-200"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-gray-400 text-sm"><FaPhone /></span>
                                <input 
                                    type="tel" 
                                    name="mobile" 
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-800 placeholder-gray-400 transition-all duration-200"
                                />
                            </div>

                            {/* Insurance Type */}
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-gray-400 text-sm"><FaShieldAlt /></span>
                                <select 
                                    name="insuranceType"
                                    value={formData.insuranceType}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-850 appearance-none placeholder-gray-400 transition-all duration-200"
                                >
                                    <option value="" disabled>Select Insurance Type</option>
                                    <option value="Car Insurance">Car Insurance</option>
                                    <option value="Two Wheeler Insurance">Two Wheeler Insurance</option>
                                    <option value="Commercial Vehicle">Commercial Vehicle</option>
                                    <option value="Life Insurance">Life Insurance</option>
                                    <option value="Health Insurance">Health Insurance</option>
                                    <option value="Travel Insurance">Travel Insurance</option>
                                </select>
                                <span className="absolute right-4 pointer-events-none text-gray-400"><FaChevronDown className="text-[10px]" /></span>
                            </div>

                            {/* City */}
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-gray-400 text-sm"><FaMapMarkerAlt /></span>
                                <select 
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-850 appearance-none placeholder-gray-400 transition-all duration-200"
                                >
                                    <option value="" disabled>Select City</option>
                                    <option value="Bhopal">Bhopal</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Jabalpur">Jabalpur</option>
                                    <option value="Gwalior">Gwalior</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Bangalore">Bangalore</option>
                                </select>
                                <span className="absolute right-4 pointer-events-none text-gray-400"><FaChevronDown className="text-[10px]" /></span>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full mt-2 py-3.5 bg-accent-orange hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border-none cursor-pointer"
                            >
                                {loading ? "Submitting..." : "GET FREE QUOTE"} <FaArrowRight />
                            </button>
                        </form>

                        {/* Security Footer */}
                        <div className="mt-5 flex items-center justify-center gap-1.5 text-gray-400 leading-none">
                            <FaLock className="text-[10px]" />
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Your information is 100% secure</span>
                        </div>
                    </div>
                </div>

            </div>
            
            <ToastContainer 
                position="top-right" 
                autoClose={4000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Hero;
