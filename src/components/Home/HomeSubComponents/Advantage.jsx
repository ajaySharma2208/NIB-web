import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Advantage = () => {
  return (
    <div className="w-full py-7 px-5 md:px-8 lg:px-12 xl:px-20">
      <Card className="max-w-full shadow-none  overflow-hidden">
        <Typography variant="h3" className="text-center " color="blue-gray">
          Our Unique Strengths
        </Typography>
        <Typography
          variant="p"
          color="gray"
          className="text-md font-normal text-center"
        >
          Experience excellence with our tailored solutions and commitment to
          customer satisfaction.
        </Typography>
        <br />
        <CardBody className="grid md:grid-cols-2  pt-10 gap-5 lg:grid-cols-4">
          <Card className="w-full hover:scale-105 transform duration-300 transition-all ease-in-out cursor-pointer rounded-md border h-fit overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none pt-3 h-36 md:h-64 lg:h-48 w-full p-5"
            >
              <img
                src="/assets/images/about/claim.jpg"
                alt="ui/ux review check"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center pt-0">
              <Typography variant="h5" color="blue-gray">
                Claims Assistance
              </Typography>
              <Typography
                variant="p"
                color="gray"
                className="mt-1 text-sm font-normal"
              >
                Easy & Reliable
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full border hover:scale-105 transform duration-300 transition-all ease-in-out cursor-pointer rounded-md h-fit overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none pt-3 h-36 md:h-64 lg:h-48 w-full p-5"
            >
              <img
                src="/assets/images/about/security.avif"
                alt="ui/ux review check"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center pt-0">
              <Typography variant="h5" color="blue-gray">
                Data Security
              </Typography>
              <Typography
                variant="p"
                color="gray"
                className="mt-1 text-sm font-normal"
              >
                Guaranteed
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full border hover:scale-105 transform duration-300 transition-all ease-in-out cursor-pointer rounded-md h-fit overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none pt-3 h-36 md:h-64 lg:h-48 w-full p-5"
            >
              <img
                src="/assets/images/about/best.avif"
                alt="ui/ux review check"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center pt-0">
              <Typography variant="h5" color="blue-gray">
                Best Prices
              </Typography>
              <Typography
                variant="p"
                color="gray"
                className="mt-1 text-sm font-normal"
              >
                in the market
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-full border hover:scale-105 transform duration-300 transition-all ease-in-out cursor-pointer rounded-md h-fit overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none pt-3 h-36 md:h-64 lg:h-48 w-full p-5"
            >
              <img
                src="/assets/images/about/service24.avif"
                alt="ui/ux review check"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center pt-0">
              <Typography variant="h5" color="blue-gray">
                24/7 Support
              </Typography>
              <Typography
                variant="p"
                color="gray"
                className="mt-1 text-sm font-normal"
              >
                Every day of the week
              </Typography>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};

export default Advantage;
