import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card1Image from '../assets/Card1Image.png';

const Card5 = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card5-section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card5-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal('.card5-right', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal('.card5-button', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  return (
    <section className="card5-section py-8 sm:py-10 bg-gray-100 px-4 sm:px-6">
      <div className="relative flex justify-center items-center">
        
        {/* Top Card */}
        <div
          className="relative w-full max-w-[1200px] min-h-[300px] sm:min-h-[460px] bg-white rounded-2xl flex flex-col sm:flex-row p-6 sm:p-10"
          style={{ zIndex: 1 }}
        >
          {/* Left Section */}
          <div className="card5-left w-full sm:w-1/2 mt-4 sm:mt-8 order-2 sm:order-1">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">
              get started <br/> with landx today
            </h2>
            <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-4 text-center sm:text-left">
              start optimizing your processes today.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="card5-button mt-6 sm:mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
                sign up now
              </button>
            </div>
          </div>
          
          {/* Right Section with Image */}
          <div className="card5-right w-full sm:w-1/2 relative order-1 sm:order-2 mb-6 sm:mb-0">
            <div className="sm:absolute sm:-top-20 sm:right-0 flex justify-center">
              <img
                src={Card1Image}
                alt="Project Showcase"
                className="w-full max-w-[300px] sm:w-[600px] h-auto rounded-lg mx-auto"
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card5;