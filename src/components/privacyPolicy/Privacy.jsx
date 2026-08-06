import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
const terms = [
    {
      heading: "Notion Insurance Brokers",
      text: "Notion Insurance Brokers’ Privacy Policy describes how we collect, use, maintain and disclose information collected from users (each, a “User”) of the www.Notioninsurancebroker.com website ('Site'). This privacy policy applies to the current and former visitors to our Site, to our online customers and all products and services offered by Notion Insurance Broker. You agree to this privacy policy by visiting and/or using our website."
    },
    {
      heading: "PERSONAL INFORMATION",
      text: "Notion Insurance Broker may collect users' information when Users visit our website, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, etc. Users may, however, visit our Site anonymously. We will collect information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identifying information, except that it may prevent them from engaging in certain site-related activities. We may also collect some other information like type of computer, operating system, browser name, etc."
    },
    {
      heading: "COOKIES",
      text: "To keep record and/or to track information of the user, web browser places cookies on their hard drive. We may use “cookies” to enhance user experience. Users may set their browser to get notifications of cookies or to refuse cookies when they are being sent. If they refuse, it may be possible that our site may not work properly."
    },
    {
      heading: "PROTECTION OF YOUR INFORMATION",
      text: "We employ technical and organizational security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. As we all know that transmission over the internet or electronic storage is not 100% secure. So, we cannot guarantee its absolute security."
    },
    {
      heading: "USE OF COLLECTED INFORMATION",
      text: "Notion Insurance Broker may use Users' information for the following purposes . To respond to customer service requests. To understand how our Users use the services and resources provided on our Site. To improve our products and services; we may use feedback provided by Users. To share some information (other than your personal information) with third-party advertising companies and/or ad agencies to serve ads when you visit our website. To send Users information about promotions, contests, surveys, and other site features. To send emails related to information and updates pertaining to their order. To send periodic emails."
    },
    {
      heading: "INFORMATION SHARING",
      text: "To operate our business and the Site or administer activities, we may use third-party service providers on our behalf. Therefore, we may share your information with these third parties for those limited purposes, provided that you have given us your permission."
    },
    {
      heading: "THIRD PARTY ADVERTISING AND WEBSITES",
      text: "Notion Insurance Broker may use third-party ad agencies or advertising companies to serve ads when you visit our website and/or to serve ads across the internet on our behalf. They may collect information about your visit to the website. There might be other sites and services of insurance companies linked to our site. We do not control the content or links that appear on these sites. So, the information you get from these sites is not our responsibility. They may have different privacy policies and customer service policies."
    },
    {
      heading: "CHANGES TO THIS PRIVACY POLICY",
      text: "Notion Insurance Broker has the discretion to change this privacy policy from time to time. We encourage Users to review this privacy policy periodically. You acknowledge and agree that it is your responsibility to check this page frequently."
    },
    {
      heading: "YOUR ACCEPTANCE",
      text: "By visiting our Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not visit our Site. Your continued use of our Site, following the posting of changes to this policy, will be deemed your acceptance of those changes."
    },
    {
      heading: "Important Note",
      text: "The contents available on this site are for general awareness/knowledge only. The actual canvases depend upon the cover opted for and are subject to the terms and conditions of the policy issued by respective Insurance Companies."
    }
  ];
  
const Privacy = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Term And Conditions - NIB</title>
        <meta
            name="description"
            content="Notion Insurance Broker Pvt. Ltd. (referred to as “Notion”) is a licensed insurance broker firm operating the website www.notioninsurance.com. We connect clients with comprehensive insurance solutions tailored to meet their needs."
        />
        <meta
            name="keywords"
            content="Term And Condition, NIB Term And Condition, Notion Insurance Broker Term And Condition, term tnd condition, term & tondition nib,  "
        />
        <link rel="canonical" href="https://www.notioninsurance.com/terms-conditions" />
    </Helmet>

    <div>
        <Card className="mt-6 shadow-none md:px-10 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
            <CardBody className="px-1">

                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 py-2 text-center"
                >
                   Privacy And  Policy 
                </Typography>
                {/* <Typography
                    variant="p"
                    color="blue-gray"
                    className="mb-2 pb-5 text-center"
                >
                    Notion Insurance Broker Pvt. Ltd. (referred to as “Notion”) operates the website (the “Site”) www.notioninsurance.com. Notion is not an insurance company; it is an Insurance Broker Firm licensed by the Indian Insurance Regulator – Insurance Regulatory and Development Authority of India (IRDAI), IRDAI DIRECT BROKER CODE: IRDAI/DB693/17. We provide insurance solutions to our clients in both corporate and retail segments.
                </Typography> */}
                {terms.map((term, index) => (
                    <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
                        <CardBody>
                            <ul className="list-none text-justify hyphens-auto leading-relaxed adjusted-spacing text-md">

                                <li key={index}>
                                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 py-2 text-center"
                >
                   <span className="font-semibold text-xl">{term.heading}</span> 
                </Typography>
                                    <Typography>
                                        {term.text}
                                    </Typography>
                                </li>

                            </ul>
                        </CardBody>
                    </Card>
                ))}
            </CardBody>
        </Card>


    
        
        <br /> <br />
    </div>
</>
  )
}

export default Privacy