import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
const MarineInsurance = () => {
  // const [showAll, setShowAll] = useState(false);
  // const displayedOptions = showAll ? insuranceOptions : insuranceOptions.slice(0, 3);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marine Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your marine assets with comprehensive marine insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover cargo, hull, and liability, ensuring your shipping and logistics operations are secure against risks at sea."
        />
        <meta
          name="keywords"
          content="marine insurance, NIB marine insurance, Notion Insurance Broker marine insurance, cargo insurance, hull insurance, marine liability insurance, shipping insurance, logistics insurance, maritime coverage, marine risk management"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/marine-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Marine Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Marine Insurance" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Marine Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Marine insurance provides coverage for the loss or damage of
                  ships, cargo, terminals, and any transport by which goods are
                  transferred between points of origin and destination. It
                  safeguards businesses involved in shipping against financial
                  losses due to unforeseen events such as accidents, piracy,
                  natural disasters, or damage during transit.
                  <br />
                  By securing a marine insurance policy, companies can protect
                  their investments and ensure smooth operations, knowing that
                  any potential risks to their shipments are covered. This type
                  of insurance is crucial for mitigating the financial impact of
                  uncertainties in the shipping industry.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Key Features of Marine Insurance
            </Typography>
            <Typography className="md:px-20 text-center">
              Marine insurance is essential for businesses involved in shipping
              and cargo transport, offering a comprehensive range of coverage.
              Below are four key features that make marine insurance an
              indispensable part of global trade.
            </Typography>
            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Comprehensive Coverage for Various Risks :{" "}
                      </span>
                      Marine insurance provides coverage against a wide array of
                      risks, including loss or damage caused by accidents,
                      natural disasters, piracy, and even theft. It protects
                      ships, cargo, and freight during their journey, ensuring
                      that any unforeseen event does not lead to significant
                      financial losses.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Types of Coverage Options :{" "}
                      </span>
                      Marine insurance offers various types of coverage
                      depending on the needs of the policyholder. The two main
                      types are Hull Insurance, which covers physical damage to
                      the ship or vessel, and Cargo Insurance, which protects
                      the goods being transported.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">Liability Protection : </span>
                      In addition to covering physical loss or damage, marine
                      insurance also includes liability protection. This feature
                      safeguards businesses from third-party claims in case of
                      damages caused to other ships, cargo, or individuals
                      during the voyage.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Customizable Policies for Specific Needs :{" "}
                      </span>
                      Marine insurance policies are highly customizable,
                      allowing businesses to adapt coverage to specific routes,
                      cargo types, and transport methods. Whether it's a
                      one-time shipment or regular sea transport operations,
                      insurers offer flexible terms to meet the varied demands
                      of international trade.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MarineInsurance;
