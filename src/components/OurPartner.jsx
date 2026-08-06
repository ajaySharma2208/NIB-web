import React from "react";
import { Helmet } from "react-helmet-async";


const OurPartner = () => {
  const partners = [
    {
      name: "Future Generali",
      logo: "assets/images/company/Future generali.webp",
    },
    { name: "HDFC ERGO", logo: "assets/images/company/HDFC ERGo.webp" },
    { name: "HDFC Life", logo: "assets/images/company/HDFC life.avif" },
    {
      name: "ICICI Prudential",
      logo: "assets/images/company/ICICI Prudential.webp",
    },
    { name: "ICICI Lombard", logo: "assets/images/company/icicibank.webp" },
    { name: "IFCO TOKIO", logo: "assets/images/company/IFCO TOKIO.webp" },
    { name: "Liberty", logo: "assets/images/company/liberty.webp" },
    { name: "Max Life", logo: "assets/images/company/Max Life.webp" },
    {
      name: "National Insurance",
      logo: "assets/images/company/National insurance.webp",
    },
    { name: "Niva", logo: "assets/images/company/Niva Bupa Health in.webp" },
    { name: "Oriental", logo: "assets/images/company/oriental.webp" },
    { name: "Raheja QBE", logo: "assets/images/company/raheja.avif" },
    { name: "SBI General", logo: "assets/images/company/SBI General.avif" },
    { name: "Shriram", logo: "assets/images/company/shriram.avif" },
    { name: "Star", logo: "assets/images/company/Star personal & caring.avif" },
    { name: "TATA AIA", logo: "assets/images/company/TATA AIA.avif" },
    {
      name: "The New India",
      logo: "assets/images/company/The new india assurance co.ltd.avif",
    },
    { name: "United India", logo: "assets/images/company/United India.avif" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
  ];

  return (
    <section className="bg-slate-50/30 py-16 px-5 md:px-8 lg:px-12 xl:px-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Partners - Notion Insurance Broker PVT. LTD.</title>
        <meta
          name="description"
          content="Discover the trusted partners of Notion Insurance Broker Pvt. Ltd. We collaborate with leading insurance providers to offer comprehensive risk management and insurance solutions."
        />
        <meta
          name="keywords"
          content="NIB partners, Notion Insurance Broker partners,life insurance , health insurance insurance partnerships, insurance providers, risk management partners, insurance collaborations, trusted insurance providers, NIB collaborations"
        />
        {/* <link rel="canonical" href="/our-partner" /> */}
        
      </Helmet>

      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-black mb-12 font-sora tracking-tight text-gray-900">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-[20px] border border-slate-100 shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-36">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[60px] max-w-full object-contain mb-3"
              />
              <p className="text-xs font-black text-gray-700 leading-none text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
