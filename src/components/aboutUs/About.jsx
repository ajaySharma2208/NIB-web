import React from "react";
import Information from "./Information";
import Mission from "./Mission";
import Founder from "./Founder";
import Example from "../Example";
import OurExperts from "./OurExperts";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Us | Notion Insurance Broker Pvt. Ltd. - Trusted Insurance
          Solutions
        </title>
        <meta
          name="description"
          content="Discover Notion Insurance Broker Pvt. Ltd., your trusted IRDA-licensed partner offering tailored insurance solutions for individuals and businesses. Learn about our commitment to safeguarding your future."
        />
        <meta
          name="keywords"
          content="About Notion Insurance, Insurance Broker, Comprehensive Insurance Solutions, Life Insurance, Health Insurance, Business Insurance, Trusted Insurance Partner"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/about-us" />
        <meta
          property="og:title"
          content="About Us | Notion Insurance Broker Pvt. Ltd. - Trusted Insurance Solutions"
        />
        <meta
          property="og:description"
          content="Explore Notion Insurance Broker Pvt. Ltd., an IRDA-licensed company committed to delivering reliable insurance solutions for individuals and businesses."
        />
        <meta
          property="og:url"
          content="/about-us"
        />
         <meta
          property="og:image"
          content="/assets/images/header/logo.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Notion Insurance Broker Pvt. Ltd. - Trusted Insurance Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover how Notion Insurance Broker Pvt. Ltd. provides comprehensive, tailored insurance solutions for individuals and businesses."
        />
        <meta
          name="twitter:image"
          content="/assets/images/header/logo.webp"
        />
      </Helmet>

      <Information />
      <Mission />

      <OurExperts />
    </div>
  );
};

export default About;
