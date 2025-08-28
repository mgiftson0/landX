import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card1Image from '../assets/Card1Image.png';

const Card1 = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card1-section', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card1-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal('.card1-right', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal('.card1-button', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  return (
    <section className="card1-section py-10 bg-gray-100">
      <div className="relative flex justify-center items-center px-4 sm:px-6">
        {/* Hidden Bottom Card with Shadow */}
        <div
          className="absolute w-full max-w-[1000px] min-h-[300px] sm:min-h-[500px] rounded-2xl border-b-4 border-gray-300 opacity-50 shadow-lg"
          style={{ zIndex: 0 }}
        ></div>
        
        {/* Top Card */}
        <div
          className="relative w-full max-w-[1200px] min-h-[300px] sm:min-h-[460px] bg-white rounded-2xl shadow-xl flex flex-col sm:flex-row p-6 sm:p-10"
          style={{ zIndex: 1 }}
        >
          {/* Left Section */}
          <div className="card1-left w-full sm:w-1/2 mt-4 sm:mt-8">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              introducing <br/> good solutions
            </h2>
            <p className="text-gray-600 text-base sm:text-xl leading-relaxed mb-4">
              Join our community and experience <br/> the amazing benefits today.
            </p>
            <button className="card1-button mt-6 sm:mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
              try for free
            </button>
          </div>
          
          {/* Right Section with Image */}
          <div className="card1-right w-full sm:w-1/2 relative mt-6 sm:mt-0">
            <div className="sm:absolute sm:-top-20 sm:right-0 flex justify-center sm:block">
              <img
                src={Card1Image}
                alt="Project Showcase"
                className="w-full max-w-[300px] sm:max-w-none sm:w-[600px] h-auto rounded-lg mx-auto sm:mx-0"
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;