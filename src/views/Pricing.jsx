import Header from '../components/Header';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="mt-16">
        <PricingCard />
      </main>
    </div>
  );
};

export default Pricing;
