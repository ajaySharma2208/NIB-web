import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const LINKS = [
  {
    title: "Licence",
    items: [
      { text: "Licence No. 619", url: "/" },
      { text: "IRDA Direct Broker Code: IRDA/ DB 693/17", url: "/" },
      { text: "Valid till: 02/10/2026", url: "/" },
      { text: "CIN: U66010MP2016PTC041677", url: "/" },
    ],
  },
  
  {
    title: "Our Links",
    items: [
      { text: "Home", url: "/" },
      // { text: "Insurance", url: "/" },
      { text: "About Us", url: "/about-us" },
      { text: "Our Partners", url: "/our-partners" },
      { text: "Contact Us", url: "/contact" },
    ],
  }, 
  
  {
    title: "Legal and Admin Policies",
    items: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms & Conditions", url: "/terms-conditions" },
      { text: "FAQ's", url: "/frequently-ask-question" },
      
      { text: "Career", url: "/" },
    ],
  },
 
 
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-1 relative footer-img w-full  bg-cover bg-center ">
      <div className="w-full ">
        <div className="flex justify-center flex-col lg:flex-row gap-6 items-center px-5 md:px-8 lg:px-12 xl:px-20">
          <Typography className="md:w-60 my-5 px-3 justify-center items-center flex flex-col ">
            <img loading="lazy" src="/assets/images/header/logo.webp" className="h-full w-full" alt="NIB" />
            <p className="text-black font-medium text-sm  mb-2">
            Notion Insurance Broker Pvt. Ltd. delivers customized insurance solutions designed to meet the diverse needs of businesses and individuals. 
            </p>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:justify-center lg:grid-cols-4 gap-4 px-4  lg:justify-center ">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h5"
                  className="mb-3  max-w-max text-black opacity-90"
                >
                  {title}
                </Typography>
                {items.map(({ text, url }) => (
                  
                  <li key={text}>
                    {/* <div className="div flex justify-center items-center"> */}
                    <Typography
                      as="a"
                      // href={url}
                      className="py-1.5 text-sm  transition-colors font-medium text-gray-900 hover:text-blue-gray-900"
                    >
                      <Link to={url}> {text} </Link>
                    </Typography>
                    {/* </div> */}
                  </li>
                ))}
              </ul>
            ))}
            <div className=" text-left ">
              <Typography
                variant="h5"
                className="mb-3 max-w-max text-black opacity-90"
              >
                Get In Touch
              </Typography>
           
             <div className="flex py-2 gap-3 text-blue-gray-900 ">
              
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaLinkedin onClick={() => window.open("https://www.linkedin.com/company/notion-insurance-broker-pvt-ltd/", "_blank", "noopener,noreferrer")} className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
               <FaInstagram onClick={() => window.open("https://www.instagram.com/notioninsurance?igsh=anBoZzJhc2Z0MThh", "_blank", "noopener,noreferrer")} className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
              <FaTwitter onClick={() => window.open("https://x.com/notioninsurance?t=p-h_nrvLBRe6HwVi5gJsKQ&s=08", "_blank", "noopener,noreferrer")} className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaYoutube onClick={() => window.open("https://www.youtube.com/@NotionInsuranceBroker", "_blank", "noopener,noreferrer")} className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaFacebook onClick={() => window.open("https://www.facebook.com/share/LpwfZYU4eNwZ9W4a/", "_blank", "noopener,noreferrer")} className="text-xl" />
              </Typography>
            </div>
            </div>
          </div>
        </div>

        {/* <div className=" flex items-center justify-center w-full border-t bg-gray-700 py-2 ">
          <Typography
            variant="small"
            className=" text-center font-normal text-blue-gray-100 md:mb-0"
          >
            &copy; {currentYear} <a href="/"> Notion Insurance Broker</a>. All
            Rights Reserved.
          </Typography>
        </div> */}

        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t bg-gray-700 px-5 md:px-8 lg:px-12 xl:px-20 py-3">
          <Typography
            variant="small"
            className="text-center font-normal text-blue-gray-100 mb-2 md:mb-0"
          >
            &copy; {currentYear} <a href="/" className="hover:text-blue-200">Notion Insurance Broker</a>. All Rights Reserved.
          </Typography>
          
          <Typography
            variant="small"
            className="text-center font-normal text-gray-300"
          >
            Developed by{" "}
            <a 
              href="https://www.technovani.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors"
            >
              TechnoVani Pvt. Ltd.
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
