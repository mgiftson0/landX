import Hero from "../components/Hero";
import Header from "../components/Header";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Testimonials from "../components/Testimonials";
import Card5 from "../components/Card5";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="hide-on-mobile">
        <Header />
        <Hero />
        <div className="mt-10">
          <Card1 />
        </div>
        <div className="mt-10">
          <Card2 />
        </div>
        <div className="mt-10">
          <Card3 />
          <div className="mt-10">
            <Card4 />
          </div>
          <div className="mt-10">
            <Testimonials />
          </div>
          <div className="mt-10">
            <Card5 />
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
      <div className="mobile-message">
        {/* <div className="warning-icon"></div> */}
      </div>
    </div>
  );
};

export default Home;
