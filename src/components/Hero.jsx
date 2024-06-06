import React from 'react';
import CustomButton from './CustomButton';
import heroImage from '../assets/images/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero text-gray-500">
      <div className="flex-1 pt-10 md:pt-20 lg:pt-36 padding-x md:px-10 lg:px-20">
        <h1 className="hero__title text-4xl md:text-5xl lg:text-5xl font-bold">
        Rent high-quality vehicles with our premium auto rental service!
        </h1>
        <p className="hero__subtitle text-lg md:text-xl lg:text-2xl mt-4 md:mt-6">
        Simplify your auto rental experience with our easy booking system.
        </p>
        <Link to="/Rentals">
        <CustomButton
          title="Explore Rentals"
          containerStyles="bg-primary-blue text-white rounded-full mt-6 md:mt-8 lg:mt-10"
        />        
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img src={heroImage} alt="hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay md:block absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
};

export default Hero;
