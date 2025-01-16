import Header from '../components/Header'; 
import About from '../components/About';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Card5 from '../components/Card5';
import Footer from '../components/Footer';





const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <About />
      <Mission />
      <Team />
      <Card5 />
      <br/>
      <br/>
      <Footer />
    </div>
  ); 
};

export default AboutUs;
