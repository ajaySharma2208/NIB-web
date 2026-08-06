import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = ["Points", "Description"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Collective Coverage for Employees",
    description:
      "This insurance covers all employees under a single policy, simplifying the administration of health benefits for businesses.",
  },
  {
    point: "Cashless Hospitalization Network",
    description:
      "Employees can access cashless treatment at a wide network of hospitals, ensuring immediate care without upfront costs.",
  },
  {
    point: "Family Inclusion Options",
    description:
      " Many plans allow employees to add family members to the policy, extending health benefits to their loved ones.",
  },
  {
    point: "Wellness Programs",
    description:
      "Some plans include wellness initiatives, such as health screenings, fitness programs, and mental health support, promoting overall well-being in the workplace.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const EmployeeGroupHealthInsurance = () => {
 
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Employee Group Health Insurance - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Provide your employees with comprehensive health protection through our Employee Group Health Insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover medical expenses, hospitalization, and preventive care, ensuring the well-being of your workforce."
        />
        <meta
          name="keywords"
          content="Employee Group Health Insurance, NIB Employee Health Insurance, Notion Insurance Broker employee insurance, group health coverage, employee medical insurance, corporate health plans, employee wellness, hospitalization coverage, employee benefits, business health insurance"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/employee-group-health-insurance" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Employee Group Health Insurance
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Employee Health Insurance" />
            </div>
            <Card className="mt-2 w-full md:text-center md:hover:scale-105 duration-300 ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Employee Group Health Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  Employee Group Health Insurance is designed for businesses to
                  provide comprehensive health coverage to their employees,
                  enhancing employee satisfaction and promoting a healthy
                  workplace. This plan is a valuable benefit that supports the
                  well-being of employees and their families.
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
                Key Features of Employee Group Health Insurance
              </Typography>
              <TableComponent
                headers={TABLE_HEADERS_PAGE_1}
                rows={TABLE_ROWS_PAGE_1}
                columnWidths={COLUMN_WIDTHS}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EmployeeGroupHealthInsurance;
