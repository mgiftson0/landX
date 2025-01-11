const Card1 = () => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="relative flex justify-center items-center">
          {/* Hidden Bottom Card with Shadow */}
          <div
            className="absolute w-[900px] min-h-[400px] rounded-2xl border-b-4 border-gray-300 opacity-50 shadow-lg"
            style={{ zIndex: 0 }}
          ></div>
  
          {/* Top Card */}
          <div
            className="relative w-[1000px] min-h-[360px] bg-white rounded-2xl shadow-xl flex items-center p-8"
            style={{ zIndex: 1 }}
          >
            {/* Left Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                introduction <br/> good solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join our community and experience <br/> the amazing benefits today.
              </p>
              <button className="mt-6 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                try for free
              </button>
            </div>
  
            {/* Right Section with Image */}
            <div className="flex-shrink-0 ml-8">
              <img
                src="https://via.placeholder.com/250" // Replace with the actual image source
                alt="Community"
                className="w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card1;