import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const listOfFaq = [
  {
    header: "WHAT DOES INSURANCE MEAN?",
    text: "Insurance is a method in which the losses suffered by a few are spread over many, exposed to similar risks. It serves as a cover against financial loss arising from unanticipated occurrences.",
  },
  {
    header: "WHY IS INSURANCE NEEDED?",
    text: "Insurance protects against unexpected financial losses. While it doesn't remove the risk, it compensates for losses through premium payments, transferring the cost of major losses to the insurance company. It operates on the principle of shared risk, where a group pays premiums to a common pool to cover individual losses.",
  },
  {
    header: "WHAT IS GENERAL INSURANCE?",
    text: "General Insurance covers all risks other than life, including motor vehicles, industries, transit of goods, personal accidents, aviation, and credit risks.",
  },
  {
    header: "WHAT IS LIFE INSURANCE?",
    text: "Life Insurance is a contract between the insurer and the insured, under which the insurer pays a designated person a sum of money upon the death of the policyholder or other covered events like critical illness.",
  },
  {
    header: "WHAT IS HEALTH INSURANCE?",
    text: "Health Insurance is a type of insurance that covers medical expenses, generally upon the hospitalization of insured person(s).",
  },
  {
    header: "ABOUT BROKER?",
    text: "An insurance broker is an intermediary between the insured and insurance companies, knowledgeable about various insurance products. There are five categories of insurance brokers: (i) Direct Broker (Life), (ii) Direct Broker (General), (iii) Direct Broker (Life & General), (iv) Reinsurance Broker, and (v) Composite Broker.",
  },
  {
    header: "WORK OF BROKER?",
    text: "Insurance brokers assess risks, obtain the best cover at optimal prices, arrange policy documents, assist in claims, and remind clients about renewals and necessary corrections. They provide expert advice to protect their clients' interests.",
  },
  {
    header: "BENEFIT OF BROKER?",
    text: "Using insurance brokers offers benefits like cost savings, market knowledge, simplicity, professionalism, more choices, stress-free claims, impartial advice, and long-term relationships.",
  },
  {
    header: "HOW DO I CHOOSE A BROKER?",
    text: "Choose an insurance broker who is a member of the Insurance Brokers Association of India. Ask for referrals, check references, determine your coverage needs, and learn about their specialized experience.",
  },
  {
    header: "WHAT IS RISK MANAGEMENT?",
    text: "Brokers suggest risk management procedures to reduce risks and save on insurance premiums. This can include installing safety systems, implementing safer working practices, and financial risk management techniques.",
  },
  {
    header: "HOW MUCH INSURANCE DO I NEED?",
    text: "Ensure sufficient coverage for each policy based on the market value or reinstatement value of assets. If the sum insured doesn't meet requirements, the insured must cover the exposed segment.",
  },
  {
    header: "DO I NEED COVER RIGHT NOW?",
    text: "Recognizing risks and insuring against them as soon as possible is essential, as accidents can occur unexpectedly. Almost anything with financial worth can be covered under insurance.",
  },
  {
    header: "WHAT DOES PREMIUM MEAN?",
    text: "Premium is the amount paid periodically to maintain insurance coverage. It involves filling out a proposal form that serves as the basis of the insurance contract.",
  },
  {
    header: "WHAT IS UNDERWRITING?",
    text: "Underwriting is the process financial service providers use to assess risks and decide premium rates for insurance contracts.",
  },
  {
    header: "WHAT IS DEDUCTIBLE?",
    text: "A deductible is the portion of any claim not covered by the insurance provider, which the insured must pay before benefits apply.",
  },
  {
    header: "CAN I CHANGE BROKER AT ANY TIME?",
    text: "Yes, you can change brokers without risk to your insurance program. Policies typically last for twelve months, but a new broker can start acting on your behalf anytime.",
  },
  {
    header: "WHO IS THE BROKER WORKING FOR?",
    text: "Insurance brokers work for clients, not insurance companies, ensuring clients benefit from convenience, knowledge, choice, innovation, and professionalism.",
  },
  {
    header: "HOW ARE INSURANCE BROKERS PAID?",
    text: "Brokers are generally paid by commissions from insurance companies, with clients not needing to pay for their services. In complex cases, a pre-negotiated fee may apply.",
  },
  {
    header:
      "HOW CAN I BE SURE THEY ARE NOT JUST SELLING ME A PRODUCT OFF THE SHELF?",
    text: "Brokers at Notion Insurance aim for long-term relationships and prioritize finding suitable products tailored to clients' needs, ensuring ethical and professional service.",
  },
];
const Faq = () => {
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const [open1, setOpen1] = React.useState(0); // For the first set (1 to 10)
  const [open2, setOpen2] = React.useState(0); // For the second set (11+)

  const handleOpen1 = (value) => setOpen1(open1 === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);
  return (
    <>
      <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 pt-10">
        <div className="justify-center flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-center lg:mb-10">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Frequently Asked Questions
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              {/* <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5  w-full">
          {/* First Card (FAQ 1 to 10) */}
          <Card className="bg-gray-50 lg:w-1/2">
            <CardBody>
              {listOfFaq.slice(0, 10).map((faq, index) => (
                <Accordion
                  key={index}
                  open={open1 === index + 1}
                  animate={CUSTOM_ANIMATION}
                  icon={<Icon id={index + 1} open={open1} />}
                >
                  <AccordionHeader className="text-lg" onClick={() => handleOpen1(index + 1)}>
                    {faq.header}
                  </AccordionHeader>
                  <AccordionBody>{faq.text}</AccordionBody>
                </Accordion>
              ))}
            </CardBody>
          </Card>

          {/* Second Card (FAQ 11 onwards) */}
          <Card className="bg-gray-50 lg:w-1/2">
            <CardBody>
              {listOfFaq.slice(10).map((faq, index) => (
                <Accordion
                  key={index + 11}
                  open={open2 === index + 11}
                  animate={CUSTOM_ANIMATION}
                  icon={<Icon id={index + 11} open={open2} />}
                >
                  <AccordionHeader className="text-lg" onClick={() => handleOpen2(index + 11)}>
                    {faq.header}
                  </AccordionHeader>
                  <AccordionBody>{faq.text}</AccordionBody>
                </Accordion>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Faq;
