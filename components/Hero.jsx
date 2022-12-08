import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className='dark:bg-gray-900'>
        <div className='container mx-auto py-9 md:py-12 lg:py-24'>
          <div className='relative mx-4'>
            <img
              src='https://sentera.com/wp-content/uploads/2022/08/crop-health-monitoring.png'
              alt='A work table with house plants'
              className='w-full h-full hidden lg:block'
            />
            <div className='absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f7fffa] sm:w-8/12'>
                Tartendown Nurseries
              </h1>
              <p className='text-base leading-normal text-[#f7fffa] mt-4 sm:mt-5 sm:w-5/12'>
                Situated in a gorgeous location close to the village of
                Landrake, Tartendown Nurseries flourishes amongst the rolling
                hills with an extensive selection of traditional and exotic
                flowers, plants, shrubs and trees.
              </p>
              {/* <button className='hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700'>
                Explore
              </button> */}
            </div>
            {/* <button className='absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700'>
              Explore
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
