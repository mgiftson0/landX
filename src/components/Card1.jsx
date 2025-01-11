import Card1Image from '../assets/Card1Image.png';

const Card1 = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="relative flex justify-center items-center">
        {/* Hidden Bottom Card with Shadow */}
        <div
          className="absolute w-[1000px] min-h-[500px] rounded-2xl border-b-4 border-gray-300 opacity-50 shadow-lg"
          style={{ zIndex: 0 }}
        ></div>
        
        {/* Top Card */}
        <div
          className="relative w-[1200px] min-h-[460px] bg-white rounded-2xl shadow-xl flex p-10"
          style={{ zIndex: 1 }}
        >
          {/* Left Section */}
          <div className="w-1/2 mt-8"> {/* Added margin top */}
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              introducing <br/> good solutions
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-4">
              Join our community and experience <br/> the amazing benefits today.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              try for free
            </button>
          </div>
          
          {/* Right Section with Image */}
          <div className="w-1/2 relative">
            <div className="absolute -top-20 right-0">
              <img
                src={Card1Image}
                alt="Project Showcase"
                className="w-[600px] h-auto rounded-lg" // Increased image size
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;