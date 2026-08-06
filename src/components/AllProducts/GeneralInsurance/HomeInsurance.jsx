import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InquiryCard from "./RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const HomeInsurance = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Insurance - Notion Insurance Broker Pvt. Ltd.</title>
          <meta
            name="description"
            content="Protect your home and valuables with comprehensive home insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover damage, theft, and natural disasters, ensuring financial security and peace of mind for your property."
          />
          <meta
            name="keywords"
            content="home insurance, property insurance, NIB home insurance, Notion Insurance Broker home insurance, house insurance, home coverage, home protection, theft protection, damage coverage, natural disaster insurance, home insurance policies"
          />
          <link
            rel="canonical"
            href="https://www.notioninsurance.com/home-insurance"
          />
        </Helmet>

        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Home Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Home Insurance" />
            </div>
            <br />
            <Card className="mt-0 w-full ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                  A Guide to Home Insurance
                </Typography>
                <Typography className="md:px-5 text-justify">
                  Home insurance, also commonly called homeowner&apos;s
                  insurance, is a type of property insurance that covers a
                  private residence. It is an insurance policy that combines
                  various personal insurance protections, which can include
                  losses occurring to one's home, its contents, loss of use
                  (additional living expenses), or loss of other personal
                  possessions of the homeowner, as well as liability insurance
                  for accidents that may happen at the home or at the hands of
                  the homeowner within the policy territory. Additionally,
                  homeowner's insurance provides financial protection against
                  disasters. A standard home insurance policy insures the home
                  itself along with the things kept inside.
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-20 md:px-10 w-full ">
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2  text-center"
              >
                Top Advantages of Home Insurance from Notion Insurance Broker
                Pvt Ltd
              </Typography>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Comprehensive Protection for Property and Belongings :{" "}
                      </span>
                      We provide complete coverage for your home, safeguarding
                      both structure and valuable contents against fire, theft,
                      natural disasters, and unexpected accidents.
                    </Typography>
                  </li>
                  <br />
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Tailored Home Insurance Plans for Every Homeowner :{" "}
                      </span>
                      Notion Insurance Broker offers customized home insurance
                      solutions, ensuring coverage suited to your specific
                      property type, location, and personal insurance
                      requirements.
                    </Typography>
                  </li>{" "}
                  <br />
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Affordable Premiums with Extensive Coverage Options :{" "}
                      </span>
                      Our home insurance plans are designed to offer affordable
                      premiums while providing broad protection, ensuring your
                      property is fully covered without exceeding your budget.
                    </Typography>
                  </li>{" "}
                  <br />
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Efficient Claims Process for Fast Compensation :{" "}
                      </span>
                      We guarantee a seamless and efficient claims process,
                      helping homeowners recover financially from damage or loss
                      as quickly as possible.
                    </Typography>
                  </li>{" "}
                  <br />
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Protection Against Natural and Human-Induced Calamities
                        :{" "}
                      </span>
                      Our home insurance covers a range of risks, including
                      floods, earthquakes, storms, vandalism, and other
                      human-induced damages, ensuring full security for your
                      home.
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

export default HomeInsurance;
