import AboutImage from '../assets/AboutImage.png'; 
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.about-content', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.about-image', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: true,
    });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center about-content">
        <h2 className="text-3xl font-bold mb-4 mt-24">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We offer revolutionary solutions <br /> to industry problems. Join the Landx <br/>  community and experience the benefits <br/>of company optimization today!
        </p>
      </div>
      <img src={AboutImage} alt="About Us" className="w-2/3 md:w-1/2 mx-auto about-image" />
    </section>
  );
};

export default About;
