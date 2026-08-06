import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";


const ULPInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ULIP Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore flexible ULIP insurance plans from Notion Insurance Broker Pvt. Ltd. Our policies combine life coverage with investment options, providing financial security for your loved ones while helping you grow your wealth."
        />
        <meta
          name="keywords"
          content="ULIP insurance, NIB ULIP insurance, Notion Insurance Broker ULIP, unit linked insurance plans, investment insurance, life coverage, financial protection, wealth creation, dual benefit insurance, secure future"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/ulip-insurance" />
      </Helmet>
      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Unit Linked Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="ULIP Insurance" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Unit Linked Insurance Plan
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  A ULIP (Unit Linked Insurance Plan) is a type of insurance
                  policy that provides both life insurance coverage and
                  investment opportunities. With a ULIP, part of the premium you
                  pay goes towards life insurance, while the other part is
                  invested in various funds, such as bond, debt, or equity
                  funds. It&apos;s important to note that the investment
                  component is subject to market risks, meaning the value of
                  your investment can fluctuate based on market conditions.
                  <br />
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ULPInsurance;
