import React, { useState } from 'react';

const Example = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + 5) % 5);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % 5);
    };

    const handleSlideClick = (index) => {
        setCurrentIndex(index);
    };

    const images = [
        'https://images.unsplash.com/photo-1726250947679-3d89963934d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://media.istockphoto.com/id/1495937010/photo/ayrshire-wildlife-at-sunset-deer-jellyfish.webp?a=1&s=612x612&w=0&k=20&c=d7Jj2iCp_omSvIfwhX_Hq2fXdkAUMFhJ0RmkWxJRj1I=',
        'https://media.istockphoto.com/id/1318098450/photo/jeju-island-beach-sunset.webp?a=1&s=612x612&w=0&k=20&c=6dIxbHq5ftYyXUrvgd0uQQsCvJxPo0B9MZfS4O6gW10=',
        'https://images.unsplash.com/photo-1726828581304-1bd8a2b90246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1725489891089-5960671a3433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    ];
    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
                {Array.from({ length: 5 }, (_, index) => (
                    <div
                        key={index}
                        className={`hidden duration-700 ease-in-out ${currentIndex === index ? 'block' : ''}`}
                        data-carousel-item-active={currentIndex === index}
                    >
                        <img
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            width="100%"
                            height="100%"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {Array.from({ length: 5 }, (_, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${currentIndex === index ? 'block' : 'hidden'}`}
                        data-carousel-item-active={currentIndex === index}
                    >
                        <img
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            width="100%"
                            height="100%"
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrevClick}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNextClick}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l4 4-4 4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Example;