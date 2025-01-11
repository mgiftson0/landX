import Card2Image from '../assets/Card2Image.png'; // Make sure to replace with the actual path to your image

const Card3 = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="flex justify-center items-center bg-transparent">
        {/* Card Container */}
        <div className="flex bg-transparent w-full max-w-[1200px] mx-auto p-8 rounded-2xl">
          
          {/* Left Section - Image */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={Card2Image}
              alt="Data Security"
              className="w-full h-auto rounded-lg"
              style={{ maxWidth: '150%' }} // Increased image size
            />
          </div>

          {/* Right Section - Text and Button */}
          <div className="w-1/2 pl-12 flex flex-col justify-center text-left"> 
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              All Your Work is Safe With Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We take your data security seriously, which is why we use advanced encryption protocols to protect your files in the cloud. Your data is safe and secure with us.
            </p>
            <button className="w-48 px-6 py-3 border-2 border-black text-black bg-transparent rounded-lg hover:bg-black hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card3;
