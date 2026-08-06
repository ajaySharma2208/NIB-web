import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ModalBox = ({ text, imgSrc, link }) => {
  return (
    <Link to={link} className="no-underline">
    <Card className="lg:w-24 transition-transform duration-300 ease-in-out transform hover:-translate-y-3 xl:w-28 px-1 h-24 rounded-none  shadow-none border-r flex flex-col justify-center">
    {/* <CardHeader floated={false} className="h-20"> */}
    <div className="w-full flex justify-center align-middle">

      <img src={imgSrc} alt={text} className="h-10 w-10 justify-center" />
    </div>
    {/* </CardHeader> */}
    <CardBody className="text-center py-1 p-0">
      <Typography variant="p" className="font-normal text-sm" color="blue-gray" >
        {text}
      </Typography>
     
    </CardBody>
  
  </Card>
    </Link>
  )
}

export default ModalBox