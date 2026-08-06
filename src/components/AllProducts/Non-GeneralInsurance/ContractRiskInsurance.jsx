import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";

const TABLE_HEADERS_PAGE_1 = ["Points", "Description"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Contract Works Coverage",
    description:
      "Protects the insured from any damage to the property under construction. This includes protection against natural disasters, fire, or theft, ensuring the project's progress continues.",
  },
  {
    point: "Machinery and Equipment Coverage",
    description:
      "Provides coverage for damage or loss of machinery and equipment used in the construction project, including protection from operational risks, fire, and natural disasters.",
  },
  {
    point: "Third-Party Liability Coverage",
    description:
      "Covers claims arising from third-party bodily injury or property damage due to construction activities, protecting the insured from costly legal liabilities.",
  },
  {
    point: "Business Interruption Coverage",
    description:
      "Offers financial compensation for delays or interruptions in construction due to unforeseen events, helping businesses manage operational costs and delays.",
  },
  {
    point: "Additional Costs Coverage",
    description:
      "Covers extra expenses such as expediting costs, architects' or engineers' fees, incurred due to insured risks affecting the progress of the construction project.",
  },
  {
    point: "Professional Fees Coverage",
    description:
      "Reimburses fees paid to architects, engineers, and consultants involved in the construction project when their services are impacted by covered losses.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const ContractRiskInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contractor All Risk Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your construction projects with Contractor All Risk Insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover contract works, machinery, equipment, and third-party liabilities, ensuring comprehensive coverage against potential risks during construction."
        />
        <meta
          name="keywords"
          content="Contractor All Risk Insurance, NIB Contractor All Risk Insurance, Notion Insurance Broker Contractor All Risk Insurance, construction insurance, contract works coverage, machinery insurance, third-party liability insurance, construction risk management, business protection in construction"
        />
        <link
          rel="canonical"
          href="https://www.notioninsurance.com/contractor-risk-insurance"
        />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Contractor All Risk Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Contractor All Risk Plan" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Contractor All Risk Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Contractor All Risk Insurance is a comprehensive policy
                  designed to protect contractors and their operations from
                  physical loss or damage during construction projects. This
                  insurance covers a wide range of risks related to contract
                  works, machinery, equipment, and potential liabilities. It
                  ensures that contractors can complete their projects without
                  significant financial setbacks, safeguarding both the project
                  itself and the business from unforeseen events.
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
                Key Features of Contractor All Risk Insurance
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

export default ContractRiskInsurance;
