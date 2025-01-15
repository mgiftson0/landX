const Features = () => {
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
      "Real-Time Collaboration",
      "Automated Workflows",
    ],
    Business: [
      "Process Analysis",
      "Task Management",
      "Time Tracking",
      "Performance Metrics",
      "Customizable Reports",
      "Email Integration",
      "Real-Time Collaboration",
      "Automated Workflows",
      "Analytics Dashboard",
      "SLA Management",
    ],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Features</h2>
          <p className="text-lg text-gray-600">
            Explore the capabilities of each plan to find the perfect match for your needs.
          </p>
          <div className="border-b-2 border-gray-300 w-1/3 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(featuresData).map(([plan, features], index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan}</h3>
              <ul className="space-y-2 text-left">
                {features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    {feature}
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
