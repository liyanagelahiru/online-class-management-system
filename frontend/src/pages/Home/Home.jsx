const Home = () => {
   return (
      <div className="py-2.5">
         <div className="container bg-silver-mist">
            {' '}
            {/* Set height: h-[calc(100vh-120px)]*/}
            <div className="flex justify-center ">
               <div className="carousel w-4/5">
                  <div id="slide1" className="carousel-item relative w-full">
                     <img
                        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                        className="w-full"
                     />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                           ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                           ❯
                        </a>
                     </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                     <img
                        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full"
                     />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                           ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                           ❯
                        </a>
                     </div>
                  </div>

                  <div id="slide3" className="carousel-item relative w-full">
                     <img
                        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                        className="w-full"
                     />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                           ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                           ❯
                        </a>
                     </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                     <img
                        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                        className="w-full"
                     />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                           ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                           ❯
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-silver-mist align-middle">
               Elevate your students&apos; A/L experience. Join our Combined
               Maths learning community!
            </div>
         </div>
      </div>
   );
};

export default Home;
