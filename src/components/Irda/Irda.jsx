import React from 'react';

const Irda = () => {
  const imagePath = '/assets/images/about/irda.jpg'; // Replace 'your-image.jpg' with your actual image name

  return (
    <div>
      <style>
        {`
          .irda-image-container {
            width: 100%;
            max-width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .irda-image-container img {
            width: 100%;
            max-width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          /* Mobile View */
          @media (max-width: 768px) {
            .irda-image-container {
              padding: 10px;
            }

            .irda-image-container img {
              object-fit: contain;
            }
          }

          /* Desktop View */
          @media (min-width: 769px) {
            .irda-image-container img {
              object-fit: cover;
            }
          }

          /* Large Desktop View */
          @media (min-width: 1200px) {
            .irda-image-container {
              max-width: 1200px;
              margin: 0 auto;
            }
          }
        `}
      </style>

      <div className="irda-image-container">
        <img src={imagePath} alt="Irda Image" />
      </div>
    </div>
  );
};

export default Irda;

