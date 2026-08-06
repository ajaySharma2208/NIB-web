import { useEffect, useState } from "react";

import LinkButtons from "../../insuranceModel/LinkButtons";
import {  Typography } from "@material-tailwind/react";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';
const items = [
  {
    text: "Life",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/life-balance2.jpg",
    link: "/term-insurance",
  },
  {
    text: "Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/heartbeat 2.jpg",
    link: "/individual-health-insurance",
  },
  {
    text: "Investment Plans",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/advance.jpg",
    link: "/investment-plans",
  },
  {
    text: "Child",
    subtext: "Savings Plans",
    imgSrc: "/assets/images/Products/piggy-bank.jpg",
    link: "/child-insurance",
  },
  {
    text: "Money Back Plan",
    subtext: "life Plan",
    imgSrc: "/assets/images/Products/freeterm.svg",
    link: "/money-back-policy",
  },
  {
    text: "Employee Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/employee.avif",
    link: "/employee-group-health-insurance",
  },
  {
    text: "Travel",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/airplane.jpg",
    link: "/travel-insurance",
  },
  {
    text: "Fire & Burglary",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/burning-building.avif",
    link: "/fire-insurance",
  },
  {
    text: "Home",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/home.jpg",
    link: "/home-insurance",
  },

  {
    text: "Marine",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/marine.jpg",
    link: "/marine-insurance",
  },
  {
    text: "Taxi",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/general/taxi.webp",
    link: "/taxi-insurance",
  },
  {
    text: "Shop Owner",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/seller.avif",
    link: "/shop-insurance",
  },
  {
    text: "Worker",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/worker.avif",
    link: "/workers-insurance",
  },
  {
    text: "General Liability",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/general-liability.jpg",
    link: "/general-liability-insurance",
  },
  {
    text: "Cyber",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/computer.avif",
    link: "/cyber-insurance",
  },
  {
    text: "Contractor and Machinery",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/contractor.jpg",
    link: "/contractor-plant-machinery-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Doctors",
    imgSrc: "/assets/images/Products/non-general/medical.avif",
    link: "/professional-indemnity-doctors-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Companies",
    imgSrc: "/assets/images/Products/non-general/company.avif",
    link: "//professional-indemnity-companies-insurance",
  },
  {
    text: "Contractor All Risk",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/risk.avif",
    link: "/contractor-risk-insurance",
  },
  {
    text: "Directors & Officers",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/boss.avif",
    link: "/director-officers-insurance",
  },
  {
    text: "Pension",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/pension.jpg",
    link: "/pension-plan",
  },
  {
    text: "ULIP",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/ULIP.jpg",
    link: "/ulip-insurance",
  },
  {
    text: "Critical Care",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/critical.jpg",
    link: "/critical-care-plan",
  },
  {
    text: "1CR Health Cover",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/onecr.jpg",
    link: "/one-cr-health-cover",
  },
  {
    text: "Cancer",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/cancer-ribbon.avif",
    link: "/cancer-insurance",
  },
];
const Products = () => {
  const [columns, setColumns] = useState(3); // Default columns
  const [rows, setRows] = useState(2); // Default rows
  const [slides, setSlides] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  // Function to calculate rows and columns based on screen size
  const calculateGrid = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      // lg: 8 columns, 2 rows
      setColumns(8);
      setRows(2);
    } else if (width >= 1024) {
      // md: 4 columns, 2 rows
      setColumns(7);
      setRows(2);
    } else if (width >= 640) {
      // md: 4 columns, 2 rows
      setColumns(5);
      setRows(2);
    } else {
      // mobile: 3 columns, 2 rows
      setColumns(3);
      setRows(2);
    }
  };

  // Create slides dynamically
  const updateSlides = () => {
    calculateGrid();

    const itemsPerSlide = columns * rows;
    const newSlides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      newSlides.push(items.slice(i, i + itemsPerSlide));
    }
    setSlides(newSlides);
  };

  useEffect(() => {
    updateSlides();

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [columns, rows]);

  return (
    <>
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-2 pt-5 md:pt-10 md:pb-5 text-center"
      >
        OTHER INSURANCE
      </Typography>
      <hr />
      <div className="flex justify-center items-center px-5 md:px-8 lg:px-12 xl:px-20 w-full pt-2  md:pt-10">
      
        <Swiper
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        centeredSlides={true}
        slidesPerView={1}
      loop={true} // enable looping
      speed={1600} // transition duration in ms
      pagination={{
        clickable: true,  
      }}
      modules={[Pagination,Autoplay]}
      className="rounded-xl pb-5"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="grid gap-4 p-3"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {slide.map((item, idx) => (
              <LinkButtons
                key={idx}
                text={item.text}
                subtext={item.subtext}
                imgSrc={item.imgSrc}
                link={item.link}
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
      

    </>
  );
};

export default Products;
