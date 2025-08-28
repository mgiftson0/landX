import { useEffect } from 'react';
import heroImage from '../assets/heroImage.png';
import Sponsors from './Sponsors';
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.hero-text', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.hero-image', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.hero-buttons', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 400,
      reset: true,
    });
  }, []);

  return (
    <>
      <section className="hero-section min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-between px-4 py-4 sm:py-10 space-y-2 lg:space-y-0 sm:px-6 lg:px-10 lg:py-0">
        {/* Right side - Image - Comes first on mobile */}
        <div className="hero-image w-full lg:w-1/2 px-2 sm:px-6 lg:px-0 order-first lg:order-last lg:mb-0">
          <img
            src={heroImage}
            alt="Project Showcase"
            className="w-full h-auto rounded-lg mx-auto max-w-[260px] sm:max-w-md md:max-w-lg lg:max-w-full"
          />
        </div>

        {/* Left side - Text Content */}
        <div className="hero-text w-full lg:w-1/2 lg:pr-10 text-center lg:text-left">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-semibold">
              30 Days Free Trial
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold mb-2 lg:mb-6">
            the best way to showcase your project
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 lg:mb-8 max-w-md sm:max-w-xl mx-auto lg:mx-0">
            we help you achieve your goals with our amazing services.
          </p>
          <div className="hero-buttons flex flex-row gap-2 justify-center lg:justify-start">
            <button className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              try for free
            </button>
            <button className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              see how it works
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <Sponsors />
    </>
  );
};

export default Hero;