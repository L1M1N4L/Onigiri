
export default function LeftPanel() {
  return (
    <div className="left-panel w-full lg:w-1/2 h-[40vh] sm:h-[45vh] md:h-[50vh] lg:min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-12" style={{backgroundImage: `url('/src/assets/bg/Fushimi.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Decorative Patterns */}
      <svg className="absolute bottom-0 left-0 w-full h-2/5 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="white"/>
          <line x1="5" y1="0" x2="5" y2="10" stroke="white" strokeWidth="0.5"/>
          <line x1="0" y1="5" x2="10" y2="5" stroke="white" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)"/>
      </svg>

      <svg className="absolute top-0 right-0 w-2/5 h-1/3 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid2" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="white"/>
          <path d="M 0 4 L 8 4 M 4 0 L 4 8" stroke="white" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid2)"/>
      </svg>


      {/* Content */}
      <div className="relative z-20 text-white max-w-sm sm:max-w-md lg:max-w-lg text-center lg:text-left px-2 sm:px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-6 leading-tight">
          Join Onigiri
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed opacity-95 font-medium">
          Start your JLPT journey with our proven learning system. Join 25,000+ learners who've mastered Japanese with our interactive platform.
        </p>
      </div>

    </div>
  );
}
