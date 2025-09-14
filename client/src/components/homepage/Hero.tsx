import { useEffect } from 'react'
import Title from "./Title"
import Subtitle from "./Subtitle"
import StyledButton from "./StyledButton"
import wave_pattern from "../../assets/wave_pattern.svg"


const TrustBadge = () => (
  <div className="flex items-center gap-3 mt-8">
    <div className="flex -space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">J</div>
      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">M</div>
      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">A</div>
      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">K</div>
      <div className="w-10 h-10 bg-[#333F72] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">+</div>
    </div>
    <p className="text-[#333F72]/60 text-sm">
      Trusted by 25K+ Japanese learners worldwide
    </p>
  </div>
);

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-parallax="hero"]') as HTMLElement;
      const containerElement = document.querySelector('[data-parallax="container"]') as HTMLElement;
      const videoElement = document.querySelector('[data-parallax="video"]') as HTMLElement;
      const textElements = document.querySelectorAll('[data-parallax="text"]') as NodeListOf<HTMLElement>;
      
      if (heroSection && containerElement && videoElement) {
        const rect = heroSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress based on when hero starts leaving viewport
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)));
        
        // Synchronized scaling: both container and video scale together
        const sharedScale = 1 + (scrollProgress * 0.2); // Both scale up to 1.5x
        
        // Subtle fade effect - keeps minimum 30% opacity so it never disappears

        
        // Shared vertical translation for synchronized movement
        const translateY = scrollProgress * 80; // Move up as you scroll
        
        // Apply same transforms to both container and video
        containerElement.style.transform = `scale(${sharedScale}) translateY(-${translateY}px)`;
        
        // Video gets same transform as container for synchronized movement
        videoElement.style.transform = `scale(1) translateY(0px)`;
        
        // Text elements move at different speeds for layered effect
        textElements.forEach((element, index) => {
          const textTranslateY = translateY * (0.3 + (index * 0.1));
          element.style.transform = `translateY(-${textTranslateY}px)`;
        });
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <div 
      className="w-screen min-h-screen bg-[#faf5ef] relative overflow-hidden"
      style={{backgroundImage: `url(${wave_pattern})`}}
      data-parallax="hero"
    >
      {/* Background Elements - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-20 min-h-screen">


        
         {/* Hero Section */}
         <div className="text-center space-y-8 mb-20" data-parallax="text">
           
           <div className="flex justify-center">
             <Title>
               Master Japanese with <br/> 
               <span className="text-[#E56E0C] relative">
                 ir-rice-istible
                 <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                   <path d="M5 8C60 4 180 1 295 8" stroke="#E56E0C" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                 </svg>
               </span> learning!
             </Title>
           </div>
           
           <div className="flex justify-center">
             <Subtitle>
               Transform your Japanese study journey with Onigiri's interactive platform. From JLPT prep to daily conversation, we make learning addictive with gamified lessons, real-world practice, and a supportive community.
             </Subtitle>
           </div>
          
           {/* CTA Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" data-parallax="text">
             <StyledButton>Start Learning Free</StyledButton>
             <button className="px-10 py-5 border-2 border-[#333F72]/20 text-[#333F72] rounded-tl-3xl rounded-br-3xl hover:border-[#333F72] transition-all duration-300 font-semibold text-lg">
               Watch Demo
             </button>
           </div>
          
          {/* Trust Badge */}
          <div className="flex justify-center" data-parallax="text">
            <TrustBadge />
          </div>
        </div>
        
         {/* Visual Demo Section */}
         <div className="relative max-w-5xl mx-auto">
           
           {/* Main Demo Container - Uxcel-style scaling */}
           <div 
             className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform-gpu transition-transform duration-75 ease-out"
             style={{
               transform: 'scale(1) translateY(0px)',
               willChange: 'transform, opacity',
               transformOrigin: 'center center'
             }}
             data-parallax="container"
           >
             
             {/* Browser Window Header */}
             <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#333F72]/10">
               <div className="flex gap-2">
                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
               </div>
               <div className="flex-1 bg-[#333F72]/5 rounded-lg px-4 py-2 text-center">
                 <span className="text-[#333F72]/60 text-sm">onigiri-app.com/learn</span>
               </div>
             </div>
             
             {/* Video Container with Dramatic Parallax Effect */}
             <div 
               className="relative w-full h-[500px] rounded-2xl overflow-hidden transform-gpu transition-transform duration-75 ease-out"
               style={{
                 transform: 'scale(1) translateY(0px)',
                 willChange: 'transform',
                 transformOrigin: 'center center'
               }}
               data-parallax="video"
             >
               {/* Placeholder for your video */}
               <div className="w-full h-full bg-gradient-to-br from-[#333F72]/20 to-[#E56E0C]/20 flex items-center justify-center">
                 <div className="text-center">
                   <div className="w-20 h-20 bg-[#E56E0C] rounded-full flex items-center justify-center mb-4 mx-auto">
                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </div>
                   <p className="text-[#333F72] font-medium text-lg">Your Demo Video Here</p>
                   <p className="text-[#333F72]/60 text-sm mt-2">Replace this placeholder with your video</p>
                 </div>
               </div>
               
               {/* Video overlay for controls */}
               <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300 cursor-pointer">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                     <svg className="w-6 h-6 text-[#E56E0C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
        
      </div>
    </div>
  );
}