import React from 'react';
import { Button } from '@material-tailwind/react'; // Make sure you have the correct import for Material Tailwind
import { Link } from 'react-router-dom';

const LinkButtons = ({ text, subtext, imgSrc, link }) => {
  return (
  <Link to={link} className="no-underline">
    <Button className={` group rounded-lg relative flex px-1 flex-col md:w-32 md:h-28 max-sm:w-24 max-sm:h-28 w-24 h-24 shadow-md outline-none items-center justify-center overflow-hidden transition-all bg-white hover:scale-105 border border-zinc-200 text-black`}>
      <img loading='lazy' className='h-8 w-8' src={imgSrc} alt={text} />
      <h2 className="font-semibold group-hover:text-blue-800 md:text-sm pt-1 capitalize">{text}</h2>
      <h3 className='md:text-sm font-light text-gray-500 capitalize'>{subtext}</h3>
    </Button>
  </Link>
  )
}

export default LinkButtons