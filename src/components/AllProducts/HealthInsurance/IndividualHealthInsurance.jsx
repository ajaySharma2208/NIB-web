import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import ImageTextCard from "../GeneralInsurance/RelativeComponents/ImageText";
import InsuranceTypes from "../GeneralInsurance/RelativeComponents/TypesInsurance";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const HealthInsurance = () => {
  const insurancetypes = [
    {
      name: "To Safeguard Your Savings",
      description:
        "Investing in health insurance is a proactive way to protect your hard-earned savings. In the event of unexpected medical expenses, having coverage ensures that you won’t have to deplete your savings or take on debt to manage healthcare costs.",
    },
    {
      name: "To Combat Medical Inflation",
      description:
        "With the continuous rise in healthcare costs, medical inflation can quickly erode your financial resources. Health insurance acts as a buffer against these escalating expenses, ensuring you have access to necessary medical services without the fear of exorbitant bills. ",
    },
    {
      name: "Adapting to Lifestyle Changes",
      description:
        "Our lifestyles are constantly evolving, often leading to new health challenges that require immediate attention. A comprehensive health insurance plan is essential for adapting to these changes, providing coverage for various medical needs that arise from modern living.",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Individual Health Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Protect your health and financial future with individual health insurance from Notion Insurance Broker Pvt. Ltd. Our comprehensive policies cover medical expenses, hospitalization, and preventive care, ensuring you and your loved ones receive top-notch healthcare."
        />
        <meta
          name="keywords"
          content="health insurance, individual health insurance, NIB health insurance, Notion Insurance Broker, medical insurance, family health cover, hospitalization coverage, preventive care, affordable health plans, comprehensive health coverage, health protection"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/health-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Individual Health Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Individual Health Insurance" />
            </div>
            <br />
            <ImageTextCard
              heading="Importance of Health Insurance"
              subheading="Essential Features and Benefits of Health Insurance Policies"
              imageSrc="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/category-page/health-plan/images/HealthInsurance.png"
              altText="Bike"
              description="Health insurance is a contract between the insurer and the policyholder in which the insurance company agrees to reimburse medical expenses incurred by the policyholder during the policy's duration. According to the terms of the policy, the insured may face medical costs due to illness or unfortunate accidents that require hospital treatment. To access the benefits of a health insurance policy, the policyholder must pay a specified amount regularly, known as a premium. This premium, set by the insurance company, must be paid consistently—whether monthly, quarterly, semi-annually, or annually—without exception."
            />
            <Card className="mt-6 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  A Guide to Individual Health Insurance Plans
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  This health insurance policy provides coverage to an
                  individual against certain illnesses, offering advantages like
                  cashless hospitalization and various add-ons. The entire sum
                  assured is available for only one individual and the premium
                  is determined by the age of the insured. Under this policy,
                  each insured member is entitled to receive the entire amount
                  separately.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <InsuranceTypes
              title="The Significance of Health Insurance for Indian Citizens"
              description="As healthcare costs continue to soar, the ability to access quality medical treatment can significantly impact your financial stability. To safeguard yourself and your loved ones from the financial burden of critical illnesses, it is essential for every individual to invest in a dependable health insurance plan. Here are the key reasons why obtaining coverage sooner rather than later is beneficial:"
              insuranceOptions={insurancetypes}
              showButton={false}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default HealthInsurance;
