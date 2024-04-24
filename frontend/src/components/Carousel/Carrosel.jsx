import React, { useState } from 'react';

function Carousel() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const slides = [
      {
         imageUrl: 'https://source.unsplash.com/1600x900/?desk',
         title: 'Slide 1'
      },
      {
         imageUrl: 'https://source.unsplash.com/1600x900/?laptop',
         title: 'Slide 2'
      },
      {
         imageUrl: 'https://source.unsplash.com/1600x900/?coffee',
         title: 'Slide 3'
      }
   ];

   const handleNext = () => {
      setCurrentSlide(
         currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
   };

   const handlePrev = () => {
      setCurrentSlide(
         currentSlide === 0 ? slides.length - 1 : currentSlide - 1
      );
   };

   return (
      <div className="relative flex overflow-hidden w-full h-full">
         <div className="absolute inset-0 flex z-10">
            <button
               type="button"
               onClick={handlePrev}
               className="left-0 flex items-center justify-center p-4 focus:outline-none">
               <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.354 1.646a.5.5 0 0 1 0 .708L4.707 8l6.647 6.646a.5.5 0 0 1-.708.708l-8-8a.5.5 0 0 1 0-.708z" />
               </svg>
            </button>
            <button
               type="button"
               onClick={handleNext}
               className="right-0 flex items-center justify-center p-4 focus:outline-none">
               <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.646 1.646a.5.5 0 0 0 0 .708L9.3 8l-6.647 6.646a.5.5 0 0 0 .708.708l8-8a.5.5 0 0 0 0-.708z" />
               </svg>
            </button>
         </div>
         <div className="relative flex w-full h-full">
            {slides.map((slide, slideIndex) => (
               <div
                  key={slide.title}
                  className={`absolute inset-0 transition-ease-out duration-700 transform ${
                     currentSlide === slideIndex
                        ? '-translate-x-0'
                        : '-translate-x-full'
                  } w-full h-full`}>
                  <img
                     className="block w-full h-full object-cover"
                     src={slide.imageUrl}
                     alt={slide.title}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

export default Carousel;

// import React, { useState, useEffect } from 'react';

// const Carousel = ({ images }) => {
//    const [currentIndex, setCurrentIndex] = useState(0);

//    useEffect(() => {
//       const interval = setInterval(() => {
//          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//       }, 3000); // Change main image every 3 seconds (adjust as needed)

//       return () => clearInterval(interval);
//    }, [images.length]);

//    return (
//       <div className="relative w-full overflow-hidden">
//          <div className="flex w-full">
//             {images.map((image, index) => (
//                <img
//                   key={index}
//                   src={image}
//                   alt={`Slide ${index}`}
//                   className={`w-full absolute transition-opacity duration-1000 ${
//                      index === currentIndex ? 'opacity-100' : 'opacity-0'
//                   }`}
//                />
//             ))}
//          </div>
//          <div className="absolute bottom-0 left-0 w-full flex justify-center">
//             {images.map((image, index) => (
//                <div
//                   key={index}
//                   className={`w-4 h-4 bg-gray-500 rounded-full mx-2 cursor-pointer ${
//                      index === currentIndex ? 'bg-white' : ''
//                   }`}
//                   onClick={() => setCurrentIndex(index)}></div>
//             ))}
//          </div>
//       </div>
//    );
// };

// export default Carousel;
