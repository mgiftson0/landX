import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card3Image from '../assets/Card3Image.png'; 

const Card3 = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card3-text', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card3-image', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card3-button', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  return (
    <section className="py-16 bg-transparent">
      <div className="flex justify-center items-center bg-transparent">
        {/* Card Container */}
        <div className="flex bg-transparent w-full max-w-[1200px] mx-auto p-8 rounded-2xl">
          
          {/* Left Section - Text and Button */}
          <div className="card3-text w-1/2 pr-8 flex flex-col justify-center text-left">
            <p className="text-lg text-gray-600 mb-2">
              -COSTSAVER
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              cost saving in <br/> a smart way
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              powerful tool that helps you reduce costs and save money on your business operations. with advanced analytics and optimization algorithms, costsaver analyzes your existing workflows and identifies areas for improvement.
            </p>
            <button className="card3-button w-32 px-4 py-2 border-2 border-black text-black bg-transparent rounded-lg hover:bg-black hover:text-white transition-colors">
              try now
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="card3-image flex-shrink-0 w-1/2">
            <img
              src={Card3Image}
              alt="Data Security"
              className="w-full h-auto rounded-lg scale-110" 
              style={{ maxWidth: '150%' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card3;
