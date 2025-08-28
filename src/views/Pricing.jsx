import Header from '../components/Header';
import PricingCard from '../components/PricingCard';
import Features from '../components/Features';
import Questions from '../components/Questions';
import Card5 from '../components/Card5';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <main className="mt-16, bg-gray-100">
        <Header />
        <PricingCard />
        <Features />
        <Questions />
        <Card5 />
        <br/>
        <br/>
        <Footer />
      </main>
    </div>
    
  );
};

export default Pricing;
