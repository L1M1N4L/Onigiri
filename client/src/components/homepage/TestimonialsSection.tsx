import wave_pattern from "../../assets/wave_pattern.svg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sakura Chen",
      handle: "@sakura_learns",
      role: "JLPT N2 Student",
      avatar: "https://i.pravatar.cc/150?img=1",
      date: "OCT 15, 2023",
      content: "Last night Onigiri showed me the final version of Japanese practice and you don't even realize what awaits you, just wow 🍙",
    },
    {
      name: "Marcus Kim",
      handle: "@marcusjapan",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=12",
      date: "OCT 16, 2023",
      content: "Over the years I've seen many Japanese learning platforms for sale from various publishers, which always felt like an empty promise, but I've never seen anything like Onigiri. It's a learning system that teaches you how to learn. It feels like magic to produce knowledge so fast and easily.",
    },
    {
      name: "Yuki Tanaka",
      handle: "@yukinaka",
      role: "Language Coach",
      avatar: "https://i.pravatar.cc/150?img=5",
      date: "OCT 18, 2023",
      content: "Last night, I was busy with the final version of Onigiri. Absolutely stunning, folks! The best Japanese learning platform I've ever seen! 💯",
    },
    {
      name: "Alex Rodriguez",
      handle: "@alexlearns",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=13",
      date: "OCT 16, 2023",
      content: "A world-class Japanese learning platform is currently underway. I've been fortunate enough to beta test it.\n\nKeep tracking this - it might turn into the perfect study tool for your upcoming JLPT exam or new language learning journey.\n\nStay tuned!",
    },
    {
      name: "Kenji Yamamoto",
      handle: "@kenjiteaches",
      role: "Top-tier Student",
      avatar: "https://i.pravatar.cc/150?img=33",
      date: "OCT 19, 2023",
      content: "For the last few days, I've been testing the latest version of Onigiri. Very detailed and excellent work. Congratulations to the team and the whole Onigiri crew! 🔥",
    },
    {
      name: "Emma Williams",
      handle: "@emma_nihongo",
      role: "Co-founder",
      avatar: "https://i.pravatar.cc/150?img=9",
      date: "OCT 27, 2023",
      content: "I had the incredible opportunity to review the beta version of Onigiri, and let me tell you, it's absolutely mind blowing! You won't believe what's in store, it's beyond just a learning platform. Huge congratulations to the Onigiri team! 🚀",
    },
    {
      name: "Hiroshi Sato",
      handle: "@hiroshi_dev",
      role: "Mid Student",
      avatar: "https://i.pravatar.cc/150?img=14",
      date: "OCT 18, 2023",
      content: "I am one of the lucky ones who tested Onigiri and if you think it's overdue, you are wrong. The team will be the best in the market and when you see the learning platform you will regret if you didn't pre-order 🍙",
    },
    {
      name: "Maya Patel",
      handle: "@maya_learns",
      role: "Mid Student",
      avatar: "https://i.pravatar.cc/150?img=20",
      date: "OCT 26, 2023",
      content: "As an early tester for Onigiri, I had the opportunity to provide direct feedback to the team. I'm impressed by the extensive range of components and the valuable guidelines and inspiration they provide. It's certainly worth waiting! 🎯",
    },
    {
      name: "Takeshi Ito",
      handle: "@takeshiito",
      role: "Mid Student",
      avatar: "https://i.pravatar.cc/150?img=15",
      date: "OCT 16, 2023",
      content: "I am really happy to have the privilege of testing the beta version of Onigiri. You will see that the team have done an outstanding job. A learning platform far beyond your expectations is waiting for you.\n\nOnigiri is coming soon! Don't miss the chance to be a part of this unique Japanese learning platform by pre-ordering.",
    },
    {
      name: "Sophie Martinez",
      handle: "@sophie_jp",
      role: "Co-founder",
      avatar: "https://i.pravatar.cc/150?img=16",
      date: "NOV 10, 2023",
      content: "Every pixel of Onigiri speaks of the team's obsession with excellence. From an early tester's perspective, I can confidently say it's a masterpiece. They made a promise, and they even went beyond their promise!\n\nKudos to the team and everyone involved!",
    },
    {
      name: "Daniel Park",
      handle: "@danpark",
      role: "Mid Student",
      avatar: "https://i.pravatar.cc/150?img=60",
      date: "NOV 27, 2023",
      content: "Fasten your seat belts 🚀\n\nBecause Onigiri offers you a completely different experience!\n\nA great learning system with individually thought out components and variants to make each level easier to use. I think it's the best 🔥",
    },
  ];

  return (
    <section 
      className="py-20 bg-[#faf5ef] relative overflow-hidden"
      style={{backgroundImage: `url(${wave_pattern})`}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ef]/90 to-[#f8f0e6]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#333F72]/10 px-4 py-2 rounded-lg border border-[#333F72]/20">
              <span className="text-[#333F72] text-sm font-medium">📝 Testimonials</span>
            </div>
            
            <h1 className="text-5xl font-bold text-[#333F72] leading-tight">
              What learners say<br/>about the <span className="text-[#E56E0C]">Beta</span>
            </h1>
            
            <p className="text-[#333F72]/70 text-lg">
              Discover what our early beta testers are saying about their experience with Onigiri's revolutionary Japanese learning platform.
            </p>
          </div>

          {/* Right Column - Additional Info & CTA */}
          <div className="space-y-6 pt-20">
            <div>
              <p className="italic mb-4 text-[#333F72]/60 text-lg">Gathering feedback all the time 🎯</p>
              <p className="leading-relaxed text-[#333F72]/70 text-lg">
                Hear from top learners on their experience<br/>
                with the early test of the Beta version.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-[#faf5ef] border-2 border-[#333F72]/20 px-6 py-3 rounded-lg font-medium hover:border-[#333F72] transition-all text-sm text-[#333F72]">
                🍙 Preview
              </button>
              <button className="bg-[#333F72] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1e293b] transition-all flex items-center gap-2 text-sm">
                Buy now
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Masonry Layout */}
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#faf5ef] rounded-2xl p-6 border-2 border-[#333F72]/10 hover:border-[#E56E0C]/30 transition-all duration-300 flex flex-col break-inside-avoid mb-6"
              style={{backgroundImage: `url(${wave_pattern})`}}
            >
              <div className="flex items-start gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#333F72]/20"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#333F72] truncate">{testimonial.name}</span>
                    <svg className="w-4 h-4 text-[#E56E0C] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <p className="text-[#333F72]/60 text-sm truncate">{testimonial.handle}</p>
                </div>
                <span className="text-xs text-[#333F72] bg-[#333F72]/10 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {testimonial.role}
                </span>
              </div>
              
              <p className="text-[#333F72]/80 mb-4 leading-relaxed flex-grow whitespace-pre-line text-sm">
                {testimonial.content}
              </p>
              
              <div className="flex items-center justify-between text-xs pt-4 border-t border-[#333F72]/10">
                <span className="text-[#333F72]/50 uppercase tracking-wide">{testimonial.date}</span>
                <span className="text-[#E56E0C] hover:text-[#ea580c] cursor-pointer font-medium">
                  SEE ON X →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}