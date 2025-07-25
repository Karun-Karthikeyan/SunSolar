export default function Hero({ title, description }) {
  return (
    <header 
      className="relative h-[340px] sm:h-[420px] md:h-[600px] lg:h-[700px] flex items-center overflow-hidden mt-15 bg-gray-900"
      aria-label="SunSolar Hero Section"
      style={{
        backgroundImage: "url(/assets/banner.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50 dark:block"></div>
      {/* Content */}
      <div className="relative z-10 w-full px-3 py-6 sm:p-8 md:p-10">
        <div className="max-w-7xl mx-auto px-0 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center h-full">
            {/* Left Content - Text */}
          
            {/* Right Content - Text */}
            <div className="text-white w-full max-w-full lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Badge - only on large screens */}
              <div className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Your Solar Journey Starts Here
              </div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight w-full max-w-xs xs:max-w-md sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0 text-white">
                We Connect You with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"> Right Solar Company</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed w-full max-w-xs xs:max-w-md sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0 text-white">
                Find the top best solar company in United States in no time. Get multiple quotes and save thousands on your solar installation.
              </p>
              
              <div className="flex flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-xs sm:max-w-md mx-auto lg:mx-0 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg max-w-[120px] sm:max-w-none w-auto">
                  Find Solar Companies
                </button>
                <button className="border-2 border-gray-300 text-white px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:border-pink-400 hover:text-pink-400 transition-all duration-300 max-w-[120px] sm:max-w-none w-auto">
                  Learn More
                </button>
              </div>
              {/* Trust Indicators - hidden on mobile */}
              <div className="hidden sm:flex items-center gap-6 sm:gap-8 text-xs sm:text-sm text-white justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Verified Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">Free Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white">No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - only on large screens */}
      <div className="hidden lg:absolute lg:bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:text-white lg:flex lg:flex-col lg:items-center lg:gap-2">
        <span className="text-sm text-gray-300">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>
  );
} 