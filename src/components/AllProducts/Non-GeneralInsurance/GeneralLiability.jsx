import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
const GeneralLiability = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>General Liability Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your business from unforeseen risks with comprehensive general liability insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover third-party bodily injury, property damage, and personal injury claims, ensuring your business is safeguarded."
        />
        <meta
          name="keywords"
          content="general liability insurance, NIB general liability insurance, Notion Insurance Broker general liability insurance, business liability coverage, third-party insurance, property damage insurance, bodily injury insurance, business protection, commercial liability insurance"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/general-liability-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top General Liability Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="General Liability Plan" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to General Liability Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  General Liability Insurance serves as a vital safeguard for
                  businesses by providing financial protection against various
                  unforeseen incidents. This insurance covers expenses arising
                  from accidents, injuries, or property damage that may occur on
                  the business premises or as a result of business operations.
                  By mitigating potential financial losses, it allows businesses
                  to operate with greater peace of mind, ensuring they are
                  prepared for unexpected legal claims.
                  <br />
                  This coverage is essential for maintaining a positive
                  reputation and financial stability, ultimately enabling
                  businesses to focus on growth and success without the constant
                  worry of liability risks.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default GeneralLiability;
