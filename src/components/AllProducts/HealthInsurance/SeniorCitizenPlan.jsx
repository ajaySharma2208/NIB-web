import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = ["Points", "Description"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Targeted Health Coverage",
    description:
      "Specifically crafted to cover a variety of health issues prevalent among senior citizens, such as chronic diseases, surgeries, and rehabilitation.",
  },
  {
    point: "Pre-existing Condition Coverage",
    description:
      "Many plans allow for coverage of pre-existing conditions after a defined waiting period, providing essential support for those with ongoing health issues.",
  },
  {
    point: "Home Healthcare Services",
    description:
      "Offers coverage for medical treatments and assistance provided at home, ensuring comfort and convenience for elderly individuals.",
  },
  {
    point: "Daily Hospital Cash Allowance",
    description:
      "Provides a daily cash benefit for hospitalization, helping cover incidental expenses during the hospital stay.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const SeniorCitizenPlan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Senior Citizen Plan - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Ensure quality healthcare for seniors with the Senior Citizen Health Insurance Plan from Notion Insurance Broker Pvt. Ltd. Our policy covers medical expenses, hospitalization, and specialized care for elderly individuals, providing peace of mind in their golden years."
        />
        <meta
          name="keywords"
          content="Senior Citizen Health Insurance, NIB Senior Health Plan, Notion Insurance Broker Senior Plan, health insurance for seniors, medical coverage for elderly, senior citizen hospitalization insurance, elderly healthcare, retirement health plans, specialized care for seniors"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/senior-citizen-plan" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Senior Citizen Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Senior Citizen Plan" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 ">
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  A Guide to Senior Citizen Plan
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  The Senior Citizen Plan provides health insurance tailored to
                  the needs of older adults. As people age, their healthcare
                  requirements often become more complex, and this plan
                  addresses common health issues faced by seniors, ensuring they
                  receive necessary medical attention without significant
                  financial stress.
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
                Key Features of Senior Citizen Plan
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

export default SeniorCitizenPlan;
