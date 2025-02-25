import React from "react";
import {
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  BarChart,
  Users,
  Globe,
  BookOpenCheck,
  Laptop,
} from "lucide-react";
import Navigation from "./components/Navigation";
import NavContainer from "./components/NavContainer";
import Content from "./components/Content";
import Hero from "./components/Hero";
import HomeContainer from "./components/HomeContainer";
import HeroGrid from "./components/HeroGrid";
import HeroContent from "./components/HeroContent";

interface CourseLevel {
  level: string;
  description: string;
  features: string[];
}

interface PlatFeatures {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Homepage: React.FC = () => {
  const courseLevels: CourseLevel[] = [
    {
      level: "Beginner",
      description: "Master the basics of Japanese language",
      features: [
        "Hiragana & Katakana",
        "Basic Grammar",
        "Essential Vocabulary",
        "Simple Conversations",
      ],
    },
    {
      level: "Intermediate",
      description: "Expand your Japanese abilities",
      features: [
        "Common Kanji",
        "Complex Grammar",
        "Business Japanese",
        "Cultural Context",
      ],
    },
    {
      level: "Advanced",
      description: "Achieve native-like proficiency",
      features: [
        "Advanced Kanji",
        "Nuanced Expression",
        "Academic Japanese",
        "Professional Writing",
      ],
    },
  ];

  const platformFeatures: PlatFeatures[] = [
    {
      icon: Globe,
      title: "Access Anywhere",
      description: "Learn on any device with our responsive platform",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Connect with fellow learners and native speakers",
    },
    {
      icon: BookOpenCheck,
      title: "Proven Method",
      description: "Curriculum designed by Kouyou Institute experts",
    },
    {
      icon: Laptop,
      title: "Interactive Learning",
      description: "Engage with multimedia lessons and exercises",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation>
        <NavContainer>
          <Content />
        </NavContainer>
      </Navigation>

      {/* Hero Section */}
      <Hero>
        <HomeContainer>
          <HeroGrid>
            <HeroContent />
          </HeroGrid>
        </HomeContainer>
      </Hero>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <HomeContainer>
          <h2 className="text-3xl font-bold text-center text-[#14274E]">
            Why Choose ONIGIRI?
          </h2>
          <p className="mt-4 text-xl text-center text-[#14274E]/70">
            Modern e-learning platform meets traditional Japanese expertise
          </p>
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="p-6 text-center">
                <div className="mx-auto w-16 h-16 mb-4 bg-[#14274E]/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#14274E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#14274E]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[#14274E]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <HomeContainer>
          <h2 className="text-3xl font-bold text-center text-[#14274E]">
            Structured Learning Path
          </h2>
          <p className="mt-4 text-xl text-center text-[#14274E]/70">
            Follow our carefully designed curriculum for optimal progress
          </p>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {courseLevels.map((course) => (
              <div
                key={course.level}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#14274E]">
                    {course.level}
                  </h3>
                  <Award className="w-8 h-8 text-[#14274E]" />
                </div>
                <p className="mt-2 text-[#14274E]/70">{course.description}</p>
                <div className="mt-4 space-y-2">
                  {course.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-[#14274E]/70"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center justify-center w-full px-4 py-3 mt-6 text-[#14274E] border border-[#14274E] rounded-lg hover:bg-[#14274E]/10">
                  View Curriculum
                </button>
              </div>
            ))}
          </div>
        </HomeContainer>
      </section>

      {/* Study Features */}
      <section className="py-20 bg-[#ECE7E2]">
        <HomeContainer>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-6">
              <Clock className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Learn at Your Pace
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Access courses 24/7 and progress through lessons at your own
                speed.
              </p>
            </div>
            <div className="p-6">
              <BarChart className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Track Progress
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Monitor your learning journey with detailed analytics and
                achievements.
              </p>
            </div>
            <div className="p-6">
              <BookOpen className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Expert Content
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Learn with materials developed by Kouyou Institute's language
                experts.
              </p>
            </div>
          </div>
        </HomeContainer>
      </section>

      {/* Success Stories & CTA Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-[#ECE7E2]">
        <HomeContainer>
          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl font-bold text-[#14274E] mb-2">95%</div>
              <div className="text-sm text-[#14274E]/70">
                Success Rate on
                <br />
                JLPT N5-N3
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl font-bold text-[#14274E] mb-2">82%</div>
              <div className="text-sm text-[#14274E]/70">
                Success Rate on
                <br />
                JLPT N2-N1
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl font-bold text-[#14274E] mb-2">15K+</div>
              <div className="text-sm text-[#14274E]/70">
                JLPT Certifications
                <br />
                Achieved
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="text-4xl font-bold text-[#14274E] mb-2">50K+</div>
              <div className="text-sm text-[#14274E]/70">
                Active Students
                <br />
                Worldwide
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testimonials Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#14274E] mb-8">
                Learning Outcomes That Speak
              </h2>

              {/* Testimonial Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm transform transition hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 bg-[#14274E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#14274E]">
                        N1
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#14274E]">
                        Akiko Thompson
                      </div>
                      <div className="text-sm text-[#14274E]/70">
                        Achieved N1 • Now working as a Japanese Translator
                      </div>
                    </div>
                  </div>
                  <p className="text-[#14274E]/70">
                    "From N3 to N1 in 14 months. ONIGIRI's advanced courses and
                    Kouyou's teaching methods were key to mastering complex
                    grammar and business Japanese."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm transform transition hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 bg-[#14274E]/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#14274E]">
                        N2
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#14274E]">
                        David Chen
                      </div>
                      <div className="text-sm text-[#14274E]/70">
                        Passed N2 • Enrolled in Japanese University
                      </div>
                    </div>
                  </div>
                  <p className="text-[#14274E]/70">
                    "The structured curriculum and JLPT-focused content helped
                    me achieve N2 in just 10 months. Now I'm confidently
                    pursuing my degree in Tokyo!"
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="bg-[#14274E] rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Join Our Success Stories?
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-400 flex-shrink-0" />
                    <p className="text-white/90">
                      Expert-crafted curriculum by Kouyou Institute's senior
                      instructors
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-400 flex-shrink-0" />
                    <p className="text-white/90">
                      Proven JLPT preparation system with 95% success rate
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-400 flex-shrink-0" />
                    <p className="text-white/90">
                      Personalized learning path from absolute beginner to N1
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full px-8 py-4 bg-white text-[#14274E] rounded-xl font-semibold hover:bg-white/90 transition">
                    Start Your Free Trial
                  </button>
                  <button className="w-full px-8 py-4 bg-transparent border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition">
                    Explore Success Stories
                  </button>
                  <p className="text-sm text-white/70 text-center mt-4">
                    Join 50,000+ learners • No credit card required • Cancel
                    anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HomeContainer>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#14274E] text-white pt-16 pb-8">
        <HomeContainer>
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="src\Homepage\assets\ONIGIRIwhite.svg"
                  alt="ONIGIRI Logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">ONIGIRI</span>
              </div>
              <p className="text-white/70 mb-4">
                Your journey to Japanese fluency starts here. Powered by Kouyou
                Institute's proven methodology.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Learning</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    JLPT Prep
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Learning Paths
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Practice Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Study Groups
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="border-t border-white/10 pt-8 pb-12">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-white/70 mb-4">
                Get the latest updates on new courses and JLPT resources.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
                <button className="px-6 py-2 bg-white text-[#14274E] rounded-lg font-medium hover:bg-white/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/50 text-sm">
                © 2024 ONIGIRI. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/50 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/50 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-white/50 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </HomeContainer>
      </footer>
    </div>
  );
};

export default Homepage;
