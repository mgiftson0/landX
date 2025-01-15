import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const PricingCard = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.pricing-card', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      interval: 200,
      reset: true,
    });

    sr.reveal('.pricing-header', {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 100,
      reset: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center text-center p-6">
      <h2 className="pricing-header text-3xl font-bold mb-4 mt-24">Pricing</h2>
      <p className="mb-12">
        Our pricing is not expensive, but it&apos;s not cheap either,
        <br /> it&apos;s exactly what it should be.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
        {/* Basic Plan */}
        <div className="pricing-card bg-white p-8 rounded-lg shadow-md h-[320px] w-[260px] flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-600 text-left">
              Basic
            </h3>
            <div className="mt-8">
              <p className="text-5xl font-bold text-gray-800">
                <span className="text-sm block">$</span>
                7<span className="text-base font-medium text-gray-600">/month</span>
              </p>
              <p className="mt-4 text-gray-600 text-sm">
                For individuals and small teams
              </p>
            </div>
          </div>
          <button className="w-full border py-2 rounded-lg hover:bg-blue-100 transition duration-300">
            Get Started with Basic
          </button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card bg-white p-8 rounded-lg shadow-xl h-[360px] w-[280px] flex flex-col justify-between -mt-5 relative z-10">
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-600 text-left">
              Pro
            </h3>
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <div className="mt-8">
              <p className="text-5xl font-bold text-gray-800">
                <span className="text-sm block">$</span>
                19<span className="text-base font-medium text-gray-600">/month</span>
              </p>
              <p className="mt-4 text-gray-600 text-sm">
                For startups and growing businesses
              </p>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started with Pro
          </button>
        </div>

        {/* Business Plan */}
        <div className="pricing-card bg-white p-8 rounded-lg shadow-md h-[320px] w-[260px] flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-600 text-left">
              Business
            </h3>
            <div className="mt-8">
              <p className="text-5xl font-bold text-gray-800">
                <span className="text-sm block">$</span>
                30<span className="text-base font-medium text-gray-600">/month</span>
              </p>
              <p className="mt-4 text-gray-600 text-sm">
                For organizations with advanced needs
              </p>
            </div>
          </div>
          <button className="w-full border py-2 rounded-lg hover:bg-blue-100 transition duration-300">
            Get Started with Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;