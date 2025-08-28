import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import FAQImage from '../assets/FAQImage.png'; 

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.question-item', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      interval: 200,
      reset: true,
    });

    sr.reveal('.faq-image', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 100,
      reset: true,
    });

    sr.reveal('.faq-header', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 150,
      reset: true,
    });
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    "How does this work?",
    "What are the benefits?",
    "Is it difficult to use?",
    "Can I have custom pricing?",
    "Is there a trial version available?",
    "Where do I sign up?",
  ];

  const answers = [
    "Coming soon: This works by providing a seamless integration of our services with your needs.",
    "Coming soon: The benefits include increased efficiency, cost savings, and improved workflow.",
    "Coming soon: No, it is designed to be user-friendly and intuitive.",
    "Coming soon: Yes, we offer custom pricing for large organizations.",
    "Coming soon: Yes, we offer a trial version for you to test our services.",
    "Coming soon: You can sign up on our website by clicking the 'Sign Up' button.",
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={FAQImage} alt="FAQ" className="faq-image w-1/4 md:w-1/5 mx-auto mb-8" />
        <h2 className="faq-header text-2xl font-bold mb-6">frequently asked <br/> questions</h2>
        <div className="w-full md:w-1/3 mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="question-item mb-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-sm font-semibold">{question}</h3>
                <span>{openQuestion === index ? '▲' : '▼'}</span>
              </div>
              {openQuestion === index && (
                <p className="mt-1 text-gray-600">{answers[index]}</p>
              )}
              <hr className="mt-1 border-t-2 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
