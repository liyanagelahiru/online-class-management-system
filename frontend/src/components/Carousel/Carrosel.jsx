import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); // Change main image every 3 seconds (adjust as needed)

      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <div className="relative w-full overflow-hidden">
         <div className="flex w-full">
            {images.map((image, index) => (
               <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className={`w-full absolute transition-opacity duration-1000 ${
                     index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
               />
            ))}
         </div>
         <div className="absolute bottom-0 left-0 w-full flex justify-center">
            {images.map((image, index) => (
               <div
                  key={index}
                  className={`w-4 h-4 bg-gray-500 rounded-full mx-2 cursor-pointer ${
                     index === currentIndex ? 'bg-white' : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}></div>
            ))}
         </div>
      </div>
   );
};

export default Carousel;
