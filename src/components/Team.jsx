import heroImage from '../assets/heroImage.png';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Team = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.team-text', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.team-image', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-center gap-14">
        <div className="text-left team-text">
          <h2 className="text-4xl font-bold leading-tight">
            Let&apos;s start <br />
            working <br/> more <br />
            efficiently <br/> today!
          </h2>
        </div>
        <div className="text-center team-image">
          <img 
            src={heroImage} 
            alt="HeroImage"
            className="max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;