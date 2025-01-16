import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import heroImage from '../assets/heroImage.png';

const Team = () => {
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sarah Johnson",
      role: "CEO & Founder"
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      name: "Michael Chen",
      role: "Product Manager"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      name: "Emily Davis",
      role: "Lead Designer"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      name: "David Wilson",
      role: "Tech Lead"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      name: "Jessica Lee",
      role: "Marketing Director"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      name: "Robert Taylor",
      role: "Software Engineer"
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      name: "Anna Martinez",
      role: "UX Researcher"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "James Brown",
      role: "Product Designer"
    }
  ];

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

    sr.reveal('.profile-card', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-center gap-14 mb-20">
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

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Team</h2>
        <p className="text-gray-600">Meet the people behind our magical product</p>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="profile-card flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;