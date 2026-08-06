import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet-async";



import { Link } from "react-router-dom";

const Claim = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24 px-5 md:px-8 lg:px-12 xl:px-20 min-h-[70vh] flex items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Claim - Notion Insurance Broker Pvt. Ltd.</title>
        <meta
          name="description"
          content="Submit and track your insurance claims with Notion Insurance Broker Pvt. Ltd. We provide efficient support and guidance for all your insurance claims, ensuring a smooth and hassle-free process."
        />
        <meta
          name="keywords"
          content="insurance claims, NIB claims, Notion Insurance Broker claims, claim support, claim assistance, insurance claim process, claim submission, claim tracking, hassle-free insurance claims"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/under-process" />
      </Helmet>
      
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-2xl p-8 md:p-12 text-center max-w-xl mx-auto flex flex-col items-center">
        <Cog8ToothIcon className="h-20 w-20 text-primary-blue animate-[spin_8s_linear_infinite] mb-6" />
        <Typography
          variant="h2"
          className="font-sora font-black text-gray-900 text-2xl md:text-3xl mb-4 tracking-tight leading-snug"
        >
          We&apos;re currently undergoing maintenance to improve your experience.
        </Typography>
        <Typography className="text-gray-500 font-semibold text-sm md:text-base leading-relaxed">
          Please bear with us while we make these enhancements. We&apos;ll be
          back shortly. Thank you for your patience!
        </Typography>
        <Link
          to="/"
          className="mt-8 px-6 py-3 bg-accent-orange hover:bg-orange-600 text-white font-black rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-200 uppercase text-xs cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Claim