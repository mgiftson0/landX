import Header from '../components/Header';
import PricingCard from '../components/PricingCard';
import Features from '../components/Features';

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mt-16">
        <PricingCard />
        <Features />
      </main>
    </div>
  );
};

export default Pricing;
