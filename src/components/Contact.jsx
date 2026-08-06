// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Input,
//   CardHeader,
//   Tooltip,
//   Card,
//   Checkbox,
//   CardFooter,
//   CardBody,
//   Textarea,
//   Typography,
// } from "@material-tailwind/react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoLocation } from "react-icons/io5";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDataContext } from "../Context/DataContext";

// export function Contact() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { sendMail, responseMessage, loading, error } = useDataContext();
//   const [formData, setFormData] = useState({
//     fullName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     messageSubject: "",
//     messageDetails: "",
//   });

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const insurerName = queryParams.get("subject");

//     if (insurerName && insurerName !== formData.subject) {
//       setFormData((prevData) => ({
//         ...prevData,
//         messageSubject: insurerName,
//       }));
//     }
//     navigate("/contact");
//   }, [location.search, navigate]);

//   // General handleChange function
//   const handleChange = (e) => {
//     const { name, value } = e.target; // Destructure name and value from the event target
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Update the specific field based on the name
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     const apiData = {
//       name: formData.fullName,
//       email: formData.emailAddress,
//       mobile: formData.phoneNumber,
//       subject: formData.messageSubject,
//       details: formData.messageDetails,
//     };
//     await sendMail(apiData);
//   };
//   useEffect(() => {
//     if (responseMessage) {
//       toast.success(responseMessage.message + " success");
//     }
//     if (error) {
//       toast.error("Error: " + error);
//     }
//     setFormData({
//       fullName: "",
//       emailAddress: "",
//       phoneNumber: "",
//       messageSubject: "",
//       messageDetails: "",
//     });
//   }, [responseMessage, error]);
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>
//           Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert
//         </title>
//         <meta
//           name="description"
//           content="Contact Notion Insurance Broker Pvt. Ltd. (IRDA Licence No. 619). Reach out for professional insurance services, tailored risk management solutions, and support. Licensed as a Direct Broker by IRDA, valid until 02/10/2026."
//         />
//         <meta
//           name="keywords"
//           content="contact Notion Insurance Broker, insurance services India, IRDA Licence No. 619, insurance solutions, risk management, direct broker license, insurance expert support, insurance broker India, NIB contact info"
//         />
//         <meta name="robots" content="index, follow" />
//         {/* <link rel="canonical" href="https://www.notioninsurance.com/contact" /> */}
//         <meta
//           property="og:title"
//           content="Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert"
//         />
//         <meta
//           property="og:description"
//           content="Get in touch with Notion Insurance Broker Pvt. Ltd. for professional insurance services and risk management solutions. Licensed Direct Broker by IRDA (Licence No. 619)."
//         />
//         {/* <meta property="og:url" content="/contact" /> */}
//         <meta property="og:type" content="website" />
//         {/* <meta
//           property="og:image"
//           content="/assets/images/header/logo.webp"
//         /> */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert"
//         />
//         <meta
//           name="twitter:description"
//           content="Reach out to Notion Insurance Broker Pvt. Ltd. (IRDA Licence No. 619) for expert insurance services, solutions, and support."
//         />
//         {/* <meta name="twitter:image" content="/assets/images/header/logo.webp" /> */}
//       </Helmet>

//       <section className="w-full  bg-white">
//         <div className=" px-0  text-center   rounded-xl">
//           <div className="h-full py-3 bg-[url('/assets/images/contact/contactbg.avif')] w-full bg-cover">
//             <Typography
//               variant="h2"
//               color="blue-gray"
//               className="mb-4  pt-8 lg:pt-10 !text-3xl lg:!text-5xl"
//             >
//               We&apos;re Here to Help
//             </Typography>

//             <Typography className="mb-8 px-2 font-normal text-md lg:mb-12 mx-auto md:max-w-3xl">
//               Whether you have questions about our services Requesting technical
//               assistance or suggestions for improvement Our team looks forward
//               to hearing from you.
//             </Typography>
//           </div>

//           <div className="container px-2 py-5 mt-10">
//             <ul className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center w-full  gap-5">
//               <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 px-5">
//                 <h1 className="text-2xl font-semibold py-2 text-gray-800">
//                   For Information Support
//                 </h1>
//                 <span>
//                   <Link to="mailto:info@notioninsurance.com">
//                     <li className="grid grid-cols-1 items-center justify-items-center gap-2">
//                       <span className="text-xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                         <MdEmail />
//                       </span>
//                       <span className="font-normal text-md text-start text-gray-900">
//                         info@notioninsurance.com
//                       </span>
//                     </li>
//                   </Link>
//                 </span>
//               </li>

//               <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 px-5">
//                 <h1 className="text-xl font-semibold py-2 text-gray-800">
//                   Become A POSP Support
//                 </h1>
//                 <span>
//                   <Link to="mailto:pospsupports@notioninsurance.com">
//                     <li className="grid grid-cols-1 items-center justify-items-center gap-2">
//                       <span className="text-2xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                         <MdEmail />
//                       </span>
//                       <span className="font-normal text-md text-start text-gray-900">
//                         pospsupports@notioninsurance.com
//                       </span>
//                     </li>
//                   </Link>
//                 </span>
//               </li>

//               <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 md:px-5">
//                 <h1 className="text-xl font-semibold py-2 text-gray-800">
//                   For Claim Support
//                 </h1>
//                 <span>
//                   <Link to="mailto:claims@notioninsurance.com">
//                     <li className="grid grid-cols-1 items-center justify-items-center gap-2">
//                       <span className="text-2xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                         <MdEmail />
//                       </span>
//                       <span className="font-normal text-md text-start text-gray-900">
//                         claims@notioninsurance.com
//                       </span>
//                     </li>
//                   </Link>
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white container bg lg:w-3/2  flex flex-col lg:pt-8 overflow-hidden  items-center justify-center gap-10">
//             <div className="lg:flex items-center justify-between md:gap-10 lg:flex-row flex-col md:px-5 w-full ">
//               <div className="div py-2 lg:w-[60vw]">
//                 <Typography variant="h2" color="blue-gray">
//                   Contact Information
//                 </Typography>
//                 <p className="mb-7">
//                   At Notion Insurance Broker Pvt Ltd, we understand that
//                   choosing the right insurance can be overwhelming.
//                 </p>
//                 <div className="flex lg:flex-row flex-col gap-3">
//                   <Card className=" lg:w-1/2 w-full h-94 p-0 shadow-none ">
//                     <CardBody className="flex flex-col h-full items-center gap-3  border rounded-xl shadow-xl">
//                       <div className="">
//                         <CardBody className=" p-0">
//                           <Typography
//                             variant="h5"
//                             color="blue-gray"
//                             className="py-3 text-start"
//                           >
//                             Bhopal (Main Branch)
//                           </Typography>
//                           <ul className="flex flex-col  items-start p-2  justify-center gap-2 ">
//                             <li className="flex items-center gap-4">
//                               <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                 <FaPhoneAlt />
//                               </span>
//                               <Typography className="font-normal text-lg text-gray-900 ">
//                                 <Link to="tel:9302182475">91-9302182475</Link>
//                                 <br />
//                                 <Link to="tel:755-4911343">
//                                   +91 755-4911343
//                                 </Link>
//                               </Typography>
//                             </li>
//                             <Link to="mailto:info@notioninsurance.com">
//                               <li className="flex items-center gap-4">
//                                 <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                   <MdEmail />
//                                 </span>
//                                 <Typography className="font-normal text-lg text-start text-gray-900">
//                                   info@notioninsurance.com
//                                 </Typography>
//                               </li>
//                             </Link>

//                             <li className="flex items-center gap-4">
//                               <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                 <IoLocation />
//                               </span>
//                               <Typography className="font-normal text-justify text-lg text-gray-900 ">
//                                 Plot No. 1 ,
//                                 <label>
//                                   3<sup>rd</sup>{" "}
//                                 </label>{" "}
//                                 Floor Lalwani Complex, Above Axis Bank, Vidya
//                                 Nagar, Bhopal, Madhya Pradesh 462026
//                               </Typography>
//                             </li>
//                           </ul>
//                         </CardBody>
//                       </div>
//                     </CardBody>
//                   </Card>
//                   <Card className=" lg:w-1/2 w-full h-94 p-0 shadow-none ">
//                     <CardBody className="flex flex-col h-full items-center gap-3  border rounded-xl shadow-xl">
//                       <div className="">
//                         <CardBody className=" p-0">
//                           <Typography
//                             variant="h5"
//                             color="blue-gray"
//                             className="py-3 ml-3 text-start"
//                           >
//                             Jabalpur Branch
//                           </Typography>
//                           <ul className="flex flex-col items-start p-2  justify-center gap-2 ">
//                             <Link to="tel:9827220353">
//                               <li className="flex items-center gap-4">
//                                 <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                   <FaPhoneAlt />
//                                 </span>
//                                 <Typography className="font-normal text-lg text-gray-900 ">
//                                   +91 9827220353
//                                 </Typography>
//                               </li>
//                             </Link>
//                             <Link to="mailto:mkrathod@notioninsurance.com">
//                               <li className="flex items-center gap-3">
//                                 <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                   <MdEmail />
//                                 </span>
//                                 <Typography className="font-normal w-[50%] text-lg text-start text-gray-900">
//                                   mkrathod@notioninsurance.com
//                                 </Typography>
//                               </li>
//                             </Link>
//                             <li className="flex items-center gap-4">
//                               <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
//                                 <IoLocation />
//                               </span>
//                               <Typography className="font-normal text-lg text-gray-900 text-justify">
//                                 33, JK Complex ,{" "}
//                                 <label>
//                                   2<sup>nd</sup>{" "}
//                                 </label>{" "}
//                                 Floor, Gorakhpur, Jabalpur
//                               </Typography>
//                             </li>
//                           </ul>
//                         </CardBody>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </div>
//               </div>
//               <form
//                 onSubmit={handleSubmit} // Attach the submit handler
//                 className="flex flex-col gap-4 w-full lg:w-[40vw]  px-3 py-4"
//               >
//                 <Typography variant="h2" color="blue-gray" className="py-2">
//                   Fill Up The Form
//                 </Typography>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Typography
//                       variant="small"
//                       className="mb-2 text-left font-medium !text-gray-900"
//                     >
//                       Full Name
//                     </Typography>
//                     <input
//                       className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
//                       type="text"
//                       id="fullName"
//                       required
//                       placeholder="Enter Full Name"
//                       name="fullName" // Set name attribute for identification
//                       value={formData.fullName} // Bind input value to fullName state
//                       onChange={handleChange} // Use the general handleChange function
//                     />
//                   </div>
//                   <div>
//                     <Typography
//                       variant="small"
//                       className="mb-2 text-left font-medium !text-gray-900"
//                     >
//                       Mobile No
//                     </Typography>
//                     <input
//                       className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
//                       type="tel"
//                       id="phoneNumber"
//                       placeholder="Enter Mobile Number"
//                       required
//                       name="phoneNumber" // Set name attribute for identification
//                       value={formData.phoneNumber} // Bind input value to mobileNo state
//                       onChange={handleChange} // Use the general handleChange function
//                     />
//                   </div>
//                   <div>
//                     <Typography
//                       variant="small"
//                       className="mb-2 text-left font-medium !text-gray-900"
//                     >
//                       Your Email
//                     </Typography>
//                     <input
//                       className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
//                       type="email"
//                       id="emailAddress"
//                       placeholder="Enter Your Email"
//                       required
//                       name="emailAddress" // Set name attribute for identification
//                       value={formData.emailAddress} // Bind input value to email state
//                       onChange={handleChange} // Use the general handleChange function
//                     />
//                   </div>
//                   <div>
//                     <Typography
//                       variant="small"
//                       className="mb-2 text-left font-medium !text-gray-900"
//                     >
//                       Your Subject
//                     </Typography>
//                     <input
//                       className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
//                       type="text"
//                       required
//                       id="messageSubject"
//                       placeholder="Enter Your Subject"
//                       name="messageSubject" // Set name attribute for identification
//                       value={formData.messageSubject} // Bind input value to subject state
//                       onChange={handleChange} // Use the general handleChange function
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Typography
//                     variant="small"
//                     className="mb-2 text-left font-medium !text-gray-900"
//                   >
//                     Your message
//                   </Typography>
//                   <textarea
//                     rows={6}
//                     className="border resize-none border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
//                     type="text"
//                     required
//                     id="messageDetails"
//                     placeholder="Enter Your Subject"
//                     name="messageDetails" // Set name attribute for identification
//                     value={formData.messageDetails} // Bind input value to subject state
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-blue-800 border-none p-0 w-[100%] h-[38px] "
//                 >
//                   {loading ? "Sending..." : "Submit"}
//                 </Button>
//               </form>
//             </div>

//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.1539426375944!2d77.44726371271773!3d23.196702225323936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43747f04ada9%3A0x7e9aa8a8f98f0234!2sNOTION%20INSURANCE%20BROKER%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1727776089315!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
//     </>
//   );
// }

// export default Contact;



import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  CardHeader,
  Tooltip,
  Card,
  Checkbox,
  CardFooter,
  CardBody,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataContext } from "../Context/DataContext";

export function Contact() {
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

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const insurerName = queryParams.get("subject");

    if (insurerName && insurerName !== formData.subject) {
      setFormData((prevData) => ({
        ...prevData,
        messageSubject: insurerName,
      }));
    }
    navigate("/contact");
  }, [location.search, navigate]);

  // General handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field based on the name
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert
        </title>
        <meta
          name="description"
          content="Contact Notion Insurance Broker Pvt. Ltd. (IRDA Licence No. 619). Reach out for professional insurance services, tailored risk management solutions, and support. Licensed as a Direct Broker by IRDA, valid until 02/10/2026."
        />
        <meta
          name="keywords"
          content="contact Notion Insurance Broker, insurance services India, IRDA Licence No. 619, insurance solutions, risk management, direct broker license, insurance expert support, insurance broker India, NIB contact info"
        />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="https://www.notioninsurance.com/contact" /> */}
        <meta
          property="og:title"
          content="Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert"
        />
        <meta
          property="og:description"
          content="Get in touch with Notion Insurance Broker Pvt. Ltd. for professional insurance services and risk management solutions. Licensed Direct Broker by IRDA (Licence No. 619)."
        />
        {/* <meta property="og:url" content="/contact" /> */}
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="/assets/images/header/logo.webp"
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Notion Insurance Broker Pvt. Ltd. - IRDA Licensed Expert"
        />
        <meta
          name="twitter:description"
          content="Reach out to Notion Insurance Broker Pvt. Ltd. (IRDA Licence No. 619) for expert insurance services, solutions, and support."
        />
        {/* <meta name="twitter:image" content="/assets/images/header/logo.webp" /> */}
      </Helmet>

      <section className="w-full bg-slate-50/30">
        <div className="px-0 text-center">
          <div className="h-full py-16 bg-[url('/assets/images/contact/contactbg.avif')] w-full bg-cover bg-center flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-primary-blue/5 backdrop-blur-[2px]"></div>
            <div className="relative z-10 px-5 max-w-4xl">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-4 pt-4 !text-3xl lg:!text-5xl font-black font-sora text-gray-900 tracking-tight"
              >
                We&apos;re Here to Help
              </Typography>

              <Typography className="mb-4 px-2 font-semibold text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                Whether you have questions about our services, requesting technical
                assistance, or suggestions for improvement, our team looks forward
                to hearing from you.
              </Typography>
            </div>
          </div>

          <div className="bg-transparent w-full px-5 md:px-8 lg:px-12 xl:px-20 flex flex-col pt-12 overflow-hidden items-center justify-center gap-12">
            {/* Container for Contact Information and Form - order changed on mobile */}
            <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between gap-10 w-full">
              {/* Contact Information block */}
              <div className="py-2 lg:w-1/2 flex flex-col justify-between">
                <div className="text-start mb-6">
                  <Typography variant="h2" color="blue-gray" className="font-black font-sora text-2xl lg:text-3xl text-gray-900 mb-2 tracking-tight">
                    Contact Information
                  </Typography>
                  <p className="text-gray-500 font-semibold text-sm">
                    At Notion Insurance Broker Pvt Ltd, we understand that
                    choosing the right insurance can be overwhelming.
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col gap-6 flex-grow">
                  <Card className="lg:w-1/2 w-full p-0 shadow-none bg-transparent">
                    <CardBody className="flex flex-col h-full items-start p-6 border rounded-[24px] shadow-lg border-slate-100 bg-white hover:shadow-xl transition-shadow duration-300">
                      <div className="w-full">
                        <CardBody className="p-0 text-start w-full">
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="py-3 text-start font-black font-sora text-gray-900 text-lg border-b border-slate-100 mb-4"
                          >
                            Bhopal (Main Branch)
                          </Typography>
                          <ul className="flex flex-col items-start justify-center gap-5">
                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <FaPhoneAlt />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 leading-normal">
                                <Link to="tel:9302182475" className="hover:text-primary-blue transition-colors">91-9302182475</Link>
                                <br />
                                <Link to="tel:755-4911343" className="hover:text-primary-blue transition-colors">
                                  +91 755-4911343
                                </Link>
                              </Typography>
                            </li>
                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <MdEmail />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 leading-normal">
                                <Link to="mailto:info@notioninsurance.com" className="hover:text-primary-blue transition-colors">
                                  info@notioninsurance.com
                                </Link>
                              </Typography>
                            </li>

                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <IoLocation />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 text-justify leading-relaxed">
                                Plot No. 1, 3<sup>rd</sup> Floor Lalwani Complex, Above Axis Bank, Vidya
                                Nagar, Bhopal, Madhya Pradesh 462026
                              </Typography>
                            </li>
                          </ul>
                        </CardBody>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="lg:w-1/2 w-full p-0 shadow-none bg-transparent">
                    <CardBody className="flex flex-col h-full items-start p-6 border rounded-[24px] shadow-lg border-slate-100 bg-white hover:shadow-xl transition-shadow duration-300">
                      <div className="w-full">
                        <CardBody className="p-0 text-start w-full">
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="py-3 text-start font-black font-sora text-gray-900 text-lg border-b border-slate-100 mb-4"
                          >
                            Jabalpur Branch
                          </Typography>
                          <ul className="flex flex-col items-start justify-center gap-5">
                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <FaPhoneAlt />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 leading-normal">
                                <Link to="tel:9827220353" className="hover:text-primary-blue transition-colors">+91 9827220353</Link>
                              </Typography>
                            </li>
                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <MdEmail />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 leading-normal">
                                <Link to="mailto:mkrathod@notioninsurance.com" className="hover:text-primary-blue transition-colors">
                                  mkrathod@notioninsurance.com
                                </Link>
                              </Typography>
                            </li>
                            <li className="flex items-start gap-4">
                              <span className="text-lg text-primary-blue border border-blue-50 p-2.5 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                                <IoLocation />
                              </span>
                              <Typography className="font-semibold text-sm text-gray-700 text-justify leading-relaxed">
                                33, JK Complex, 2<sup>nd</sup> Floor, Gorakhpur, Jabalpur
                              </Typography>
                            </li>
                          </ul>
                        </CardBody>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* Fill Up The Form */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <form
                  onSubmit={handleSubmit} // Attach the submit handler
                  className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10 border border-slate-100 flex-grow flex flex-col gap-5 text-start"
                >
                  <div>
                    <Typography variant="h2" color="blue-gray" className="font-black font-sora text-2xl lg:text-3xl text-gray-900 mb-1 tracking-tight">
                      Fill Up The Form
                    </Typography>
                    <p className="text-gray-500 text-sm font-semibold mb-2">We will get back to you shortly</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Typography
                        variant="small"
                        className="mb-1.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                      >
                        Full Name
                      </Typography>
                      <input
                        className="border border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white rounded-xl w-full py-2.5 px-3.5 text-gray-900 leading-tight focus:outline-none transition-all duration-200 placeholder-gray-400 text-sm font-medium"
                        type="text"
                        id="fullName"
                        required
                        placeholder="Enter Full Name"
                        name="fullName" // Set name attribute for identification
                        value={formData.fullName} // Bind input value to fullName state
                        onChange={handleChange} // Use the general handleChange function
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        className="mb-1.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                      >
                        Mobile No
                      </Typography>
                      <input
                        className="border border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white rounded-xl w-full py-2.5 px-3.5 text-gray-900 leading-tight focus:outline-none transition-all duration-200 placeholder-gray-400 text-sm font-medium"
                        type="tel"
                        id="phoneNumber"
                        placeholder="Enter Mobile Number"
                        required
                        name="phoneNumber" // Set name attribute for identification
                        value={formData.phoneNumber} // Bind input value to mobileNo state
                        onChange={handleChange} // Use the general handleChange function
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        className="mb-1.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                      >
                        Your Email
                      </Typography>
                      <input
                        className="border border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white rounded-xl w-full py-2.5 px-3.5 text-gray-900 leading-tight focus:outline-none transition-all duration-200 placeholder-gray-400 text-sm font-medium"
                        type="email"
                        id="emailAddress"
                        placeholder="Enter Your Email"
                        required
                        name="emailAddress" // Set name attribute for identification
                        value={formData.emailAddress} // Bind input value to email state
                        onChange={handleChange} // Use the general handleChange function
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        className="mb-1.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                      >
                        Your Subject
                      </Typography>
                      <input
                        className="border border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white rounded-xl w-full py-2.5 px-3.5 text-gray-900 leading-tight focus:outline-none transition-all duration-200 placeholder-gray-400 text-sm font-medium"
                        type="text"
                        required
                        id="messageSubject"
                        placeholder="Enter Your Subject"
                        name="messageSubject" // Set name attribute for identification
                        value={formData.messageSubject} // Bind input value to subject state
                        onChange={handleChange} // Use the general handleChange function
                      />
                    </div>
                  </div>

                  <div>
                    <Typography
                      variant="small"
                      className="mb-1.5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Your message
                    </Typography>
                    <textarea
                      rows={4}
                      className="border resize-none border-gray-200 bg-gray-50/50 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white rounded-xl w-full py-2.5 px-3.5 text-gray-900 leading-tight focus:outline-none transition-all duration-200 placeholder-gray-400 text-sm font-medium"
                      type="text"
                      required
                      id="messageDetails"
                      placeholder="Describe your message details here..."
                      name="messageDetails" // Set name attribute for identification
                      value={formData.messageDetails} // Bind input value to subject state
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-accent-orange hover:bg-orange-600 text-white font-black rounded-xl shadow-lg shadow-orange-500/10 cursor-pointer transition-all duration-200 uppercase text-sm select-none"
                  >
                    {loading ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 py-5 mt-10">
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center w-full gap-8">
              <li className="hover:bg-white w-full hover:shadow-2xl md:hover:scale-105 duration-300 border border-slate-100 bg-white/50 rounded-[24px] p-6 text-center hover:-translate-y-1 transition-all">
                <h1 className="text-lg font-black font-sora py-2 text-gray-900">
                  For Information Support
                </h1>
                <Link to="mailto:info@notioninsurance.com" className="group">
                  <div className="grid grid-cols-1 items-center justify-items-center gap-3 mt-3">
                    <span className="text-xl w-fit text-primary-blue border border-blue-50 p-3 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                      <MdEmail />
                    </span>
                    <span className="font-semibold text-sm text-gray-600 group-hover:text-primary-blue transition-colors">
                      info@notioninsurance.com
                    </span>
                  </div>
                </Link>
              </li>

              <li className="hover:bg-white w-full hover:shadow-2xl md:hover:scale-105 duration-300 border border-slate-100 bg-white/50 rounded-[24px] p-6 text-center hover:-translate-y-1 transition-all">
                <h1 className="text-lg font-black font-sora py-2 text-gray-900">
                  Become A POSP Support
                </h1>
                <Link to="mailto:pospsupports@notioninsurance.com" className="group">
                  <div className="grid grid-cols-1 items-center justify-items-center gap-3 mt-3">
                    <span className="text-xl w-fit text-primary-blue border border-blue-50 p-3 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                      <MdEmail />
                    </span>
                    <span className="font-semibold text-sm text-gray-600 group-hover:text-primary-blue transition-colors">
                      pospsupports@notioninsurance.com
                    </span>
                  </div>
                </Link>
              </li>

              <li className="hover:bg-white w-full hover:shadow-2xl md:hover:scale-105 duration-300 border border-slate-100 bg-white/50 rounded-[24px] p-6 text-center hover:-translate-y-1 transition-all">
                <h1 className="text-lg font-black font-sora py-2 text-gray-900">
                  For Claim Support
                </h1>
                <Link to="mailto:claims@notioninsurance.com" className="group">
                  <div className="grid grid-cols-1 items-center justify-items-center gap-3 mt-3">
                    <span className="text-xl w-fit text-primary-blue border border-blue-50 p-3 rounded-full shadow-sm bg-blue-50/50 shrink-0">
                      <MdEmail />
                    </span>
                    <span className="font-semibold text-sm text-gray-600 group-hover:text-primary-blue transition-colors">
                      claims@notioninsurance.com
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 py-5 mt-10">
            {/* Map */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.1539426375944!2d77.44726371271773!3d23.196702225323936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43747f04ada9%3A0x7e9aa8a8f98f0234!2sNOTION%20INSURANCE%20BROKER%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1727776089315!5m2!1sen!2sin"
                width="100%"
                height="350"
                loading="lazy"
                title="Notion Insurance Office Location"
                className="border-none"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </>
  );
}

export default Contact;