import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card1Image from '../assets/Card1Image.png';

const Card4 = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.card4-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.card4-step', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      interval: 200, 
      reset: true,
    });
  }, []);

  return (
    <section className="py-16 bg-transparent">
      <div className="relative flex justify-center items-center">
        {/* Hidden Bottom Card with Shadow */}
        <div
          className="absolute w-[1000px] min-h-[520px] rounded-2xl border-b-4 border-gray-300 opacity-50 shadow-lg"
          style={{ zIndex: 0 }}
        ></div>

        {/* Top Card */}
        <div
          className="relative w-[1100px] min-h-[370px] bg-white rounded-2xl shadow-xl flex flex-row p-8"
          style={{ zIndex: 1 }}
        >
          {/* Left Section */}
          <div className="card4-left w-3/5 flex flex-col items-start pr-8">
            <div className="relative -mt-32 w-full">
              <img
                src={Card1Image}
                alt="How to Join"
                className="w-3/4 h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                How to join our community
              </h2>
              <p className="text-gray-600 text-lg mb-4 text-center">
                Just 3 simple steps to optimize your company operations.
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                sign up now
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-2/5 pl-8">
            <div className="card4-step">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Step 1</h2>
              <p className="text-gray-600 text-m mb-8">
                reach out to one of our specialists and have a short introduction session.
              </p>
              {/* Divider Line */}
              <div className="border-t-2 border-gray-300 h-0 mb-8"></div>
            </div>
            <div className="card4-step">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Step 2</h2>
              <p className="text-gray-600 text-m mb-8">
                work with our team to identify the areas where we can help you optimize your workflow.
              </p>
              {/* Divider Line */}
              <div className="border-t-2 border-gray-300 h-0 mb-8"></div>
            </div>
            <div className="card4-step">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Step 3</h2>
              <p className="text-gray-600 text-m">
                implement the recommended solutions and start seeing results immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card4;