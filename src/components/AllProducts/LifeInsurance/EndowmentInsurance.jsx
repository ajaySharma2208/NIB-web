import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const EndowmentInsurance = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Endowment Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Achieve your financial goals with endowment insurance from Notion Insurance Broker Pvt. Ltd. Our policies provide a combination of life cover and savings, ensuring you receive a lump sum amount at maturity or to secure your family's future."
        />
        <meta
          name="keywords"
          content="endowment insurance, NIB endowment insurance, Notion Insurance Broker endowment insurance, savings plan, life cover, financial security, investment insurance, maturity benefit, family protection, insurance policies"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/endowment-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Endowment Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Endowment Plan" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Endowment Plan
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  An Endowment Plan provides dual benefits by combining life
                  insurance coverage with a savings component. It ensures a lump
                  sum payout at maturity or upon the policyholder’s death,
                  offering both financial protection and long-term savings. This
                  makes it an ideal option for securing future financial goals
                  and security.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <div className="div">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Advantages of Having Endowment Plan
              </Typography>
              <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Property Damage Coverage (Building, Contents,
                          Equipment)
                        </span>
                        This coverage protects the physical assets of your
                        retail business, including the building, inventory,
                        fixtures, and equipment. It provides financial
                        assistance to repair or replace property damaged by
                        unforeseen events like fire, storms, or vandalism,
                        minimizing potential losses.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">Savings Component:</span>
                        Accumulates cash value over time, offering a savings
                        option alongside insurance, which can be withdrawn or
                        borrowed against.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Theft and Burglary Coverage
                        </span>
                        This coverage provides financial protection in case of
                        theft or burglary of your business assets. It
                        compensates for stolen inventory, damaged property, and
                        any resulting business disruptions, ensuring that you
                        can recover without significant financial setbacks.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Liability Coverage (Customer Injuries, Property
                          Damage)
                        </span>
                        Liability coverage safeguards your business from
                        third-party claims related to customer injuries or
                        property damage occurring on your premises. This feature
                        covers legal fees, medical expenses, and potential
                        compensation, protecting your business from costly
                        lawsuits.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Employee Dishonesty Coverage
                        </span>
                        Employee dishonesty coverage protects your business from
                        losses due to fraudulent activities by employees, such
                        as theft of money, inventory, or misuse of business
                        funds. It helps safeguard your business from internal
                        threats and maintain financial stability.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Cyber Insurance (Data Breach, Online Threats)
                        </span>
                        With increasing digital operations, cyber insurance
                        covers the financial impact of data breaches and online
                        threats. It provides support for legal fees, data
                        restoration, and customer notification in the event of a
                        cyberattack, helping maintain business reputation and
                        data security.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
                <CardBody>
                  <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                    <li>
                      <Typography>
                        <span className="font-bold">
                          Workers&apos; Compensation Insurance (Employee
                          Injuries)
                        </span>
                        Workers&apos; compensation insurance covers medical
                        expenses and lost wages for employees injured while
                        working. It ensures your employees receive adequate care
                        and compensation, reducing the risk of legal claims and
                        demonstrating your commitment to employee safety.
                      </Typography>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EndowmentInsurance;
