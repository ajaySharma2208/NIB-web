import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";


const ChildInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Child Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Secure your child's future with comprehensive child insurance from Notion Insurance Broker Pvt. Ltd. Our plans provide financial protection and savings options, ensuring your child's dreams are safeguarded against unforeseen events."
        />
        <meta
          name="keywords"
          content="child insurance, NIB child insurance, Notion Insurance Broker child insurance, children's future, financial protection, education savings plan, life coverage, family security, child investment, affordable insurance"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/child-insurance" />
      </Helmet>
      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Child Insurance Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Child Insurance" />
            </div>

            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Child Insurance
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  Child Education Insurance Plans are insurance plans that take
                  care of your Protection and Saving needs for securing the
                  future of your children. In case of death of policyholder in a
                  stipulated period of time, the insurance company also waives
                  the future premium payments* for the remaining policy term to
                  ensure that your children&apos;s future is always secure.
                  There are several Insurance Companies offering various plans
                  to secure the need of Child Education and Future Life. It can
                  also be used as collateral for an education loan.
                  <br />
                  Child plan is a mixture of investment and insurance that
                  usually aids in financial planning for Childs’ future needs
                  and requirements.
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ChildInsurance;
