import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";

const DirectorOfficersInsurance = () => {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Directors and officers (D&O) Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your leadership team with comprehensive D&O Insurance from Notion Insurance Broker Pvt. Ltd. Our policies safeguard directors and officers from financial losses due to legal claims, ensuring peace of mind and robust corporate governance."
        />
        <meta
          name="keywords"
          content="D&O insurance, Directors and Officers insurance, NIB D&O insurance, corporate insurance, executive protection, legal defense coverage, fiduciary duty protection, financial security, risk management, liability insurance"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/director-officers-insurance" />
      </Helmet>
      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Directors and officers Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Director & Officers Plan" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Directors and officers Insurance
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  Directors and Officers (D&O) Insurance provides crucial
                  protection for corporate leaders, safeguarding them from
                  financial losses arising from legal actions alleging wrongful
                  acts, negligence, or breaches of fiduciary duty. In today's
                  complex business landscape, executives face increasing
                  scrutiny, and even well-intentioned decisions can lead to
                  litigation. This insurance covers defense costs, settlements,
                  and judgments, ensuring that directors and officers can focus
                  on their leadership roles without the looming fear of personal
                  financial liability. By investing in D&O Insurance,
                  organizations not only protect their key decision-makers but
                  also enhance their overall corporate governance, instilling
                  confidence among stakeholders and promoting responsible
                  management practices.
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

export default DirectorOfficersInsurance;
