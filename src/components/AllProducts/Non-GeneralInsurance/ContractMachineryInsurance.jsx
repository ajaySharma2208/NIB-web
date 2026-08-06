import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const ContractMachineryInsurance = () => {
  // const [showAll, setShowAll] = useState(false);
  // const displayedOptions = showAll ? insuranceOptions : insuranceOptions.slice(0, 3);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactor&apos;s Plant & Machinery Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Secure your construction business with comprehensive Contractor's Plant & Machinery Insurance from Notion Insurance Broker Pvt. Ltd. Our coverage protects against damage, loss, and third-party liability for essential construction equipment, ensuring project continuity."
        />
        <meta
          name="keywords"
          content="Contractor's Plant and Machinery Insurance, NIB construction insurance, machinery coverage, plant insurance, construction equipment protection, Notion Insurance Broker construction insurance, contractor insurance, project continuity, machinery risk management"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/contractor-plant-machinery-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Contractor&apos;s Plant & Machinery Insurance Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Contractor's Plant & Machinery" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Contractor&apos;s Plant & Machinery Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Contractor Plant and Machinery Insurance is a comprehensive
                  policy designed to protect businesses that rely on heavy
                  equipment and machinery for their construction projects. It
                  provides essential financial coverage against physical loss,
                  damage, or destruction of plant and machinery, whether due to
                  accidents, fire, theft, or other unforeseen circumstances.
                  <br />
                  This insurance ensures that costly equipment like cranes,
                  excavators, bulldozers, and other specialized tools remain
                  protected, minimizing the financial impact of repairs or
                  replacements.
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
              Key Features of Contractor&apos;s Plant & Machinery Insurance
            </Typography>
            <Typography className="md:px-20 text-center">
              Contractor Plant and Machinery Insurance offers essential
              financial protection for businesses involved in construction
              projects.
            </Typography>
            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Coverage for Plant and Machinery :{" "}
                      </span>
                      This insurance provides protection for heavy-duty
                      construction machinery, such as excavators, cranes, and
                      bulldozers, covering damages that may occur on-site due to
                      unforeseen events.
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
                        Coverage for Equipment and Tools :{" "}
                      </span>
                      In addition to machinery, the policy extends to cover
                      smaller tools and equipment used in daily construction
                      operations, ensuring comprehensive protection.
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
                        Third-Party Liability Coverage:{" "}
                      </span>
                      This feature covers legal liabilities arising from
                      accidental damage to third-party property or injuries
                      caused by the insured equipment, protecting the business
                      from potentially high legal costs.
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
                        Business Interruption Coverage :{" "}
                      </span>
                      If damage to the plant and machinery leads to delays in
                      the project, the policy helps cover financial losses,
                      ensuring minimal disruption to the business.
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
                        Additional Costs Coverage :{" "}
                      </span>
                      This includes coverage for extra expenses like expediting
                      costs and Architects&apos; or Engineers&apos; fees needed
                      to repair or replace damaged machinery quickly.
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

export default ContractMachineryInsurance;
