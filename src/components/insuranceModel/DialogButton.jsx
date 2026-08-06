import React from "react";
import { Button } from "@material-tailwind/react";

const DialogButton = ({ handleOpen }) => {
  return (
    <Button onClick={handleOpen}  className={`rounded-lg  px-1 relative flex md:w-32 md:h-28 flex-col max-sm:w-24 max-sm:h-28 w-24 h-24 shadow-xl outline-none items-center justify-center overflow-hidden transition-all bg-white hover:scale-105 border border-zinc-200 text-black `}>
     <img className='w-8 h-8' src="assets/images/Products/more.svg" alt="More Insurance" />
      <span className="font-semibold md:text-sm capitalize">More</span>
      <span className='md:text-sm font-light text-gray-400 capitalize'>Insurance</span>
   </Button>
  
  )
}

export default DialogButton