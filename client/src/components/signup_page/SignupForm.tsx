export default function SignupForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Sign up functionality would be implemented here!');
  };

  const handleGoogleSignIn = () => {
    alert('Google sign-in would be implemented here!');
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex flex-col justify-center py-4">
      <div className="text-center mb-6 sm:mb-8 lg:mb-10 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333F72] mb-2 lg:mb-3">Start Learning</h2>
        <p className="text-[#333F72] opacity-70 text-sm sm:text-base md:text-lg font-medium">Create your free account</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-3 sm:mb-4 md:mb-5 w-full">
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            className="w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 border-2 border-[#333F72]/20 rounded-full text-sm sm:text-base transition-all outline-none bg-white/80 backdrop-blur-sm focus:border-[#E56E0C] focus:shadow-[0_0_0_3px_rgba(229,110,12,0.1)] focus:bg-white/95"
          />
        </div>
        <div className="mb-3 sm:mb-4 md:mb-5 w-full">
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            className="w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 border-2 border-[#333F72]/20 rounded-full text-sm sm:text-base transition-all outline-none bg-white/80 backdrop-blur-sm focus:border-[#E56E0C] focus:shadow-[0_0_0_3px_rgba(229,110,12,0.1)] focus:bg-white/95"
          />
        </div>
        <div className="mb-4 sm:mb-5 md:mb-6 w-full">
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="w-full py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 border-2 border-[#333F72]/20 rounded-full text-sm sm:text-base transition-all outline-none bg-white/80 backdrop-blur-sm focus:border-[#E56E0C] focus:shadow-[0_0_0_3px_rgba(229,110,12,0.1)] focus:bg-white/95"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2.5 sm:py-3 md:py-4 bg-[#E56E0C] text-white border-none rounded-full text-sm sm:text-base md:text-lg font-semibold cursor-pointer transition-all mt-2 hover:bg-[#d46310] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(229,110,12,0.3)]"
        >
          Start Free Trial
        </button>
      </form>

      <div className="text-center my-4 sm:my-6 md:my-8 text-gray-400 relative">
        <span className="relative z-10 bg-transparent px-4 text-xs sm:text-sm md:text-base">Or sign up with</span>
        <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gray-200"></div>
        <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gray-200"></div>
      </div>

      <button 
        onClick={handleGoogleSignIn}
        className="w-full py-2.5 sm:py-3 md:py-4 bg-white/80 backdrop-blur-sm border-2 border-[#333F72]/20 rounded-full text-xs sm:text-sm md:text-base font-medium cursor-pointer transition-all flex items-center justify-center gap-2 sm:gap-3 hover:border-[#333F72] hover:bg-white/95 hover:shadow-[0_2px_8px_rgba(51,63,114,0.1)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <div className="text-center mt-4 sm:mt-6 md:mt-8 text-gray-500 text-xs sm:text-sm md:text-base">
        Already have an account? <a href="#" className="text-[#E56E0C] font-semibold hover:underline">Sign In</a>
      </div>
    </div>
  );
}
