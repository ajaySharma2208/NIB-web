import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";

const terms = [
    {
        "heading": "Service Description",
        "text": "Notion provides you with access to information regarding financial and insurance products and services on our website. There may be links to other insurance companies' sites that also provide related information. We do not control the content or links that appear on these sites, so the information you obtain from them is not our responsibility. Notion does not guarantee the accuracy, completeness, timeliness, or quality of results obtained from the use of the website. We disclaim all liability for any errors or inaccuracies arising from the website information and recommendations. By using the site, you agree to accept and adhere to the terms of this User Agreement and applicable laws. Notion Insurance Broker reserves the right to change this User Agreement at any time, and we encourage users to review it periodically."
    },
    {
        "heading": "Site Access",
        "text": "Before purchasing any product through our website, please review all information supplied. You are solely responsible for your final product choice. If you have any doubts, seek further advice from Notion or the relevant service provider. If you apply to purchase a product through our website, Notion may pass your information to the relevant service provider. We do not accept liability for delays related to the products you choose. By using the site, you agree not to access, monitor, or copy any content or information using automated means unless authorized by Notion Insurance Broker Pvt. Ltd. You also agree not to use this site or its contents for any commercial purpose."
    },
    {
        "heading": "Your Account",
        "text": "By using the Site, you confirm that you are legally eligible to enter into a binding contract and will only use the Site to make legitimate purchases for yourself or another person for whom you are authorized to act. You agree that any information you provide will always be accurate, correct, and up to date. You must keep your login information confidential and are solely responsible for all activities related to your account and password. We reserve the right to refuse service, terminate accounts, or remove or edit content at any time and for any reason in our sole discretion."
    },
    {
        "heading": "Privacy Policy",
        "text": "Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect and manage your information."
    },
    {
        "heading": "Claims Services",
        "text": "Notion Insurance Broker Pvt. Ltd. is only an insurance broker and can assist with completing necessary documentation and coordinating with the loss adjuster, the insurance company, and tradesmen for repairs. Any insurance claim will be processed by the insurance company according to their terms and conditions. Notion is not liable for any payment obligations related to claims and/or repairs, which are your responsibility. Saturdays, Sundays, and public holidays are not considered working days. Any timelines are subject to external factors and force majeure. Notion is not liable for delays regarding policy issuance, repairs, or any related issues. By using our services, you authorize Notion to contact you via calls, SMS, emails, and other modes of communication."
    },
    {
        "heading": "Governing Law",
        "text": "This website is controlled and operated by Notion Insurance Broker Pvt. Ltd. from its head office located in the state of Madhya Pradesh, India. It can be accessed worldwide. By using the Site from other locations, you are responsible for compliance with applicable local statutes and laws, including but not limited to the export and import regulations of other countries. Any action to enforce this User Agreement shall be brought in the federal or state courts located in Madhya Pradesh, India. You hereby agree to personal jurisdiction by such courts and waive any jurisdictional, venue, or inconvenient forum objections."
    },
    {
        "heading": "Important Note",
        "text": "The contents available on this site are for general awareness only. Actual coverage depends on the policy issued by respective insurance companies."
    },
    {
        "heading": "Content Submitted",
        "text": "The Notion website may provide various open communication tools, such as public chats, message boards, and forums. By using these tools to submit content, you are solely responsible for what you share. You agree not to post or distribute illegal, abusive, harassing, threatening, or otherwise inappropriate content. We reserve the right to remove any content that does not comply with this User Agreement. Any content you submit becomes the property of Notion Insurance Broker Pvt. Ltd., and you grant us a perpetual, irrevocable license to use it."
    },
    {
        "heading": "Liability and Warranties",
        "text": "We do not guarantee that the resources, content, products, and services published on this site will meet your needs. There may be inaccuracies or errors, including pricing errors. We reserve the right to correct any pricing errors. You agree to indemnify Notion Insurance Broker Pvt. Ltd. from any claims arising from your breach of this User Agreement or violation of any laws."
    },
    {
        "heading": "Termination of Use",
        "text": "We reserve the right to refuse service, terminate accounts, or deny access to anyone at any time without notice. Fraudulent or suspected illegal activities may result in termination and referral to law enforcement authorities."
    },
    {
        "heading": "Copyrights/Trademarks",
        "text": "The trademarks, logos, content, materials, and service marks displayed on the Notion website are the intellectual property of Notion Insurance Broker Pvt. Ltd. Unauthorized use of any content on this site is strictly prohibited unless specifically authorized by us."
    }
];

const TermAndConditions = () => {
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
                            Terms and Conditions
                        </Typography>
                        <Typography
                            variant="p"
                            color="blue-gray"
                            className="mb-2 pb-5 text-center"
                        >
                            Notion Insurance Broker Pvt. Ltd. (referred to as “Notion”) operates the website (the “Site”) www.notioninsurance.com. Notion is not an insurance company; it is an Insurance Broker Firm licensed by the Indian Insurance Regulator – Insurance Regulatory and Development Authority of India (IRDAI), IRDAI DIRECT BROKER CODE: IRDAI/DB693/17. We provide insurance solutions to our clients in both corporate and retail segments.
                        </Typography>
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

<Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
                                <CardBody>
                                    <ul className="list-none text-justify hyphens-auto leading-relaxed adjusted-spacing text-md">

                                        <li>
                                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2 py-2 text-center"
                        >
                           <span className="font-semibold text-xl"> Important Note</span> 
                        </Typography>
                                            <Typography>
                                           The contents available on this site is for General awareness/Knowledge only. The actual canvases depend upon the cover opted for and subject to terms and condition of the policy issued by respective Insurance Companies.
                                            </Typography>
                                        </li>

                                    </ul>
                                </CardBody>
                            </Card>
                    </CardBody>
                </Card>


            
                
                <br /> <br />
            </div>
        </>
    );
};

export default TermAndConditions;
