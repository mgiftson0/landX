import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Sponsors = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.sponsors-section', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 600, 
      reset: true, 
    });
  }, []);

  const sponsorLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Netflix_2015_logo.svg",
      alt: "Netflix",
    },
  ];

  return (
    <section className="sponsors-section py-10 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500">
          Trusted by individuals and teams at the world&apos;s best companies
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsorLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-3 sm:h-4 lg:h-5 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;