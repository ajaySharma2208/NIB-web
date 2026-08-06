import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import TableComponent from "./RelativeComponents/TableComponent";
import InsuranceCard from "./RelativeComponents/InsuranceCard";
import ImageTextCard from "./RelativeComponents/ImageText";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = [
  "Feature/Type",
  "Comprehensive Insurance",
  "Third-party Insurance",
  "Own Damage Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Coverage",
    comprehensive:
      "Own-Damage, Third-Party Liabilities,Theft, Fire, Natural,Calamities",
    thirdParty: "Third-Party Liabilities",
    ownDamage: "Own-Damage, Third-Party Liabilities,Theft, Fire",
  },
  {
    point: "Add-Ons Availability",
    comprehensive: "yes",
    thirdParty: "No",
    ownDamage: "Limited",
  },
  {
    point: "Premium",
    comprehensive: "High",
    thirdParty: "Low",
    ownDamage: "Moderated",
  },
  {
    point: "Legal Compliance (in India)",
    comprehensive: "yes",
    thirdParty: "No",
    ownDamage: "Limited",
  },
  // Add more rows as needed
];

// Define column widths as Tailwind CSS classes
const COLUMN_WIDTHS = [
  "w-5", // 25% width for Point of Difference
  "w-20", // 40% width for Comprehensive Insurance
  "w-20", // 40% width for Third-party Insurance
  "w-20", // 20% width for Own Damage Insurance
];
const TwoWheelerInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.webp", // Replace with actual image URLs
      insurerName: "Bike Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "https://www.ilgi.co/B16EE338DD",
    },
  ];
  const insurancetypes = [
    {
      name: "Comprehensive Bike Insurance",
      description:
        "This type of insurance policy is the most preferred cover by the car owners. It provides financial support to pay for the damages caused to the own vehicle & the third-party. As the name suggests, this type of insurance provides comprehensive cover.",
    },
    {
      name: "Own-Damage Bike Insurance",
      description:
        "The standalone own-damage two-wheeler insurance policy gives coverage for the damages sustained by the insured bike due to an accident, theft, fire, natural disaster and man-made calamity. A standalone own-damage policy provides flexibility to policyholders for choosing an insurance company of their choice. The policyholders can buy a third-party policy and own-damage policy either from the same insurer or a different one. An insured individual can expand the coverage of a own-damage insurance policy by buying add-on covers.",
    },
    {
      name: "Third Party Bike Insurance",
      description:
        "It is compulsory for bike riders to have a third-party two-wheeler insurance plan for their two-wheelers. It is also known as liability-only policy which covers physical injuries, temporary or permanent disability, and death of the third party person due to an accident or a mishap. This motorcycle or scooter insurance policy also covers the property damage expenses sustained by the third party up to Rs. 1 Lakh, but does not cover damages to your own bike.",
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Two-Wheeler Insurance - Notion Insurance Broker Pvt. Ltd.</title>
          <meta
            name="description"
            content="Get comprehensive two-wheeler insurance from Notion Insurance Broker Pvt. Ltd. Safeguard your bike or scooter with extensive coverage against accidents, theft, and damage. Enjoy peace of mind on every ride."
          />
          <meta
            name="keywords"
            content="two-wheeler insurance, bike insurance, scooter insurance, NIB two-wheeler insurance, Notion Insurance Broker two-wheeler insurance, two-wheeler insurance coverage, bike accident insurance, scooter theft protection, two-wheeler damage coverage, motorcycle insurance policies"
          />
          <link
            rel="canonical"
            href="https://www.notioninsurance.com/two-wheeler-insurance"
          />
        </Helmet>

        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Bike Insurance Plans
            </Typography>

            <div className="mt-4 grid w-full px-6   grid-cols-1  gap-4">
              {insuranceOptions.map((option, index) => (
                <InsuranceCard key={index} {...option} />
              ))}
            </div>
            <br />

            <div>
            <ImageTextCard
                heading="A Guide to Bike Insurance"
                subheading="Know all about Two Wheeler Insurance - Definition, Importance, Types of Bike Insurance"
                imageSrc="assets/images/Products/bike-insurance.webp"
                altText="Bike"
                description="Bike insurance, also known as two-wheeler insurance, is a type of insurance policy that provides financial aid to you against the losses incurred to your bike & third-party property/life due to unforeseen events like accidents, natural & man-made disasters, fire, loss, etc. It is mandatory for all bike owners to have at least a third-party bike insurance policy in India. There are three kinds of two-wheeler insurance plans available in the market namely third-party bike insurance, standalone own-damage (OD) insurance, and comprehensive cover for bikes. "
              />
            </div>
            <br />
            <InsuranceTypes
              title="Types of Two Wheeler Insurance"
              description="There are 3 types of bike insurance policy in India and Notion Insurance offers all of them."
              insuranceOptions={insurancetypes}
            />
            <br />
            <div className="div pt-5">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Third-Party Vs Comprehensive Bike Insurance
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

export default TwoWheelerInsurance;
