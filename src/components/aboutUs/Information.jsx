import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const Information = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full h-64 bg-[url('/assets/images/about/about_top.jpg')] bg-cover bg-center flex flex-col justify-center relative px-5 md:px-8 lg:px-12 xl:px-20 py-8">
                <div className="absolute inset-0 bg-primary-blue/10 backdrop-blur-[1px]"></div>
                <h1 className="text-4xl md:text-5xl font-black text-white relative z-10 font-sora tracking-tight leading-tight">
                    Know <br /> More About Us
                </h1>
            </div>
            
            <div className="bg-transparent py-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full px-5 md:px-8 lg:px-12 xl:px-20">
                <div className="w-full md:w-1/2 text-start">
                    <Typography variant="h2" className="font-sora font-black text-gray-900 text-3xl mb-4 tracking-tight">
                        About Us
                    </Typography>
                    <Typography className="text-gray-600 text-base font-semibold leading-relaxed text-justify">
                        Notion Insurance Broker Pvt. Ltd. (INDIA) is fast upcoming Insurance Broker from central India & are duly licensed from IRDAI (Insurance Regulatory and Development Authority of India). With our dedicated team of Insurance professionals, we cater tailor-made policies to our valued customers in accordance to their risk, which is not only cost effective but provides wider coverage for indemnification.
                    </Typography>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="h-80 w-full rounded-[24px] shadow-2xl object-cover border border-slate-100 hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        src="/assets/images/about/about-us.webp"
                        alt="About Us representation"
                    />
                </div>
            </div>
        </div>
    )
}

export default Information;