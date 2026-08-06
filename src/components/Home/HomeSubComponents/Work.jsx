import { Typography } from '@material-tailwind/react'
import React from 'react'
import { FcBriefcase, FcBusinessman, FcCollaboration, FcDebt, FcSurvey } from 'react-icons/fc'

const Work = () => {
    return (
        <div loading='lazy' className="w-full px-5 md:px-8 lg:px-12 xl:px-20 pt-16 pb-20 bg-[url('/assets/images/workflow/workflow.avif')] bg-cover bg-center bg-no-repeat">
            <Typography variant="h3" className='text-center' color="blue-gray">
                Our Easy Work Process in 4 Steps
            </Typography>
            <Typography variant="p" color="gray" className=" font-normal  text-base text-center">
                Work process
            </Typography>
            <br />
            <div className="grid sm:grid-cols-4 gap-16 sm:gap-8 mt-16">

                <div className="text-center ">
                    <div className="relative w-32 h-32 mx-auto left-2 rounded-full step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon step-icon text-6xl'><FcSurvey /></span>
                        </div>
                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">1</div>

                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6">Choose any insurance</h3>
                    {/* <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, coctetur adipiscing elit.
                    </p> */}
                </div>

                <div className="text-center ">
                    <div className="relative w-32 h-32 mx-auto left-2 rounded-full step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcBusinessman /></span>
                        </div>
                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">2</div>


                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6">Consult with agent</h3>

                </div>

                <div className="text-center ">
                    <div className="relative w-32 h-32 mx-auto left-2 rounded-full step animate-scaleUp">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcCollaboration /></span>
                        </div>
                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">3</div>


                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6">Agent do meeting</h3>

                </div>

                <div className="text-center ">
                    <div className="relative w-32 h-32 mx-auto left-2 rounded-full step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcDebt /></span>
                        </div>

                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">4</div>


                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6"> Get insurance</h3>

                </div>

            </div>
        </div>
    )
}

export default Work