import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
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
      "Comprehensive commercial vehicle insurance offers the highest level of coverage, including all third-party benefits plus protection for your vehicle and other incidents.",
    thirdParty:
      "Third-party insurance is the minimum level of cover required by law for commercial vehicle drivers. It only covers damage or injury to others if you're at fault in an accident.",
  },
  {
    point: "Coverage",
    comprehensive:
      "It covers Third-Party Liability, Your Commercial Vehicle, Fire and Theft, Vandalism, Windshield Repairs",
    thirdParty:
      "It provides Damage to other vehicles, Injury to other road users or passengers, Damage to property",
  },
  {
    point: "Legal Requirement",
    comprehensive:
      "Comprehensive insurance provides much more protection and is worth considerin",
    thirdParty:
      "If you're driving a commercial vehicle, third-party insurance is the minimum legal requirement",
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
const CommercialVehicle = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Commercial Vehicle Insurance - Notion Insurance Broker PVT. LTD.</title>
        <meta
          name="description"
          content="Protect your business assets with comprehensive commercial vehicle insurance from Notion Insurance Broker Pvt. Ltd. Our policies offer extensive coverage for vehicles used for business purposes, ensuring financial security and peace of mind."
        />
        <meta
          name="keywords"
          content="commercial vehicle insurance, NIB commercial vehicle insurance, Notion Insurance Broker commercial vehicle insurance, business vehicle insurance, fleet insurance, commercial auto insurance, vehicle coverage, liability insurance, commercial vehicle protection, truck insurance"
        />
        <link
          rel="canonical"
          href="https://www.notioninsurance.com/commercial-vehicle"
        />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Commercial Vehicle Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Commercial Vehicle Insurance" />
            </div>
            <ImageTextCard
              heading="A Guide to Commercial Vehicle Insurance"
              subheading=" Get commercial vehicle  insurance & protect your vehicle & yourself."
              imageSrc="assets/images/Products/general/ads.png"
              altText="Nexon Commercial Vehicle "
              description="axi insurance, also known as motor insurance or four-wheeler insurance, is a contractual agreement between a commercial vehicle owner and an insurance provider. This policy provides financial protection in the event of damage or loss to the vehicle due to unforeseen incidents like accidents, theft, or natural disasters. More than just a legal requirement, commercial vehicle insurance offers peace of mind by covering repair costs and safeguarding your investment.
No matter how careful you are on the road, accidents happen, and repair expenses can be overwhelming. Commercial Vehicle insurance steps in to reduce the financial burden of these incidents."
            />

            <br />

            <Card className="mt-6 w-full text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Types of Commercial Vehicle Insurance
              </Typography>
              <CardBody>
                <Typography className="md:px-5">
                  <ul className="list-disc text-start flex flex-col items-start gap-2">
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Public Hire Commercial Vehicle Insurance:{" "}
                      </span>{" "}
                      For drivers who can pick up passengers from the street
                      without prior booking (e.g., black cabs).
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Private Hire Commercial Vehicle Insurance:{" "}
                      </span>{" "}
                      For drivers who only transport passengers who have booked
                      in advance (e.g., Uber or minicab drivers).
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Comprehensive Coverage:{" "}
                      </span>{" "}
                      Includes third-party, fire, and theft protection plus
                      damage to your vehicle.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Third-Party Only:{" "}
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
                Third-Party Vs Comprehensive Commercial Vehicle Insurance
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

export default CommercialVehicle;
