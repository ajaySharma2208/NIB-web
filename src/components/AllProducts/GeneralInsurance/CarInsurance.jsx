import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TabPanel,
  CardHeader,
} from "@material-tailwind/react";
import Header from "../../Header";
import TableComponent from "./RelativeComponents/TableComponent";
import { Link } from "react-router-dom";
import InsuranceCard from "./RelativeComponents/InsuranceCard";
import ImageTextCard from "./RelativeComponents/ImageText";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";
import { Helmet } from "react-helmet-async";



const TABLE_HEADERS_PAGE_1 = [
  "Point of Difference",
  "Comprehensive Insurance",
  "Third-party Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Definition",
    comprehensive:
      "A comprehensive coverage provides complete protection for your car as well as third-party liabilities",
    thirdParty:
      "A comprehensive coverage provides complete protection for your car as well as third-party liabilities",
  },
  {
    point: "Coverage",
    comprehensive:
      "It covers the financial loss to the insured car and a third-party",
    thirdParty:
      "It provides financial compensation if there is a damage to a third-party",
  },
  {
    point: "Legal Requirement",
    comprehensive: "No, this type of policy is not legally required",
    thirdParty:
      "As per the Motor Vehicles Act of 1988, this type of policy is a mandatory requirement",
  },
  {
    point: "Cost",
    comprehensive: "As it offers more coverage, it is generally costlier",
    thirdParty: "It is more affordable as compared to a comprehensive plan",
  },
  {
    point: "Exclusions",
    comprehensive:
      "Any damage to the insured car or a third-party is not covered if you are driving under the influence of alcohol or drugs",
    thirdParty: "Any damage to the vehicle is not covered",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]",
  "w-[30vw]", // 40% width for Third-party Insurance
  "w-[30vw]",// 40% width for Third-party Insurance
];
const CarInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.webp", // Replace with actual image URLs
      insurerName: "Car Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "https://www.ilgi.co/D2DBB68FAE",
    },
  ];
  const insurancetypes = [
    {
      name: "Comprehensive Car Insurance",
      description:
        "This type of insurance policy is the most preferred cover by the car owners. It provides financial support to pay for the damages caused to the own vehicle & the third-party. As the name suggests, this type of insurance provides comprehensive cover.",
    },
    {
      name: "Third-party Car Insurance",
      description:
        "Third-party four-wheeler insurance policy is a mandatory requirement for driving a car in India. Under this cover, the insurance company is liable to pay for the injuries, permanent disability, temporary disability, and death of the third party caused by an accident involving the insured car. This plan also provides coverage for property damage incurred by the third party up to Rs. 7.5 Lakh.",
    },
    {
      name: "Own Damage Car Insurance",
      description:
        "In September 2019, the Insurance Regulatory and Development Authority of India (IRDAI) introduced the Standalone Own-Damage car insurance policy. Under this plan, the insured gets insurance coverage only for the damages sustained by their four-wheeler/car in a road accident, natural/man-made calamity, fire, explosion, theft or any other mishap.",
    },
  ];
  return (
    <>
      <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>Car Insurance - Notion Insurance Broker PVT. LTD.</title>
  <meta
    name="description"
    content="Protect your vehicle with comprehensive car insurance from Notion Insurance Broker Pvt. Ltd. Our car insurance policies provide extensive coverage, ensuring financial security in case of accidents, theft, or damage."
  />
  <meta
    name="keywords"
    content="car insurance, vehicle insurance, NIB car insurance, Notion Insurance Broker car insurance, car insurance coverage, auto insurance, accident coverage, theft protection, vehicle damage insurance, car insurance policies"
  />
        <link rel="canonical" href="https://www.notioninsurance.com/car-insurance" />

</Helmet>

        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Car Insurance Plans
            </Typography>

            <div className="mt-4 grid w-full md:px-10 grid-cols-1  gap-4">
              {insuranceOptions.map((option, index) => (
                <InsuranceCard key={index} {...option} />
              ))}
            </div>
            <br />

            <div>
              <ImageTextCard
                heading="A Guide to Car Insurance"
                subheading=" Get car insurance & protect your vehicle & yourself."
                imageSrc="assets/images/Products/car-insurance.webp"
                altText="Nexon Car"
                description="Car insurance, also referred as Motor or Four-wheeler insurance, is a type of agreement between a car owner and an insurance provider. This contract provides financial protection to the vehicle if the vehicle suffers any damage or loss due to expected events like accidents & natural disasters. 
        A motor insurance holds more significance than just being a piece of paper to keep in the car's dashboard and show traffic officials when necessary. This insurance policy gives financial protection to the damages of your vehicle caused in an accident or theft.No matter how careful you are while driving, accidents can happen, and repair costs can be substantial. Car insurance policies are of various types. First type is third-party car insurance. This cover protects you from financial damages if your insured vehicle unintentionally damages a third party's vehicle or property or injures a third party.  "
              
              />
            </div>
            <br />
            <InsuranceTypes
              title="Types of Car Insurance"
              description="At notionInsurance, you can buy three different types of car insurance policies such as third-party insurance, comprehensive insurance, and standalone own-damage insurance. Check the section given below to learn more about these plans:"
              insuranceOptions={insurancetypes}
            />
            <br />
            <div className="div pt-5">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Third-Party Vs Comprehensive Car Insurance
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

export default CarInsurance;
