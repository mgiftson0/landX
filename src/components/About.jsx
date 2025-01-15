import aboutImage from '../assets/aboutImage.png'; 

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 mt-24">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We offer revolutionary solutions <br /> to industry problems. Join the Landx <br/>  community and experience the benefits <br/>of company optimization today!
        </p>
        <img src={aboutImage} alt="About Us" className="w-3/4 md:w-2/3 mx-auto" />
      </div>
    </section>
  );
};

export default About;
