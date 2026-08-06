import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = ["Points", "Description"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Life Coverage",
    description:
      " Provides comprehensive life insurance coverage throughout the policy term, ensuring financial security for your loved ones.",
  },
  {
    point: "Survival Benefits",
    description:
      "Policyholders receive periodic payouts at specified intervals, offering financial support for ongoing needs, such as education, medical expenses, or investments.",
  },
  {
    point: "Full Death Benefit",
    description:
      "In the event of the policyholder's death during the policy term, beneficiaries receive the full sum assured, ensuring that no survival benefits are deducted.",
  },
  {
    point: "Tax Benefits",
    description:
      "Premiums paid for the policy are tax-deductible under Section 80C of the Income Tax Act, 1961, allowing policyholders to save on taxes while securing their future.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const MoneyBackPolicy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Money Back Policy - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Secure your financial future with our Money Back Policy at Notion Insurance Broker Pvt. Ltd. Enjoy life coverage along with periodic survival benefits during the policy term, ensuring your family's protection and your peace of mind."
        />
        <meta
          name="keywords"
          content="Money Back Policy, NIB Money Back Policy, Notion Insurance Broker Money Back Policy, life insurance, survival benefits, financial security, tax benefits, full sum assured, policyholder protection, insurance plans"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/money-back-policy" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Money Back Policy Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Money Back Policy" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Money Back Policy
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  A money-back policy is a unique life insurance product
                  designed to provide both life coverage and financial support
                  during the policy term. It ensures that policyholders receive
                  regular payouts, known as survival benefits, at specified
                  intervals throughout the duration of the policy. This
                  structure not only offers a safety net for loved ones in the
                  event of the policyholder&apos;s death but also helps
                  individuals manage their financial goals and obligations
                  during their lifetime. In the unfortunate event of the
                  policyholder&apos;s demise within the policy term, the
                  beneficiaries receive the full sum assured without any
                  deductions for previously paid survival benefits, along with
                  any applicable bonuses. Additionally, premiums paid towards
                  this policy qualify for tax deductions under Section 80C of
                  the Income Tax Act, 1961, making it a financially savvy choice
                  for securing one&apos;s future.
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
                Key Features of Money Back Policy
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

export default MoneyBackPolicy;
