import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const OneCrHealthCover = () => {
  return (
    <>
      <Helmet>
        <title>One Cr Health Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your health and well-being with our 1 Crore Health Insurance Plan from Notion Insurance Broker Pvt. Ltd. This comprehensive policy offers extensive coverage for medical expenses, hospitalization, and critical illness, ensuring financial security for you and your family."
        />
        <meta
          name="keywords"
          content="1 Crore Health Insurance, NIB 1 Crore Health Plan, Notion Insurance Broker health insurance, comprehensive health coverage, medical expense insurance, hospitalization coverage, critical illness insurance, family health protection, health insurance plans, financial security"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/one-cr-health-cover" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top 1 Cr Health Cover
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="1 Cr Health Insurance" />
            </div>
            <Card className="mt-2 w-full text-center  md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to 1 Cr Health Cover Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  The 1 Cr Health Cover is a premium health insurance plan that
                  offers a substantial sum assured of ₹1 crore, providing
                  extensive protection against various medical expenses. This
                  plan is ideal for individuals and families seeking
                  comprehensive health coverage to shield themselves from
                  unforeseen medical costs.
                </Typography>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 mt-10 text-center"
              >
                Important Characteristics of 1 Cr Health Cover
              </Typography>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        High Sum Assured :{" "}
                      </span>
                      With coverage of ₹1 crore, policyholders can access
                      extensive medical treatments, ensuring financial security
                      during health emergencies.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        Global Coverage Options :{" "}
                      </span>
                      Many plans include international coverage for emergencies
                      occurring outside India, providing peace of mind for
                      travelers.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        Preventive Health Check-ups :{" "}
                      </span>
                      Regular health check-ups are often included, promoting
                      early detection and proactive management of health issues.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <span className="font-bold mr-1">
                        Flexible Premium Payment Plans :{" "}
                      </span>
                      Policyholders can choose from various premium payment
                      options, including monthly, quarterly, or annually,
                      allowing for better financial planning.
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

export default OneCrHealthCover;
