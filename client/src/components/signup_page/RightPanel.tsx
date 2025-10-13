import SignupForm from './SignupForm';

export default function RightPanel() {
  return (
    <div className="w-full lg:w-1/2 h-[60vh] sm:h-[55vh] md:h-[50vh] lg:min-h-screen bg-[#faf5ef] relative p-4 sm:p-6 lg:p-12 flex flex-col justify-center" style={{backgroundImage: `url('../assets/wave_pattern.svg')`}}>
      {/* Pattern Accent */}
      <svg className="absolute top-5 right-5 w-32 h-32 opacity-15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <pattern id="accent" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="#d4a574"/>
          <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#d4a574" strokeWidth="1"/>
        </pattern>
        <rect width="100" height="100" fill="url(#accent)"/>
      </svg>

      <SignupForm />
    </div>
  );
}
