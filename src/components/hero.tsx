import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="container w-full container mx-auto p-6">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-black text-center font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Hello Developer
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          We are building an index for awesome developer portfolios.
        </p>
      </div>
    </div>
  );
};

export default Hero;
