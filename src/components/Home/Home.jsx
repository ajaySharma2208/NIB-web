import { useEffect, useState } from "react";

import Hero from "./HomeSubComponents/Hero";
import Products from "./HomeSubComponents/Products";
import Partners from "./HomeSubComponents/Partners";
import Exam from "./HomeSubComponents/Exam";

import Contact2 from "./HomeSubComponents/Contact2";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import Work from "./HomeSubComponents/Work";
import AllProduct from "./HomeSubComponents/AllProduct";
import Advantage from "./HomeSubComponents/Advantage";

const Home = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to detect screen width
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768); // Sets mobile view for screens <= 768px
  };
  useEffect(() => {
    handleResize(); // Check size on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Home | Notion Insurance Broker Pvt. Ltd. - Health and Life Plans
        </title>
        <meta
          name="description"
          content="Welcome to Notion Insurance Broker Pvt. Ltd., your trusted partner for health insurance, life plans, and comprehensive risk management solutions. Secure your future with us today."
        />
        <meta
          name="keywords"
          content="Notion Insurance, health insurance, life plan, insurance professional, health plan, life insurance, insurance broker, Notion Insurance Broker, home insurances, partners claim"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.notioninsurance.com/" />
        <meta
          property="og:site_name"
          content="Notion Insurance Broker Pvt. Ltd."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Notion Insurance Broker Pvt. Ltd." />
        <meta
          property="og:description"
          content="Explore Notion Insurance Broker Pvt. Ltd. for health insurance, life plans, and home insurance solutions. Your trusted IRDA-licensed partner."
        />
        <meta
          property="og:image"
          content="https://www.notioninsurance.com/assets/images/header/logo.jpg"
        />
        <meta property="og:image:alt" content="Notion Insurance Broker Logo" />
        <meta property="fb:pages" content="100063593333050" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Notion Insurance Broker Pvt. Ltd."
        />
        <meta
          name="twitter:description"
          content="Find tailored health insurance, life plans, and home insurance solutions with Notion Insurance Broker Pvt. Ltd. Contact us for personalized advice."
        />
        <meta
          name="twitter:image"
          content="https://www.notioninsurance.com/assets/images/header/logo.jpg"
        />
      </Helmet>
      {isMobileView ? (
        <>
          <AllProduct />
          <Products />
          <br />
          <Hero />
        </>
      ) : (
        <>
          <Hero />
          <AllProduct />

          <Products />
        </>
      )}
      <Partners />
      <Exam />
      <Advantage />
      <Work />

      <Contact2 />
    </div>
  );
};

export default Home;
