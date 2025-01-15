import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Features = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.feature-plan', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      interval: 200,
      reset: true,
    });
  }, []);

  const featuresData = {
    Basic: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
    ],
    Pro: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
      "Real-time Collaboration",
      "Automated Workflows",
    ],
    Business: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
      "Real-time Collaboration",
      "Automated Workflows",
      "Analytics Dashboard",
      "SLA Management",
    ],
  };

  const CheckIcon = () => (
    <svg
      className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ minWidth: '16px' }}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Compare Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {Object.entries(featuresData).map(([plan, features], index) => (
            <div key={index} className="feature-plan flex flex-col items-center">
              <h3 className="text-xl font-semibold text-black mb-4 text-center">{plan}</h3>
              <hr className="mb-4 border-t-2 border-gray-300 w-1/2" />
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-black text-sm">
                    <CheckIcon />
                    <span className="mt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;