
// import React from "react";
import Header from "./components/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to  Startup</h1>
        <p className="text-xl text-gray-600 mb-8">
          We help you achieve your goals with our amazing services.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </section>
    </>
  );
};

export default Hero;
