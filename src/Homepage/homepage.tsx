import React from 'react';
import { Menu, BookOpen, Award, Clock, CheckCircle, ChevronRight, BarChart } from 'lucide-react';
import logo from './assets/ONIGIRI.svg'; // Adjust the path based on your folder structure
const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ONIGIRI Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-[#14274E]">ONIGIRI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#14274E] hover:text-[#14274E]/80">Courses</a>
            <a href="#" className="text-[#14274E] hover:text-[#14274E]/80">Learning Path</a>
            <a href="#" className="text-[#14274E] hover:text-[#14274E]/80">Resources</a>
            <a href="#" className="text-[#14274E] hover:text-[#14274E]/80">Success Stories</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-[#14274E] hover:text-[#14274E]/80">
              Log In
            </button>
            <button className="px-4 py-2 text-[#ECE7E2] bg-[#14274E] rounded-lg hover:bg-[#14274E]/90">
              Start Learning
            </button>
            <Menu className="block md:hidden w-6 h-6 text-[#14274E]" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#ECE7E2]">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-[#14274E]/10 text-[#14274E] rounded-full">
                Powered by Kouyou Institute
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#14274E] leading-tight">
                Master Japanese
                <span className="block mt-2">Your Way</span>
              </h1>
              <p className="mt-6 text-xl text-[#14274E]/80">
                Complete offline-first Japanese learning system developed by the Kouyou Institute. 
                Join 50,000+ successful learners on their journey to fluency.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-6 py-3 text-[#ECE7E2] bg-[#14274E] rounded-lg hover:bg-[#14274E]/90">
                  Start Free Trial
                </button>
                <button className="px-6 py-3 text-[#14274E] bg-[#14274E]/10 rounded-lg hover:bg-[#14274E]/20">
                  View Learning Paths
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#14274E]">95%</div>
                  <div className="text-sm text-[#14274E]/70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#14274E]">50K+</div>
                  <div className="text-sm text-[#14274E]/70">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#14274E]">100%</div>
                  <div className="text-sm text-[#14274E]/70">Offline Access</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#14274E]/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Japanese Learning Materials"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-stone-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-[#14274E]">Comprehensive Japanese Learning</h2>
          <p className="mt-4 text-xl text-center text-[#14274E]/70">Choose your level and follow a structured learning path</p>
          
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <div key={level} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#14274E]">{level}</h3>
                  <Award className="w-8 h-8 text-[#14274E]" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[#14274E]/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grammar Course</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#14274E]/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Vocabulary & Kanji</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#14274E]/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reading Practice</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#14274E]/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Speaking Practice</span>
                  </div>
                </div>
                <button className="flex items-center justify-center w-full px-4 py-3 mt-6 text-[#14274E] border border-[#14274E] rounded-lg hover:bg-[#14274E]/10">
                  Start {level} Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Features */}
      <section className="py-20 bg-[#ECE7E2]">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-6">
              <Clock className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Flexible Learning
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Study at your own pace with our offline-first learning system.
              </p>
            </div>
            <div className="p-6">
              <BarChart className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Progress Tracking
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Monitor your improvement with regular assessments and detailed analytics.
              </p>
            </div>
            <div className="p-6">
              <BookOpen className="w-12 h-12 text-[#14274E]" />
              <h3 className="mt-4 text-xl font-semibold text-[#14274E]">
                Kouyou Method
              </h3>
              <p className="mt-2 text-[#14274E]/70">
                Learn with the proven methodology developed by Kouyou Institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-50">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="p-12 bg-white rounded-3xl shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#14274E]">
                Ready to Start Your Japanese Journey?
              </h2>
              <p className="mt-4 text-xl text-[#14274E]/70">
                Get full access to all courses and materials, online and offline
              </p>
              <div className="mt-8 space-y-4">
                <button className="w-full sm:w-auto px-8 py-4 text-[#ECE7E2] bg-[#14274E] rounded-lg hover:bg-[#14274E]/90">
                  Start 7-Day Free Trial
                </button>
                <p className="text-sm text-[#14274E]/50">
                  ✓ No credit card required  ✓ Cancel anytime  ✓ All levels included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;