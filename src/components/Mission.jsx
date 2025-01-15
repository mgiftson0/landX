import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Mission = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.mission-content', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center mission-content">
        <h2 className="text-3xl font-bold ">Our mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Lando, we are committed to providing excellent services <br/> to our customers and clients and to help them achieve the best outcomes.<br/>  We believe that we can make a positive impact on our community,  industry and the world.<br/>  Our Lando team is dedicated to providing the best possible service and support, <br/>  and we are always looking for ways to improve and innovate.
        </p>
      </div>
    </section>
  );
};

export default Mission;
