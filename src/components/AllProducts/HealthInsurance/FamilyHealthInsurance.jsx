import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = [
  "Point of Difference",
  "Individual Insurance",
  "Family Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Coverage Scope",
    individual:
      "Provides coverage for a single person. The benefits, such as hospitalization, treatment, and other medical expenses, are specific to the individual insured under the policy.",
    family:
      "Covers multiple family members under a single plan. The sum insured is shared among all covered family members, offering protection for spouses, children, and sometimes parents.",
  },
  {
    point: "Premium Cost",
    individual:
      "The premium is generally lower since it covers just one person. The cost is determined by factors like age, health condition, and coverage needs of the individual.",
    family:
      "The premium is higher as it offers coverage to multiple individuals. However, family plans are often more cost-effective than buying individual policies for each family member.",
  },
  {
    point: "Sum Insured",
    individual:
      "The sum insured is solely for the individual, ensuring that the full amount can be used if needed. There's no sharing of benefits.",
    family:
      "The sum insured is shared among all covered family members, which means if one member uses a large portion, the remaining amount may be lower for others.",
  },
  {
    point: " Flexibility and Renewals",
    individual:
      "Provides flexibility in choosing specific coverage based on the individual’s health requirements. Each policy is renewed independently.",
    family:
      "Offers a more streamlined renewal process since one policy covers multiple members. However, as the age of the oldest member increases, the premium for the entire family may rise.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[30vw]", // 40% width for Third-party Insurance
  "w-[30vw]", // 40% width for Third-party Insurance
];
const FamilyHealthInsurance = () => {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Family Health Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your family's health with comprehensive family health insurance from Notion Insurance Broker Pvt. Ltd. Our policies offer coverage for medical expenses, hospitalization, and preventive care, ensuring your loved ones have access to quality healthcare."
        />
        <meta
          name="keywords"
          content="family health insurance, NIB family health insurance, Notion Insurance Broker family health insurance, family medical coverage, health insurance plans, family protection, hospitalization coverage, preventive health care, affordable family health plans"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/family-health-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Family Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Family Insurance" />
            </div>
            
            <div className="div pt-2">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Individual Insurance Vs Family Insurance
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

export default FamilyHealthInsurance;
