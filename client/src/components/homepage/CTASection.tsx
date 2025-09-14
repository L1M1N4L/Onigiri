import StyledButton from "./StyledButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#333F72] to-[#2a3459] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#333F72]/90 to-[#2a3459]/90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Master Japanese?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of learners who've transformed their Japanese skills with Onigiri. 
              Start your journey today and make learning addictive!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <StyledButton>Start Learning Free</StyledButton>
            <button className="px-8 py-4 border-2 border-white text-white rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-[#333F72] transition-all duration-300 font-medium">
              View Pricing
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-green-400">✓</span>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-green-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-green-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
