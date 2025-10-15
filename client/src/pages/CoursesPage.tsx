import { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';

type CourseStatus = 'all' | 'in-progress' | 'available' | 'owned' | 'change-log' | 'paths';

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  tier: string;
  difficulty: 'Beginner' | 'Medium' | 'Advanced';
  category: 'Grammar' | 'Reading' | 'Kanji' | 'Conversation' | 'General';
  sections: number;
  duration: string;
  status: 'available' | 'in-progress' | 'locked' | 'owned';
  lessonsCompleted?: number;
  totalLessons: number;
  progress?: number;
  requirements?: string;
  isNew?: boolean;
}

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<CourseStatus>('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Intro to Japanese Grammar',
      description: 'Learn fundamental Japanese grammar patterns and sentence structure',
      level: 'N5',
      tier: 'Tier 0',
      difficulty: 'Beginner',
      category: 'Grammar',
      sections: 8,
      duration: '2 hours',
      status: 'available',
      totalLessons: 15,
      isNew: true
    },
    {
      id: '2',
      title: 'Reading Comprehension',
      description: 'Improve your reading skills with Japanese texts and passages',
      level: 'N4',
      tier: 'Tier II',
      difficulty: 'Medium',
      category: 'Reading',
      sections: 12,
      duration: '4 hours',
      status: 'in-progress',
      lessonsCompleted: 8,
      totalLessons: 12,
      progress: 67
    },
    {
      id: '3',
      title: 'Kanji Mastery',
      description: 'Learn Japanese characters and their meanings systematically',
      level: 'N3',
      tier: 'Tier III',
      difficulty: 'Advanced',
      category: 'Kanji',
      sections: 15,
      duration: '6 hours',
      status: 'in-progress',
      lessonsCompleted: 156,
      totalLessons: 300,
      progress: 52
    },
    {
      id: '4',
      title: 'JLPT N3 Preparation',
      description: 'Comprehensive JLPT N3 preparation course with practice tests',
      level: 'N3',
      tier: 'Tier III',
      difficulty: 'Advanced',
      category: 'General',
      sections: 20,
      duration: '8 hours',
      status: 'available',
      totalLessons: 30,
      isNew: true
    },
    {
      id: '5',
      title: 'Conversation Practice',
      description: 'Practice speaking and listening skills with native speakers',
      level: 'N4',
      tier: 'Tier II',
      difficulty: 'Medium',
      category: 'Conversation',
      sections: 10,
      duration: '3 hours',
      status: 'in-progress',
      lessonsCompleted: 5,
      totalLessons: 18,
      progress: 28
    },
    {
      id: '6',
      title: 'Advanced Kanji Studies',
      description: 'Master complex Japanese characters and advanced readings',
      level: 'N2',
      tier: 'Tier IV',
      difficulty: 'Advanced',
      category: 'Kanji',
      sections: 18,
      duration: '10 hours',
      status: 'locked',
      totalLessons: 25,
      requirements: 'N3 Certificate'
    },
    {
      id: '7',
      title: 'Business Japanese',
      description: 'Professional Japanese for business contexts and workplace communication',
      level: 'N2',
      tier: 'Tier IV',
      difficulty: 'Advanced',
      category: 'General',
      sections: 14,
      duration: '7 hours',
      status: 'locked',
      totalLessons: 20,
      requirements: 'Complete N3 Grammar Module'
    },
    {
      id: '8',
      title: 'Vocabulary Builder',
      description: 'Expand your Japanese vocabulary systematically with spaced repetition',
      level: 'N4',
      tier: 'Tier II',
      difficulty: 'Medium',
      category: 'General',
      sections: 16,
      duration: '5 hours',
      status: 'available',
      totalLessons: 25
    }
  ];

  const filteredCourses = courses.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'in-progress') return course.status === 'in-progress';
    if (activeTab === 'available') return course.status === 'available';
    if (activeTab === 'owned') return course.status === 'owned';
    if (activeTab === 'change-log') return false; // Special case for change log
    return true;
  });

  const sidebarItems = [
    {
      section: 'Modules',
      icon: '≡',
      items: [
        { id: 'all', label: 'All Modules', icon: '□', count: courses.length, isActive: false },
        { id: 'in-progress', label: 'In-Progress Modules', icon: '↻', count: courses.filter(c => c.status === 'in-progress').length, isActive: false },
        { id: 'available', label: 'Available Modules', icon: '+', count: courses.filter(c => c.status === 'available').length, isActive: false },
        { id: 'owned', label: 'Owned Modules', icon: '✓', count: courses.filter(c => c.status === 'owned').length, isActive: false },
        { id: 'change-log', label: 'Change Log', icon: '≡', count: null, isActive: true }
      ]
    },
    {
      section: 'Paths',
      icon: '◊',
      items: [
        { id: 'paths', label: 'Learning Paths', icon: '◊', count: null, isActive: false }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Grammar': return 'bg-blue-100 text-blue-800';
      case 'Reading': return 'bg-purple-100 text-purple-800';
      case 'Kanji': return 'bg-orange-100 text-orange-800';
      case 'Conversation': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderCourseCard = (course: Course) => {
    const isLocked = course.status === 'locked';
    const isInProgress = course.status === 'in-progress';

    return (
      <div key={course.id} className={`bg-white rounded-xl border-2 transition-all duration-200 hover:shadow-xl relative overflow-hidden flex flex-col h-96 ${
        isLocked ? 'border-gray-300 opacity-75' : 'border-[#333F72]/20 hover:border-[#E56E0C]/50'
      }`}>
        {/* Course Graphic/Header - Bigger Image */}
        <div className="relative h-56 bg-gradient-to-br from-[#333F72] to-[#2a3459] p-4 flex-shrink-0">
          {/* NEW Badge */}
          {course.isNew && (
            <div className="absolute top-3 left-3 bg-[#E56E0C] text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              NEW
              </div>
          )}
          
          {/* Heart Icon */}
          <div className="absolute top-3 right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">♥</span>
              </div>
            </div>
            
        {/* Course Content - Flexible middle section */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Course Title */}
          <h3 className={`font-semibold text-xl mb-4 leading-tight ${isLocked ? 'text-gray-500' : 'text-[#333F72]'}`}>
            {course.title}
          </h3>

          {/* Course Tags - All in one line */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#333F72] text-white px-3 py-1.5 rounded-full text-xs font-medium">
              {course.tier}
            </span>
            <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
              {course.difficulty}
            </span>
            <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
              {course.category}
            </span>
            <span className="text-[#333F72]/60 text-xs px-3 py-1.5 bg-[#faf5ef] rounded-full">{course.sections} Sections</span>
            <span className="text-[#333F72]/60 text-xs px-3 py-1.5 bg-[#faf5ef] rounded-full">{course.duration}</span>
            </div>
            
          {/* Spacer to push bottom content down */}
          <div className="flex-1"></div>

          {/* Bottom Action Area - Always at bottom */}
          <div className="mt-auto">
            {/* Bottom Action Area */}
            {isLocked && course.requirements ? (
              /* Locked Course Layout - Unlocks For on left, Button on right */
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#333F72]/70 text-sm font-medium">Unlocks For</span>
                  <button 
                    className="text-[#E56E0C] font-semibold text-sm hover:underline cursor-pointer transition-colors"
                    onClick={() => {
                      // Link to terms and conditions for unlocking
                      window.open('/terms-and-conditions#unlock-requirements', '_blank');
                    }}
                  >
                    Complete or Upload
                  </button>
              </div>
                <button className="bg-[#E56E0C] text-white py-2.5 px-5 rounded-xl font-semibold hover:bg-[#d46310] transition-all duration-200 flex-shrink-0 shadow-sm">
                  Unlock
            </button>
          </div>
            ) : (
              /* Regular Course Layout - Progress Bar and Button */
              <div className="flex items-center gap-4">
                {/* Progress Bar - Always show */}
                <div className="flex-1">
                  {isInProgress && course.progress ? (
                    <div className="w-full bg-[#333F72]/10 rounded-full h-2.5">
                      <div className="bg-[#E56E0C] h-2.5 rounded-full transition-all duration-300" 
                           style={{ width: `${course.progress}%` }}></div>
              </div>
                  ) : (
                    <div className="w-full bg-[#333F72]/10 rounded-full h-2.5">
                      <div className="bg-gray-300 h-2.5 rounded-full"></div>
            </div>
                  )}
            </div>
            
                {/* Action Button */}
                <button className={`py-2.5 px-6 rounded-xl font-semibold transition-all duration-200 flex-shrink-0 shadow-sm ${
                  isInProgress
                    ? 'bg-[#333F72] text-white hover:bg-[#2a3459]'
                    : 'bg-[#E56E0C] text-white hover:bg-[#d46310]'
                }`}>
                  {isInProgress ? 'Continue' : 'Start'}
            </button>
          </div>
            )}
        </div>
              </div>
            </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8]">
      <DashboardHeader />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#faf5ef] border-r border-[#333F72]/20 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#333F72] mb-8">Course Library</h1>
            
            {sidebarItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                {/* Section Header */}
                <h2 className="text-lg font-semibold text-[#E56E0C] mb-4">
                  {section.section}
                </h2>
                
                {/* Section Items */}
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as CourseStatus)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.id || item.isActive
                          ? 'bg-[#E56E0C] text-white shadow-sm'
                          : 'text-[#333F72] hover:bg-[#333F72]/10'
                      }`}
                    >
                      <span className="font-medium text-base">{item.label}</span>
                      {item.count !== null && (
                        <span className={`text-sm px-3 py-1 rounded-full font-semibold ${
                          activeTab === item.id || item.isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#333F72]/10 text-[#333F72]'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-[#faf5ef] via-[#f8f3ed] to-[#f5f0e8] p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#333F72] mb-2">
              {activeTab === 'all' && 'All Modules'}
              {activeTab === 'in-progress' && 'In-Progress Modules'}
              {activeTab === 'available' && 'Available Modules'}
              {activeTab === 'owned' && 'Owned Modules'}
              {activeTab === 'change-log' && 'Change Log'}
              {activeTab === 'paths' && 'Learning Paths'}
            </h1>
            <p className="text-[#333F72]/70">
              {activeTab === 'all' && 'Browse all available Japanese learning modules'}
              {activeTab === 'in-progress' && 'Continue your learning journey'}
              {activeTab === 'available' && 'Start new modules to expand your knowledge'}
              {activeTab === 'owned' && 'Modules you have completed or own'}
              {activeTab === 'change-log' && 'Recent updates and improvements'}
              {activeTab === 'paths' && 'Structured learning paths for different goals'}
            </p>
              </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-[#E56E0C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d46310] transition-colors">
                  Upload Certificate
                </button>
            <button className="bg-[#333F72] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a3459] transition-colors">
              View All
                </button>
              </div>

          {/* Content Area */}
          {activeTab === 'change-log' ? (
            <div className="bg-[#faf5ef] rounded-2xl p-8 shadow-md border-2 border-[#333F72]">
              <h2 className="text-2xl font-bold text-[#333F72] mb-6">Recent Updates</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#E56E0C] pl-4">
                  <h3 className="text-lg font-semibold text-[#333F72]">New Grammar Module Added</h3>
                  <p className="text-[#333F72]/60 text-sm">December 15, 2024</p>
                  <p className="text-[#333F72]/70">Added comprehensive N3 grammar patterns with interactive exercises.</p>
                  </div>
                <div className="border-l-4 border-[#333F72] pl-4">
                  <h3 className="text-lg font-semibold text-[#333F72]">Reading Comprehension Updated</h3>
                  <p className="text-[#333F72]/60 text-sm">December 10, 2024</p>
                  <p className="text-[#333F72]/70">Enhanced reading passages with better difficulty progression.</p>
                </div>
                <div className="border-l-4 border-[#E56E0C] pl-4">
                  <h3 className="text-lg font-semibold text-[#333F72]">Kanji Practice Improved</h3>
                  <p className="text-[#333F72]/60 text-sm">December 5, 2024</p>
                  <p className="text-[#333F72]/70">Added stroke order animations and pronunciation guides.</p>
                  </div>
                </div>
                </div>
          ) : activeTab === 'paths' ? (
            <div className="bg-[#faf5ef] rounded-2xl p-8 shadow-md border-2 border-[#333F72]">
              <h2 className="text-2xl font-bold text-[#333F72] mb-6">Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#333F72]/20 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#333F72] mb-3">JLPT N3 Preparation</h3>
                  <p className="text-[#333F72]/70 mb-4">Complete path to JLPT N3 certification</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E56E0C] font-semibold">12 modules</span>
                    <button className="bg-[#E56E0C] text-white px-4 py-2 rounded-lg hover:bg-[#d46310] transition-colors">
                      Start Path
                </button>
              </div>
                  </div>
                <div className="bg-white rounded-xl p-6 border border-[#333F72]/20 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#333F72] mb-3">Business Japanese</h3>
                  <p className="text-[#333F72]/70 mb-4">Professional Japanese for workplace communication</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E56E0C] font-semibold">8 modules</span>
                    <button className="bg-[#E56E0C] text-white px-4 py-2 rounded-lg hover:bg-[#d46310] transition-colors">
                      Start Path
                </button>
              </div>
            </div>
          </div>
        </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(renderCourseCard)}
                </div>
          )}
            </div>
          </div>
    </div>
  );
}
