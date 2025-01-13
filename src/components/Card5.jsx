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
    <section className="card5-section py-10 bg-gray-100">
      <div className="relative flex justify-center items-center">
        
        {/* Top Card */}
        <div
          className="relative w-[1200px] min-h-[460px] bg-white rounded-2xl flex p-10"
          style={{ zIndex: 1 }}
        >
          {/* Left Section */}
          <div className="card5-left w-1/2 mt-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
            get started <br/> with landx today              </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-4">
             start optimizing your processes today.            </p>
            <button className="card5-button mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              sign up now
            </button>
          </div>
          
          {/* Right Section with Image */}
          <div className="card5-right w-1/2 relative">
            <div className="absolute -top-20 right-0">
              <img
                src={Card1Image}
                alt="Project Showcase"
                className="w-[600px] h-auto rounded-lg"
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