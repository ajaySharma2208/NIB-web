import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const OurExperts = () => {
    const experts = [
        {
            name: "Bharat Shrivastava",
            role: "Principal Officer & C.E.O",
            img: "/assets/images/founder/img3.jpg"
        },
        {
            name: "Suresh G Malviya",
            role: "Director",
            img: "/assets/images/founder/img4.png"
        },
        {
            name: "Arun Gupta",
            role: "Managing Director",
            img: "/assets/images/founder/img2.jpg"
        },
        {
            name: "Kanchan S Malviya",
            role: "Director",
            img: "/assets/images/founder/img1.jpg"
        },
        {
            name: "Avinash Gupta",
            role: "Chief Operating Officer (C.O.O)",
            img: "/assets/images/founder/img5.png"
        }
    ];

    return (
        <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 py-8">
            <div className="text-center mb-10">
                <Typography variant="h2" className="font-sora font-black text-gray-900 text-3xl mb-2 tracking-tight">
                    Our Experts
                </Typography>
                <Typography className="text-gray-500 font-semibold text-sm max-w-xl mx-auto">
                    With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1280px] mx-auto justify-items-center">
                {experts.map((expert, index) => (
                    <div key={index} className="bg-white rounded-[24px] border border-slate-100 shadow-md p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[240px] h-full">
                        <img
                            src={expert.img}
                            alt={expert.name}
                            loading="lazy"
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-50 shadow-md mb-4 shrink-0"
                        />
                        <div className="flex flex-col gap-1 items-center">
                            <h4 className="font-black text-base text-gray-900 font-sora leading-tight tracking-tight min-h-[40px] flex items-center justify-center">
                                {expert.name}
                            </h4>
                            <p className="text-xs font-bold text-primary-blue leading-normal mt-1 min-h-[32px] flex items-center justify-center">
                                {expert.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurExperts;
