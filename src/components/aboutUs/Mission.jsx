import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";


const Mission = () => {
    const [activeTab, setActiveTab] = useState("ourMission");
    const data = [
        {
            label: "Our Mission",

            value: "ourMission",
            desc: (
                <div
                    className={`flex-col ourMission flex gap-2 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>"Our Endeavour is to formulate risk-based insurance program by conducting insurance audits & selecting the best combination of insurance coverages at an optimum cost of the customers."</p>
                </div>
            ),
        },
        {
            label: "Our vision",
            value: "ourVission",
            desc: (
                <div
                    className={`ourVission flex flex-wrap max-sm:gap-2 max-sm:p-5 items-start justify-between w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>"Our vision is to set the standard of excellence among Insurance providers by being innovative, being financially strong, and exceeding customer expectations. We will attract and retain the very best employees and POSP (Point of Sales Persons) to help us achieve this goal."</p>
                </div>
            ),
        },
        {
            label: "Our Goal",
            value: "ourGoal",
            desc: (
                <div
                    className={`flex-col ourGoal flex gap-10 max-sm:gap-2 max-sm:p-5 items-start justify-center w-full px-5 py-2 max-sm:px-5`}
                >
                    <p>We use our knowledge to help clients optimize their insurability and reduce costs across the full spectrum of risk. The upside is the advantage of risk well managed.</p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full px-5 md:px-8 lg:px-12 xl:px-20 py-6">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-2xl p-8 md:p-10 w-full flex flex-col items-center">
                <Tabs value={activeTab} className="w-full flex flex-col items-center justify-center">
                    <TabsHeader
                        className="rounded-none border-b border-gray-100 bg-transparent max-w-2xl w-full"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-primary-blue shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value 
                                    ? "text-primary-blue font-black font-sora text-base md:text-xl pb-3 transition-colors duration-205" 
                                    : "font-bold font-sora text-gray-400 text-base md:text-xl pb-3 transition-colors duration-205"}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="mt-6 w-full max-w-3xl">
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value} className="text-gray-600 text-base md:text-lg font-semibold leading-relaxed px-0 text-center">
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default Mission;
