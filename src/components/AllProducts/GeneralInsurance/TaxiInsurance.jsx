import React from "react";
import {
  Card,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";
import TableComponent from "./RelativeComponents/TableComponent";
import ImageTextCard from "./RelativeComponents/ImageText";
import InquiryCard from "./RelativeComponents/InquiryCard";
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
      "Comprehensive taxi insurance offers the highest level of coverage, including all third-party benefits plus protection for your vehicle and other incidents.",
    thirdParty:
      "Third-party insurance is the minimum level of cover required by law for taxi drivers. It only covers damage or injury to others if you're at fault in an accident.",
  },
  {
    point: "Coverage",
    comprehensive:
      "It covers Third-Party Liability, Your Taxi, Fire and Theft, Vandalism, Windshield Repairs",
    thirdParty:
      "It provides Damage to other vehicles, Injury to other road users or passengers, Damage to property",
  },
  {
    point: "Legal Requirement",
    comprehensive:
      "Comprehensive insurance provides much more protection and is worth considerin",
    thirdParty:
      "If you're driving a taxi, third-party insurance is the minimum legal requirement",
  },
  {
    point: "Cost",
    comprehensive:
      "Comprehensive insurance can be more cost-effective in the long run, especially if you want to avoid out-of-pocket costs for repairing your own vehicle after an accident",
    thirdParty: "Third-party insurance tends to have lower premiums,",
  },
  {
    point: "Exclusions",
    comprehensive:
      "Wear and tear, Driving under the influence, Non-approved modifications",
    thirdParty:
      "If your car is damaged or written off in an accident, theft, or fire, third-party insurance won't cover the repairs or replacement.",
  },
];
const COLUMN_WIDTHS = [
  "w-20", // 25% width for Point of Difference
  "w-24", // 40% width for Comprehensive Insurance
  "w-24", // 40% width for Third-party Insurance
];
const TaxiInsurance = () => {
  return (
    <>
 
        <Helmet>
  <meta charSet="utf-8" />
  <title>Taxi Insurance - Notion Insurance Broker Pvt. Ltd.</title>
  <meta
    name="description"
    content="Get specialized taxi insurance from Notion Insurance Broker Pvt. Ltd. Our comprehensive policies provide coverage for accidents, liability, and passenger protection, ensuring your taxi business is secure and compliant."
  />
  <meta
    name="keywords"
    content="taxi insurance, NIB taxi insurance, Notion Insurance Broker taxi insurance, taxi coverage, passenger insurance, commercial vehicle insurance, liability coverage, taxi business insurance, accident protection, taxi fleet insurance"
  />
  <link rel="canonical" href="https://www.notioninsurance.com/taxi-insurance" />
</Helmet>

            <div>
            <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Taxi Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Taxi Insurance" />
            </div>
              <ImageTextCard
                heading="A Guide to Taxi Insurance"
                subheading=" Get taxi  insurance & protect your vehicle & yourself."
                imageSrc="assets/images/Products/general/taxi.png"
                altText="Nexon Taxi "
                description="Taxi insurance, also known as motor insurance or four-wheeler insurance, is a contractual agreement between a taxi owner and an insurance provider. This policy provides financial protection in the event of damage or loss to the vehicle due to unforeseen incidents like accidents, theft, or natural disasters. More than just a legal requirement, taxi insurance offers peace of mind by covering repair costs and safeguarding your investment.
No matter how careful you are on the road, accidents happen, and repair expenses can be overwhelming. Taxi insurance steps in to reduce the financial burden of these incidents."
              />
            <br />

            <Card className="mt-6 w-full text-center md:hover:scale-105 duration-300">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Types of Taxi Insurance
              </Typography>
              <CardBody>
                <Typography className="md:px-5">
                  <ul className="list-disc text-start flex flex-col items-start gap-2">
                    <li>
                      <span className="text-gray-800 font-semibold mr-1">
                        Public Hire Taxi Insurance :{" "}
                      </span>{" "}
                      For drivers who can pick up passengers from the street
                      without prior booking (e.g., black cabs).
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold mr-1">
                        Private Hire Taxi Insurance :{" "}
                      </span>{" "}
                      For drivers who only transport passengers who have booked
                      in advance (e.g., Uber or minicab drivers).
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold mr-1">
                        Comprehensive Coverage :{" "}
                      </span>{" "}
                      Includes third-party, fire, and theft protection plus
                      damage to your vehicle.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold mr-1">
                        Third-Party Only :{" "}
                      </span>{" "}
                      Covers damages or injuries caused to others, but not your
                      vehicle.
                    </li>
                  </ul>
                </Typography>
              </CardBody>
            </Card>

            <br />
            <div className="div pt-5">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Third-Party Vs Comprehensive Taxi Insurance
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

export default TaxiInsurance;
