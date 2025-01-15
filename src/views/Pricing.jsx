import Header from '../components/Header';
import PricingCard from '../components/PricingCard';
import Features from '../components/Features';
import Questions from '../components/Questions';

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mt-16">
        <PricingCard />
        <Features />
        <Questions />
      </main>
    </div>
  );
};

export default Pricing;
