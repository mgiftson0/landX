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
      <section className="hero-section min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-between px-4 py-10 space-y-8 lg:space-y-0 sm:px-6 lg:px-20 sm:py-20 lg:py-0">
        {/* Left side - Text Content */}
        <div className="hero-text w-full lg:w-1/2 lg:pr-10 text-center lg:text-left">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold">
              30 Days Free Trial
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
            the best way to showcase your project
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 max-w-md sm:max-w-xl mx-auto lg:mx-0">
            we help you achieve your goals with our amazing services.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
            <button className="sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              try for free
            </button>
            <button className="sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
              see how it works
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hero-image w-full lg:w-1/2 px-4 sm:px-6 lg:px-0">
          <img
            src={heroImage}
            alt="Project Showcase"
            className="w-full h-auto rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* Sponsors Section */}
      <Sponsors />
    </>
  );
};

export default Hero;
