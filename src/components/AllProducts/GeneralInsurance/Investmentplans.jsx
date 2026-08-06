import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TabPanel,
  CardHeader,
} from "@material-tailwind/react";
import TableComponent from "./RelativeComponents/TableComponent";
import ImageTextCard from "./RelativeComponents/ImageText";
import InquiryCard from "./RelativeComponents/InquiryCard";
import { Helmet } from "react-helmet-async";

const TABLE_HEADERS_PAGE_1 = [
  "Point of Difference",
  "Comprehensive Insurance",
  "Third-party Insurance",
];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Definition",
    comprehensive: "Covers both third-party claims and own vehicle damages",
    thirdParty: "Covers third-party damages/injuries",
  },
  {
    point: "Coverage",
    comprehensive: "Yes, covers damage to your vehicle in many cases",
    thirdParty: "No, excludes damage to your own vehicle",
  },
  {
    point: "Legal Requirement",
    comprehensive: "No, but includes legal third-party coverage",
    thirdParty: "Yes, minimum legal requirement",
  },
  {
    point: "Cost",
    comprehensive: "Higher premiums due to broader coverage",
    thirdParty: "Lower premiums",
  },
  {
    point: "Exclusions",
    comprehensive: "Wear and tear, unlawful actions, non-approved mods",
    thirdParty: "Own vehicle damage, passenger injuries, theft",
  },
];
const COLUMN_WIDTHS = [
  "w-20", // 25% width for Point of Difference
  "w-24", // 40% width for Comprehensive Insurance
  "w-24", // 40% width for Third-party Insurance
];
const Investmentplans = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Investment Plans - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore diverse investment plans from Notion Insurance Broker Pvt. Ltd. Our tailored solutions help you grow your wealth while providing financial security for your future. Discover options that align with your financial goals and risk appetite."
        />
        <meta
          name="keywords"
          content="investment plans, NIB investment plans, Notion Insurance Broker investment plans, wealth management, financial security, investment options, financial goals, risk management, savings plans, long-term investments"
        />
        <link
          rel="canonical"
          href="https://www.notioninsurance.com/investment-plans"
        />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none px-5 md:px-8 lg:px-12 xl:px-20 bg-white w-full flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Investment plans Plans
            </Typography>

            <div className="mt-4 flex w-full justify-center gap-4">
              <InquiryCard insurerName="Investment Plans" />
            </div>
            <ImageTextCard
              heading="A Guide to Investment plans"
              subheading=" Get Investment plans  insurance & protect your Investment  ."
              imageSrc="https://static.vecteezy.com/system/resources/thumbnails/014/580/138/small/businessman-in-black-formal-suit-celebrating-with-clenched-fists-in-front-of-positive-growing-bar-chart-with-coin-ornament-3d-rendering-of-business-investment-concept-png.png"
              altText="Investment plans "
              description="
Investment Plans Insurance is a financial product that combines insurance coverage with an investment component. This type of plan not only provides life insurance protection to the policyholder but also allows them to invest a portion of their premiums into various financial instruments, such as stocks, bonds, or mutual funds."
            />
            <br />

            <Card className="mt-6 w-full text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Types of Investment plans
              </Typography>
              <CardBody>
                <Typography className="md:px-5">
                  <ul className="list-disc text-start flex flex-col items-start gap-2">
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Stocks:{" "}
                      </span>{" "}
                      Equity investments in publicly traded companies, offering
                      potential for high returns but with higher risk.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Bonds:{" "}
                      </span>{" "}
                      Fixed-income securities issued by governments or
                      corporations, providing regular interest payments and
                      lower risk than stocks.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Mutual Funds:{" "}
                      </span>{" "}
                      Pooled investments managed by professionals, investing in
                      a diversified portfolio of stocks, bonds, or other
                      securities.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Exchange-Traded Funds (ETFs):{" "}
                      </span>{" "}
                      Similar to mutual funds but traded on stock exchanges,
                      offering flexibility and diversification.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Real Estate Investment Trusts (REITs):{" "}
                      </span>{" "}
                      Companies that own, operate, or finance income-producing
                      real estate, allowing investors to earn from property
                      investments without direct ownership.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Retirement Accounts:{" "}
                      </span>{" "}
                      Specialized accounts like 401(k)s or IRAs that offer tax
                      advantages for retirement savings.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Index Funds:{" "}
                      </span>{" "}
                      A type of mutual fund or ETF that aims to replicate the
                      performance of a specific market index, providing broad
                      market exposure.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Commodities:{" "}
                      </span>{" "}
                      Physical goods like gold, silver, oil, or agricultural
                      products that can be traded or invested in for potential
                      price appreciation.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Cryptocurrencies:{" "}
                      </span>{" "}
                      Digital or virtual currencies that use cryptography for
                      security and operate on blockchain technology, offering
                      high volatility and potential for significant returns.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Fixed Deposits (FDs):{" "}
                      </span>{" "}
                      Low-risk investment option offered by banks, providing
                      fixed interest over a specified period.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Public Provident Fund (PPF):{" "}
                      </span>{" "}
                      A government-backed savings scheme in India offering
                      attractive interest rates and tax benefits.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        National Pension System (NPS):{" "}
                      </span>{" "}
                      A retirement savings scheme in India that allows
                      individuals to invest in various asset classes while
                      saving for retirement.
                    </li>
                    <li>
                      <span className="text-gray-800 font-semibold">
                        Annuities:{" "}
                      </span>{" "}
                      Insurance products that provide regular income payments in
                      exchange for a lump-sum investment, often used for
                      retirement planning.
                    </li>
                  </ul>
                </Typography>
              </CardBody>
            </Card>

            <br />
            <div className="div pt-5">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Third-Party Vs Comprehensive Investment plans
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

export default Investmentplans;
