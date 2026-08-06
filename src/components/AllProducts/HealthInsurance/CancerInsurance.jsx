import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const CancerInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cancer Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your marine assets with comprehensive Cancer Insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover cargo, hull, and liability, ensuring your shipping and logistics operations are secure against risks at sea."
        />
        <meta
          name="keywords"
          content="Cancer Insurance, NIB Cancer Insurance, Notion Insurance Broker Cancer Insurance, cargo insurance, hull insurance, marine liability insurance, shipping insurance, logistics insurance, maritime coverage, marine risk management"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/cancer-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Cancer Insurance
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Cancer Insurance" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Cancer Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Cancer Insurance is a specialized insurance product that
                  provides comprehensive coverage for the treatment of various
                  types of cancer. With the rising incidence of cancer cases,
                  this plan offers critical financial support to policyholders
                  during a challenging time, ensuring they can focus on recovery
                  rather than financial concerns.
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
              Key Features of Cancer Insurance
            </Typography>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Broad Cancer Coverage :{" "}
                      </span>
                      Covers a wide array of cancer treatments, including
                      chemotherapy, radiation therapy, hospitalization, and
                      surgery, providing complete financial support.
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
                        Early Detection Benefits :{" "}
                      </span>
                      Provides a lump sum payment upon early diagnosis of
                      cancer, facilitating prompt treatment and increasing
                      chances of successful recovery.
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
                        Access to Expert Consultations :{" "}
                      </span>
                      Policyholders can obtain second opinions from renowned
                      cancer specialists, helping them make informed treatment
                      decisions.
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
                        Flexible Payout Options :{" "}
                      </span>
                      Offers flexibility in receiving benefits, allowing
                      policyholders to choose between a lump sum payout or
                      installments to manage their treatment expenses
                      effectively.
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

export default CancerInsurance;
