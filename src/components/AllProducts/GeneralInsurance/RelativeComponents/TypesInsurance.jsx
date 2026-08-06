import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'; // Adjust according to your imports

function InsuranceTypes({ title, description, insuranceOptions,showButton = true }) {
  return (
    <div className="pt-8">
      <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
        {title}
      </Typography>
      <Typography color="gray" variant='h6' className="mb-10 pt-2 lg:px-20 font-normal text-center">
        {description}
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {insuranceOptions.map((option, index) => (
          <Card key={index} className="mt-6 justify-between xl:w-96 md:hover:scale-105 duration-300">
            <CardBody >
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-8 w-8 text-gray-900"
        >
          
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg> */}
        <svg  className="mb-4 h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.537 2.53391C11.3747 1.82565 12.6012 1.82479 13.4399 2.53188L20.2002 8.23113C20.7073 8.65865 21 9.28812 21 9.95139V19.7499C21 20.7164 20.2165 21.4999 19.25 21.4999H4.75C3.7835 21.4999 3 20.7164 3 19.7499V9.95011C3 9.28795 3.29168 8.6594 3.79734 8.23189L10.537 2.53391ZM15.7837 11.7769C16.0766 11.484 16.0766 11.0091 15.7837 10.7162C15.4908 10.4234 15.0159 10.4234 14.723 10.7163L10.75 14.6894L9.28033 13.2197C8.98744 12.9268 8.51256 12.9268 8.21967 13.2197C7.92678 13.5126 7.92678 13.9875 8.21967 14.2804L10.2197 16.2804C10.3603 16.421 10.5511 16.5 10.75 16.5C10.9489 16.5 11.1397 16.421 11.2803 16.2804L15.7837 11.7769Z" fill="#212121"/>
</svg>
        
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {option.name}
              </Typography>
              <Typography  className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                {option.description}
              </Typography>
            </CardBody>
            {showButton && (
              <CardFooter className="pt-0">
                <Button className="bg-light-blue-700">Check Premium</Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InsuranceTypes;
