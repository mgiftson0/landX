import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card2Image from '../assets/Card2Image.png';

const Card2 = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card2-image', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card2-text', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });

    sr.reveal('.card2-button', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 600,
      reset: true,
    });
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-transparent">
      <div className="flex justify-center items-center bg-transparent px-4 sm:px-6">
        {/* Card Container */}
        <div className="flex flex-col sm:flex-row bg-transparent w-full max-w-[1200px] mx-auto p-4 sm:p-8 rounded-2xl">
          
          {/* Left Section - Image */}
          <div className="card2-image flex-shrink-0 w-full sm:w-1/2 order-2 sm:order-1 mt-6 sm:mt-0">
            <img
              src={Card2Image}
              alt="Data Security"
              className="w-full h-auto rounded-lg mx-auto"
              style={{ maxWidth: '100%' }} 
            />
          </div>

          {/* Right Section - Text and Button */}
          <div className="card2-text w-full sm:w-1/2 sm:pl-12 flex flex-col justify-center text-center sm:text-left order-1 sm:order-2"> 
            <p className="text-base sm:text-lg text-gray-600 mb-2">
              -SMARTSAVE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              all your work is safe with us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              we take your data security seriously, which is why we use advanced encryption protocols to protect your files in the cloud. Your data is safe and secure with us.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="card2-button w-32 px-4 py-2 border-2 border-black text-black bg-transparent rounded-lg hover:bg-black hover:text-white transition-colors text-sm sm:text-base">
                try now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;