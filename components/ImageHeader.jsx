import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';

const ImageHeader = () => {
  return (
    /* Install pure-react-carousel using -> npm i pure-react-carousel */

    <div className='h-64 w-[75%] sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel slideInterval={5000}>
        <img src='https://tartendown.co.uk/home/93.jpg' alt='...' />
        <img src='https://tartendown.co.uk/home/17.jpg' alt='...' />
        <img src='https://tartendown.co.uk/home/51.jpg' alt='...' />
        <img src='https://tartendown.co.uk/images/map.gif' alt='...' />
        <img src='https://tartendown.co.uk/home/107.jpg' alt='...' />
      </Carousel>
    </div>
  );
};

export default ImageHeader;
