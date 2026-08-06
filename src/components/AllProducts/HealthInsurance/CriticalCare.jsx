import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const CriticalCare = () => {
  return (
    <>
      <Helmet>
        <title>Critical Care Plan - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Safeguard your property with comprehensive fire insurance from Notion Insurance Broker Pvt. Ltd. Our policies provide coverage for damages caused by fire, ensuring financial security and peace of mind for homeowners and businesses alike."
        />
        <meta
          name="keywords"
          content="fire insurance, NIB fire insurance, Notion Insurance Broker fire insurance, property insurance, fire damage coverage, business fire insurance, home fire insurance, fire protection, financial security, insurance for fire risks"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/critical-care-plan" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Critical Care Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Critical Care Plan" />
            </div>
            <Card className="mt-2 w-full text-center  md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Critical Care Plan
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  The Critical Care Plan is a vital insurance product that
                  protects policyholders from the high costs associated with
                  critical illnesses. This plan is designed to cover a range of
                  severe health conditions, including heart attacks, strokes,
                  and major surgeries, ensuring individuals receive the
                  necessary medical care without financial strain. With the
                  increasing prevalence of life-threatening diseases, this plan
                  serves as a safety net, allowing for timely treatment and
                  recovery.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-10 text-center"
              >
                Important Characteristics of Critical Care Plan
              </Typography>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        Extensive Illness Coverage :{" "}
                      </span>
                      This plan covers various life-threatening conditions,
                      ensuring that policyholders have financial protection
                      against serious health issues.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">Lump Sum Payout : </span>
                      Upon diagnosis of a covered critical illness, the
                      policyholder receives a one-time lump sum payment,
                      allowing for immediate access to medical treatment and
                      resources.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">No Claim Bonus : </span>
                      For every year that passes without a claim, policyholders
                      may receive an increase in their coverage amount,
                      rewarding them for staying healthy.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        Customizable Policy Terms :{" "}
                      </span>
                      Policyholders can select from various coverage amounts and
                      terms, tailoring the plan to fit their specific health
                      needs and financial situation.
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

export default CriticalCare;
