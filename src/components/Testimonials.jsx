import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const testimonialsData = [
    {
      id: 1,
      message:
        "Since implementing Lando, our business has seen significant growth.",
      rating: 5,
      name: "John Doe",
      role: "CEO",
      company: "TechCorp",
    },
    {
      id: 2,
      message: "Lando's tools have revolutionized our workflow!",
      rating: 4,
      name: "Jane Smith",
      role: "Project Manager",
      company: "InnovateX",
    },
    {
      id: 3,
      message: "The best investment we've ever made for our business.",
      rating: 5,
      name: "Michael Brown",
      role: "CTO",
      company: "BuildHub",
    },
  ];
  
  const Testimonials = () => {
    useEffect(() => {
      const sr = ScrollReveal();

      sr.reveal('.testimonials-section', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true,
      });

      sr.reveal('.testimonial-card', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 400,
        interval: 200,
        reset: true,
      });
    }, []);

    return (
      <section className="testimonials-section py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            Testimonials
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6">
            People love what we do and we want to let you know
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[2px] justify-items-center"> 
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white rounded-2xl shadow-lg flex flex-col items-center justify-between w-full max-w-[280px] min-h-[180px] p-4 sm:p-5 mx-auto"
              >
                <p className="text-gray-700 text-xs sm:text-sm text-center mb-3">&ldquo;{testimonial.message}&rdquo;</p>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={`star-${testimonial.id}-${i}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400"
                    >
                      <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77 6.82 21l1.18-6.88-5-4.87 6.91-.99L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h3>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;