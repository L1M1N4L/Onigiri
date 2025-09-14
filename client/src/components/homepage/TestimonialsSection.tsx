import wave_pattern from "../../assets/wave_pattern.svg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "JLPT N2 Passed",
      avatar: "👩‍💼",
      content: "Onigiri made JLPT prep actually enjoyable! The interactive lessons and community support helped me pass N2 in just 6 months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Business Professional",
      avatar: "👨‍💻",
      content: "I needed Japanese for work, and Onigiri's practical approach got me conversational faster than any other method I tried.",
      rating: 5
    },
    {
      name: "Yuki Tanaka",
      role: "University Student",
      avatar: "👩‍🎓",
      content: "The gamified learning system kept me motivated daily. I've never been this consistent with language learning before!",
      rating: 5
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-[#faf5ef] to-[#f8f0e6] relative"
      style={{backgroundImage: `url(${wave_pattern})`}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ef]/90 to-[#f8f0e6]/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333F72] mb-6">
            What Our Learners Say
          </h2>
          <p className="text-xl text-[#333F72]/70 max-w-3xl mx-auto">
            Join thousands of successful Japanese learners who've transformed their language journey with Onigiri.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E56E0C]/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-[#333F72] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-[#333F72]">{testimonial.name}</div>
                  <div className="text-[#333F72]/70 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl">⭐</span>
            <span className="font-bold text-[#333F72]">4.9/5</span>
            <span className="text-[#333F72]/70">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
