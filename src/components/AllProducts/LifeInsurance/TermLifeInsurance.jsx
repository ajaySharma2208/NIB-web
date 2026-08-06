import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = ["Point of Difference", "Individual Insurance"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Fixed Premium Payments:",
    details:
      "Premiums remain unchanged throughout the policy term, offering cost stability regardless of changes in age or health.",
  },
  {
    point: "Fixed Term",
    details:
      "Coverage is provided for a specific period (e.g., 10, 20, or 30 years), with benefits paid if death occurs during this time.",
  },
  {
    point: "Death Benefit Payout:",
    details:
      "If the insured dies within the policy term, the death benefit is paid to beneficiaries, offering financial support.",
  },
  {
    point: "No Cash Value:",
    details:
      "Term insurance doesn't accumulate cash value; it purely provides protection without any investment growth.",
  },
  {
    point: "Renewable/Convertible Options:",
    details:
      "Some policies allow renewal or conversion to permanent life insurance without requiring new medical evaluations.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const TermLifeInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Term Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get affordable term insurance from Notion Insurance Broker Pvt. Ltd. Our policies offer financial protection for your loved ones in case of unforeseen events, ensuring peace of mind at an economical price."
        />
        <meta
          name="keywords"
          content="term insurance, NIB term insurance, Notion Insurance Broker term insurance, life coverage, financial protection, affordable insurance, insurance plans, temporary life insurance, risk management, family security"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/term-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Term Life Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Term Life Insurance" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Term Life Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Term Life Insurance provides financial protection for a
                  specified period (term) in exchange for premiums. If the
                  policyholder dies during the term, the insurance company pays
                  a death benefit to beneficiaries.
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
                Advantages of Having Term Life Insurance
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

export default TermLifeInsurance;
