import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button,Typography } from "@material-tailwind/react";
import { RxCross2 } from 'react-icons/rx';
import Tabs from "./ProductTabs";
const InsuranceModel = ({ open, handleOpen }) => {
  const [category, setCategory] = useState('generalInsurance');

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  return (
   
    <Dialog open={open}  size={"lg"} className="dialogBox overflow-hidden h-[80%]   w-full my-2" handler={handleOpen}>
      <DialogHeader className="py-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-semibold">More Products</h1>
          <span
            onClick={handleOpen}
            className="p-2 font-bold rounded-full bg-orange-100 text-lg cursor-pointer">
            <RxCross2 />
          </span>
        </div>
      </DialogHeader >
      <DialogBody className="h-[33rem] lg:h-[31rem]  py-1 px-2 overflow-y-scroll">
      <Tabs/>
      </DialogBody>
     
    </Dialog>
   
  )
}

export default InsuranceModel
