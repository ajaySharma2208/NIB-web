import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceTypes from "./RelativeComponents/TypesInsurance";
import { Helmet } from "react-helmet";
import InquiryCard from "./RelativeComponents/InquiryCard";

const TravelInsurance = () => {
  const insurancetypes = [
    {
      name: "Domestic Travel Insurance",
      description:
        "The people travelling within the geographical borders of India may take this plan. It protects individuals as well as families travelling within the Indian states from unforeseen financial emergencies. It provides coverage including medical cover, loss of baggage and personal accident cover amongst others.",
    },
    {
      name: "International Travel Insurance",
      description:
        "Individuals and families travelling overseas may take this plan. It provides a wide range of coverage including medical expenses, dental expenses, financial cash assistance, flight delays, loss of passport, personal liability, loss or delay check-in baggage and hijack distress allowance. Several insurers also offer home insurance to the traveler’s house back in India as a part of this insurance plan.",
    },
    {
      name: "Student Travel Insurance",
      description:
        "This type of plan is customized for students travelling abroad to study. It comes with an extended validity of up to 2 years. Apart from the basic coverage of overseas insurance, it also provides the students with covers including sponsor protection, study interruption, two-way compassionate visit and bail bond amongst others. ",
    },
  ];
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Travel Insurance - Notion Insurance Broker Pvt. Ltd.</title>
          <meta
            name="description"
            content="Secure your adventures with comprehensive travel insurance from Notion Insurance Broker Pvt. Ltd. Our policies offer coverage for trip cancellations, medical emergencies, lost luggage, and more, ensuring a worry-free travel experience."
          />
          <meta
            name="keywords"
            content="travel insurance, NIB travel insurance, Notion Insurance Broker travel insurance, trip cancellation insurance, medical emergency insurance, lost luggage coverage, travel protection, overseas insurance, travel safety, travel insurance policies"
          />
          <link
            rel="canonical"
            href="https://www.notioninsurance.com/travel-insurance"
          />
        </Helmet>

        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Travel Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Travel Insurance" />
            </div>

            <Card className="mt-6 w-full text-center">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Travel Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Travel insurance is insurance that is intended to cover
                  medical expenses, trip cancellation, lost luggage, flight
                  accident and other losses incurred while traveling, either
                  internationally or domestically. Travel insurance can usually
                  be arranged at the time of the booking of a trip to cover
                  exactly the duration of that trip, or a 'multi-trip' policy
                  can cover an unlimited number of trips within a set time
                  frame. There are many travel insurance policies available in
                  the market place, but care must be taken of what events are
                  covered by each policy, and what exclusions, exceptions and
                  limits apply, besides other issues.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <InsuranceTypes
              title="Types of Travel Insurance"
              description="Travel Insurance provides financial protection against unforeseen circumstances while traveling domestically or internationally."
              insuranceOptions={insurancetypes}
              showButton={false}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default TravelInsurance;
