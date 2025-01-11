import Hero from "../components/Hero";
import Header from "../components/Header";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";


const Home = () => {
  return (
    <div className="bg-gray-100">
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
      </div>
    </div>
  );
};

export default Home;
