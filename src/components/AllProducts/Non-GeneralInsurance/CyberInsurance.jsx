import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
const TABLE_HEADERS_PAGE_1 = ["Point of Difference", "Individual Insurance"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Data Breach Coverage",
    details:
      "Covers costs associated with data breaches, including customer notifications, legal fees, and credit monitoring to minimize reputational damage.",
  },
  {
    point: "Cyber-Attack Coverage",
    details:
      "Protects against financial losses from malware and ransomware attacks, covering recovery costs and damage to systems.",
  },
  {
    point: "Network Security Coverage",
    details:
      "Shields businesses from liabilities due to unauthorized access and data theft, addressing legal claims related to security failures.",
  },
  {
    point: "Privacy Liability Coverage",
    details:
      "Covers legal liabilities for unauthorized disclosure of personal data, including legal fees and settlements arising from privacy violations.",
  },
  {
    point: "Business Interruption Coverage",
    details:
      "Compensates for lost income during operational disruptions due to cyber incidents, maintaining financial stability while recovering.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const CyberInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cyber Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your business from cyber threats with comprehensive cyber insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover data breaches, cyber-attacks, and liability, ensuring your business is secure in the digital landscape."
        />
        <meta
          name="keywords"
          content="cyber insurance, NIB cyber insurance, Notion Insurance Broker cyber insurance, data breach insurance, cyber attack coverage, liability insurance, digital security insurance, risk management, business protection from cyber threats"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/cyber-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Cyber Insurance Plans
            </Typography>{" "}
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Cyber Insurance" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Cyber Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Cyber Insurance, often referred to as Cyber Liability
                  Insurance, is an essential tool for businesses in today's
                  digital landscape. It provides financial protection against
                  the devastating consequences of cyber-attacks, data breaches,
                  and various cyber-related risks that can jeopardize operations
                  and reputation.
                  <br />
                  This type of insurance covers costs associated with data
                  recovery, legal fees, notification expenses, and potential
                  liabilities stemming from compromised customer information. By
                  investing in Cyber Insurance, businesses can mitigate the
                  financial impact of cyber incidents, ensuring they are better
                  equipped to respond to threats while safeguarding their assets
                  and maintaining customer trust in an increasingly
                  interconnected world.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <div className="div">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Advantages of Having Cyber Insurance
              </Typography>
              <TableComponent
                headers={TABLE_HEADERS_PAGE_1}
                rows={TABLE_ROWS_PAGE_1}
                columnWidths={COLUMN_WIDTHS}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CyberInsurance;
