import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import InquiryCard from "../GeneralInsurance/RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = ["Key Features", "Benefits Offered"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Income Guarantee After Retirement",
    comprehensive:
      " These plans offer you guaranteed income post retirement, when your salary is not available to you. You can avail this income either monthly/quarterly/half-yearly or annually depending on your requirements. Whether you buy deferred annuity plans or immediate annuity plans, the income is secure and guaranteed.",
  },
  {
    point: "Takes Care of Your Family With Death Benefits",
    comprehensive:
      " Not only a pension plan pays you regular income when you’re alive, it also ensures that your nominee receives death benefits in case you pass away. These benefits can also include any bonuses, if applicable. Your family can use the lump sum death benefit pay-out for many major expenses.",
  },
  {
    point: "Avail Tax Benefits:",
    comprehensive:
      " These plans bring with them an array of tax benefits. While the premiums paid towards life insurance policies are covered under Section 80C of Income Tax Act, the maturity/death proceeds are also tax-free under Section 10(10D).",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const PensionPlan = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pension Plans - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Secure your retirement with comprehensive pension plans from Notion Insurance Broker Pvt. Ltd. Our tailored solutions ensure financial stability and peace of mind, helping you enjoy your golden years without worry."
        />
        <meta
          name="keywords"
          content="pension plans, retirement savings, NIB pension plans, Notion Insurance Broker pension, financial security, retirement income, long-term investment, retirement planning, secure future, annuities"
        />
         <link rel="canonical" href="https://www.notioninsurance.com/pension-plan" />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Pension Plans
            </Typography>
            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Pension Plan" />
            </div>
            <Card className="mt-2 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Importance of Life Insurance
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  Life insurance is the backbone of financial security for
                  millions of Indians, safeguarding families against the
                  uncertainties of life. The life insurance sector in India has
                  evolved significantly over the past few decades, with private
                  and public companies playing crucial roles in enhancing
                  awareness and offering innovative solutions. <br />
                  <br />
                  In this article, we delve into the responsibilities and
                  contributions of the top 10 life insurance companies in India:
                  ICICI Prudential Life, HDFC Life, Max Life Insurance, TATA
                  AIA, Bajaj Allianz, PnB MetLife, Canara HSBC Life Insurance,
                  Aditya Birla Sun Life Insurance, SBI Life, and the Life
                  Insurance Corporation of India (LIC).
                </Typography>
              </CardBody>
            </Card>
            <Card className="mt-6 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Pension Plans
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  Planning for old age is crucial because as people age, their
                  ability to earn income decreases while living expenses,
                  especially for a healthy and dignified life, tend to increase.
                  A pension plan is a financial product designed to help
                  individuals save money for their retirement. With these plans,
                  an insurance company provides a monthly income for a specified
                  period, in addition to a lump sum payment. This arrangement
                  ensures a consistent income during retirement, allowing
                  individuals to be financially independent. Investing in a
                  pension plan is essentially giving yourself a financial gift
                  for your later years, helping you cover daily expenses and
                  manage medical emergencies with confidence. We are here to
                  assist you in selecting the best pension plan for your needs!
                </Typography>
              </CardBody>
            </Card>

            <div className="div">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Benefits of Pension Plan
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

export default PensionPlan;
