import React from 'react';
import ExternalLinkButton from './animata/shining-button';

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background Pattern - Enlarged and Full Coverage */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
        {/* U-Shaped Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left Side Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/pic1.png" alt="Laboratory samples" className="w-full h-full object-cover" />
            </div>
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg ml-10">
              <img src="/images/pic3.png" alt="Cryogenic storage" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 px-4 md:px-8 lg:px-16 text-center flex flex-col justify-center items-center min-h-[400px] lg:min-h-[600px]">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-gray-800 mb-6 md:mb-8 leading-tight">
              Your trusted cyro shipper for<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>assisted reproduction
            </h1>
            <div>
              <ExternalLinkButton />
            </div>
          </div>

          {/* Right Side Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/pic2.png" alt="Cryogenic process" className="w-full h-full object-cover" />
            </div>
            <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/pic5.png" alt="Sample container" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Center Image - Hidden on mobile and tablet */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="/images/pic4.png" alt="Laboratory work" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;