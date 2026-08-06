import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";

const ProfessionalIndemnityDoctorsInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Professional Indemnity Insurance For Doctors - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Safeguard your medical practice with Professional Indemnity Insurance for Doctors from Notion Insurance Broker Pvt. Ltd. Our policies cover medical negligence, errors, and patient injury claims, ensuring comprehensive protection for healthcare professionals."
          />
          <meta
            name="keywords"
            content="Professional Indemnity Insurance, PII for Doctors, NIB insurance for doctors, Notion Insurance Broker professional indemnity, medical negligence coverage, healthcare insurance, doctor liability insurance, medical malpractice protection, physician insurance, indemnity coverage"
          />
           <link rel="canonical" href="https://www.notioninsurance.com/professional-indemnity-doctors-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top General Professional Indemnity Insurance For Doctors
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Professional Indemnity Plans" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Professional Indemnity Insurance For Doctors
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Professional Indemnity Insurance (PII) for doctors is a
                  specialized policy designed to safeguard medical professionals
                  from the financial risks associated with their practice. It
                  offers protection against claims of negligence, mistakes, or
                  errors made during patient care that result in harm, injury,
                  or even death.
                  <br />
                  This insurance covers legal costs, compensation claims, and
                  settlements, helping doctors avoid significant financial
                  losses. Whether the issue arises from misdiagnosis, improper
                  treatment, or procedural errors, PII ensures that doctors can
                  focus on their practice without the constant fear of financial
                  repercussions from potential lawsuits. It is a vital tool in
                  maintaining professional stability and reputation.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ProfessionalIndemnityDoctorsInsurance;
