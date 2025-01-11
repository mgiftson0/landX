import Hero from "../components/Hero";
import Header from "../components/Header";
import Card1 from "../components/Card1";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <div className="mt-10"> {/* Added margin top to Card1 */}
        <Card1 />
      </div>
    </div>
  );
};

export default Home;
