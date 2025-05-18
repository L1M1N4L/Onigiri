import React, { useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { CheckCircle, ChevronRight, Star, Award, BookOpen, Users, Clock, Zap, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      title: 'Complete JLPT Curriculum',
      description: 'Access to all JLPT levels (N5-N1) with comprehensive study materials',
      icon: BookOpen
    },
    {
      title: 'Practice Tests & Simulations',
      description: 'Full-length practice tests and section-specific simulations',
      icon: Award
    },
    {
      title: 'Study Schedule Planner',
      description: 'Personalized study schedules and progress tracking',
      icon: Clock
    },
    {
      title: 'Community Support',
      description: 'Join our community of Japanese learners for support and practice',
      icon: Users
    },
    {
      title: 'Certificate Verification',
      description: 'Skip prerequisites by verifying your existing JLPT certificates',
      icon: Star
    },
    {
      title: 'Regular Updates',
      description: 'New content and features added regularly',
      icon: Zap
    }
  ];

  const plans = [
    {
      name: 'Monthly',
      price: billingCycle === 'monthly' ? 19.99 : 199.99,
      period: billingCycle === 'monthly' ? 'month' : 'year',
      description: 'Perfect for flexible learning',
      features: [
        { text: 'Access to all JLPT courses', icon: BookOpen },
        { text: 'Practice tests and simulations', icon: Award },
        { text: 'Study schedule planner', icon: Clock },
        { text: 'Community access', icon: Users },
        { text: 'Certificate verification', icon: Star },
        { text: 'Regular content updates', icon: Zap }
      ],
      popular: false
    },
    {
      name: 'Yearly',
      price: billingCycle === 'monthly' ? 199.99 : 199.99,
      period: 'year',
      description: 'Best value for dedicated learners',
      features: [
        { text: 'Everything in Monthly plan', icon: BookOpen },
        { text: '2 months free', icon: Award },
        { text: 'Priority support', icon: Users },
        { text: 'Early access to new features', icon: Zap },
        { text: 'Exclusive study materials', icon: Star },
        { text: 'Progress analytics', icon: Clock }
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      <UserSidebar />
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header with Quick Actions */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#14274E] mb-1">Simple, Transparent Pricing</h1>
                <p className="text-sm text-[#14274E]/70">Choose your plan and start your Japanese learning journey</p>
              </div>
              <div className="bg-white rounded-lg p-1 shadow-sm inline-flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                    billingCycle === 'monthly'
                      ? 'bg-[#14274E] text-white'
                      : 'text-[#14274E] hover:bg-[#14274E]/5'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                    billingCycle === 'yearly'
                      ? 'bg-[#14274E] text-white'
                      : 'text-[#14274E] hover:bg-[#14274E]/5'
                  }`}
                >
                  Yearly
                  <span className="ml-1.5 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pricing Cards */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                      plan.popular ? 'ring-2 ring-[#14274E]' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-[#14274E] text-white text-center py-1 rounded-t-xl text-xs font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-5">
                      <div className="mb-4">
                        <h2 className="text-lg font-bold text-[#14274E] mb-1">{plan.name}</h2>
                        <p className="text-xs text-[#14274E]/70">{plan.description}</p>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-[#14274E]">${plan.price}</span>
                          <span className="text-sm text-[#14274E]/60">/{plan.period}</span>
                        </div>
                        {plan.name === 'Yearly' && (
                          <p className="text-xs text-green-600 mt-1">Save $40 compared to monthly</p>
                        )}
                      </div>
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <feature.icon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#14274E]/70">{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition flex items-center justify-center gap-2 ${
                          plan.popular
                            ? 'bg-[#14274E] text-white hover:bg-[#1a3a6e]'
                            : 'bg-[#14274E]/10 text-[#14274E] hover:bg-[#14274E]/20'
                        }`}
                      >
                        Get Started
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar with FAQ and Info */}
              <div className="space-y-4">
                {/* Quick Info */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#14274E] mb-1">What's Included</h3>
                      <p className="text-xs text-[#14274E]/70">
                        All plans include access to our complete JLPT curriculum, practice tests, and community features.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#14274E]/70">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>7-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#14274E]/70">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#14274E]/70">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>No hidden fees</span>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#14274E] mb-3">Common Questions</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium text-[#14274E] mb-1">Can I cancel anytime?</h4>
                      <p className="text-xs text-[#14274E]/70">Yes, cancel anytime. Access continues until the end of your billing period.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-[#14274E] mb-1">Have a JLPT certificate?</h4>
                      <p className="text-xs text-[#14274E]/70">Verify your certificate to skip prerequisites. Verification takes 24 hours.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-[#14274E] mb-1">Need a refund?</h4>
                      <p className="text-xs text-[#14274E]/70">7-day money-back guarantee, no questions asked.</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#14274E] rounded-xl p-4 text-white">
                  <h3 className="text-sm font-semibold mb-2">Ready to Start?</h3>
                  <p className="text-xs text-white/80 mb-3">
                    Join thousands of students learning Japanese with our comprehensive JLPT curriculum.
                  </p>
                  <Link
                    to="/courses"
                    className="block w-full bg-white text-[#14274E] text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-white/90 transition"
                  >
                    View Available Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing; 