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
            className="relative w-[1000px] min-h-[360px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center"
            style={{ zIndex: 1 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stacked Card</h2>
            <p className="text-gray-600 text-center px-8">
              This is a stacked card component. The card's height will automatically adjust as content grows.
            </p>
            <p className="text-gray-600 text-center px-8 mt-4">
              Add as much text or content as you want, and the card will expand to accommodate it.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card1;