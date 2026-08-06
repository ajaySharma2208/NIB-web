import React, { useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";

const cards = [
    {
        post: 'Director',
        name: 'Suresh G Malviya',
        experience: '15 years of Experience',
        img: 'assets/images/founder/img4.png'
    },
    {
        post: 'Managing Director',
        name: 'Arun Gupta',
        experience: '10 years of Experience',
        img: 'assets/images/founder/img2.jpg'
    },
    {
        post: 'Director',
        name: 'Kanchan S Malviya',
        experience: '20 years of Experience',
        img: 'assets/images/founder/img1.jpg'
    },
    {
        post: 'Chief Operating Officer(C.O.O)',
        name: 'Avinash Gupta',
        experience: '10+ years of qualitative and enriching experience in service sector.',
        img: 'assets/images/founder/img5.png '
    },
    {
        post: 'Principal Officer & C.E.O',
        name: 'Bharat Shrivastava',
        experience: '18 years of Experience',
        img: 'assets/images/founder/img3.jpg'
    }
];

const Founder = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const nextSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
            setTransitioning(false);
        }, 500); // adjust the transition duration
    };

    const prevSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? cards.length - 1 : prevIndex - 1
            );
            setTransitioning(false);
        }, 500); // adjust the transition duration
    };

    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 3; i++) {
            visibleCards.push(cards[(currentIndex + i) % cards.length]);
        }
        return visibleCards;
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // call nextSlide every 2 seconds
        return () => clearInterval(intervalId); // clean up the interval when the component unmounts
    }, [nextSlide]);

    return (
        <div className="flex flex-col items-center py-10 mt-5 w-full">
            <CardBody className="px-10 text-center">
                <Typography variant="h3" color="blue-gray" className="mb-1">
                    Our Experts
                </Typography>
                <Typography variant="p" color="blue-gray" className="mb-3">
                    With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                </Typography>
            </CardBody>

            <div className="relative w-full px-5">
                {/* Slider */}
                <div
                    className={`flex overflow-hidden justify-center gap-5 mobile1 ${transitioning ? 'transition-all duration-500' : ''}`}
                >
                    {getVisibleCards().map((card, index) => (
                        <Card key={index} className="p-3 mx-3 bg-gray-50 md:w-[300px] img_card_new">
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    className="h-72 w-full object-cover rounded-xl hover:scale-125 transition-transform duration-150"
                                    src={card.img}
                                    alt={card.name}
                                />
                            </div>
                            <CardBody className="px-2 p-2 flex flex-col mb-0">
                                <Typography variant="h6" color="blue-gray">
                                    <i>{card.post}</i>
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className='py-2'>
                                    {card.name}
                                </Typography>
                               
                            </CardBody>
                        </Card>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-5">
                    <button
                        className="text-3xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>
                    <button
                        className="text-3xl p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Founder;