import React, { useRef, useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { BookOpen, PenTool, CheckCircle, Lock, ChevronRight, Book } from 'lucide-react';

const N5CompleteCourse: React.FC = () => {
  // Mock data for progress and chapters
  const overallProgress = 65; // Example overall progress percentage
  const grammarProgress = 75; // Example grammar section progress
  const writingProgress = 40; // Example writing section progress
  const readingProgress = 20; // Example reading section progress

  const [currentChapter, setCurrentChapter] = useState<typeof chapters[0] | null>(null);
  const currentChapterRef = useRef<HTMLDivElement>(null);
  const [isCurrentChapterVisible, setIsCurrentChapterVisible] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false); // New state to track scroll direction relative to chapter
  const [isButtonVisible, setIsButtonVisible] = useState(false); // State to control button visibility
  const observerRef = useRef<IntersectionObserver | null>(null);

  const chapters = [
    {
      id: 1,
      title: 'Introduction to N5 Grammar',
      description: 'Get an overview of the fundamental grammar concepts covered in JLPT N5.',
      type: 'grammar',
      completed: true,
      requires: [],
    },
    {
      id: 2,
      title: 'Understanding the Japanese Writing Systems',
      description: 'Learn about Hiragana, Katakana, and basic Kanji used in N5.',
      type: 'writing',
      completed: true,
      requires: [],
    },
    {
        id: 3,
        title: 'Particles: は, が, を, に, へ, と, から, まで, で',
        description: 'A deep dive into the function and usage of essential N5 particles.',
        type: 'grammar',
        completed: false,
        requires: [1],
      },
      {
        id: 4,
        title: 'Verb Conjugation: ます-form, ません, ました, ませんでした',
        description: 'Master the basic ます-form conjugation and its negative and past tenses.',
        type: 'grammar',
        completed: false,
        requires: [3, 7],
      },
      {
        id: 5,
        title: 'ぃ-Adjectives and な-Adjectives Usage',
        description: 'Learn how to correctly use and modify both ぃ-adjectives and な-adjectives in various sentence structures.',
        type: 'grammar',
        completed: false,
        requires: [4],
      },
      {
        id: 6,
        title: 'Basic Sentence Structures (AはBです, NにVます)',
        description: 'Understand and practice constructing simple N5 level sentences.',
        type: 'grammar',
        completed: false,
        requires: [5],
      },
      {
        id: 7,
        title: 'Writing Practice: Hiragana and Katakana',
        description: 'Practice writing exercises for Hiragana and Katakana characters.',
        type: 'writing',
        completed: false,
        requires: [2],
      },
      {
        id: 8,
        title: 'Introduction to N5 Kanji',
        description: 'Learn the basics of common N5 Kanji characters and their readings.',
        type: 'writing',
        completed: false,
        requires: [7],
      },
      {
          id: 9,
          title: 'Combining Sentences with て-form',
          description: 'Learn how to connect sentences using the て-form of verbs.',
          type: 'grammar',
          completed: false,
          requires: [4, 7],
      },
      // Mock data for Reading chapters
      {
          id: 10,
          title: 'Introduction to Reading Simple Sentences',
          description: 'Start reading and understanding basic N5 level Japanese sentences.',
          type: 'reading',
          completed: false,
          requires: [6, 8], // Requires completion of basic Grammar and Writing
      },
      {
          id: 11,
          title: 'Understanding Short Paragraphs',
          description: 'Practice reading and comprehending short paragraphs with N5 vocabulary and grammar.',
          type: 'reading',
          completed: false,
          requires: [10],
      }
  ];

  // Function to get icon based on chapter type
  const getChapterIcon = (type: 'grammar' | 'writing' | 'reading') => {
    if (type === 'grammar') {
      return <BookOpen size={24} />;
    } else if (type === 'writing') {
      return <PenTool size={24} />;
    } else if (type === 'reading') {
      return <Book size={24} />;
    }
    return null;
  };

  // Function to check if a chapter is unlocked
  const isChapterUnlocked = (chapterId: number) => {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) return false;

    // A chapter is unlocked if it's completed or if all its prerequisites are completed
    return chapter.completed || chapter.requires.every(reqId => {
      const reqChapter = chapters.find(c => c.id === reqId);
      return reqChapter ? reqChapter.completed : false;
    });
  };

  // Find current chapter after all functions are defined
  useEffect(() => {
    const nextChapter = chapters.find(chapter => isChapterUnlocked(chapter.id) && !chapter.completed);
    setCurrentChapter(nextChapter || null);
  }, []);

  // Auto-scroll to current chapter when it's set
  useEffect(() => {
    if (currentChapter && currentChapterRef.current) {
      // Use setTimeout to allow layout to settle after potential state updates
      const timer = setTimeout(() => {
        currentChapterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100); // Small delay
      return () => clearTimeout(timer);
    }
  }, [currentChapter]);

  // Add scroll event listener to track visibility and scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (currentChapterRef.current) {
        const rect = currentChapterRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsCurrentChapterVisible(isVisible);

        // Set button visibility
        setIsButtonVisible(!isVisible && !!currentChapter); // Show button if not visible AND current chapter exists

        // If not visible, determine if scrolling down past the chapter or up before it
        if (!isVisible) {
          const scrolledBelow = rect.bottom < 0;
          setIsScrollingDown(scrolledBelow);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentChapter]); // Rerun if currentChapter changes

  const scrollToCurrentChapter = () => {
    currentChapterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const getChaptersByType = (type: 'grammar' | 'writing' | 'reading') => {
    return chapters.filter(chapter => chapter.type === type);
  };

  // Find the index of the current chapter for fogging logic
  const currentChapterIndex = currentChapter ? chapters.findIndex(c => c.id === currentChapter.id) : -1;

  return (
    <div className="min-h-screen flex bg-[#F8F9FA]">
      {/* Make sidebar sticky */}
      <div className="sticky top-0 h-screen">
        <UserSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="flex-1 p-8 relative">
          {/* Floating Jump Button */}
          {/* Render the button container always, control visibility and position with state and inline style */}
          <div
            className={`fixed left-1/2 -translate-x-1/2 z-50
              transition-opacity duration-300 transition-[top,bottom] duration-300
              ${isButtonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            style={{
              top: isScrollingDown ? '2rem' : 'auto',
              bottom: isScrollingDown ? 'auto' : '2rem',
            }}
          >
             {/* Only render button content if isButtonVisible is true to prevent interaction when hidden */}
             {isButtonVisible && (
              <button
                onClick={scrollToCurrentChapter}
                className="flex items-center gap-2 px-4 py-3 bg-[#14274E] text-white rounded-full shadow-lg
                  hover:bg-[#1a3a6e] transition-all duration-300 transform hover:scale-105"
              >
                <ChevronRight size={20} className="rotate-90" />
                <span className="font-medium">Jump to Current Chapter</span>
              </button>
            )}
          </div>

          <div className="max-w-7xl mx-auto space-y-8">

            {/* Course Header and Overall Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h1 className="text-2xl font-bold text-[#14274E] mb-2">JLPT N5 Complete Course</h1>
                <p className="text-[#14274E]/70 mb-4">Master the essential grammar, writing, and reading for JLPT N5!</p>

                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#14274E] font-semibold">Overall Course Progress</span>
                    <span className="text-[#14274E] font-bold text-lg">{overallProgress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                        className="bg-[#14274E] h-3 rounded-full transition-all duration-500" 
                        style={{ width: `${overallProgress}%` }}
                    ></div>
                </div>
            </div>

            {/* Section Progress Overview */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {/* Grammar Progress */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <BookOpen size={24} className="text-[#14274E]" />
                        <h3 className="text-lg font-semibold text-[#14274E]">Grammar</h3>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#14274E]/90">Progress</span>
                        <span className="text-sm font-bold text-[#14274E]">{grammarProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#14274E] h-2 rounded-full" style={{ width: `${grammarProgress}%` }}></div>
                    </div>
                </div>
                {/* Writing Progress */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <PenTool size={24} className="text-[#14274E]" />
                        <h3 className="text-lg font-semibold text-[#14274E]">Writing</h3>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#14274E]/90">Progress</span>
                        <span className="text-sm font-bold text-[#14274E]">{writingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#14274E] h-2 rounded-full" style={{ width: `${writingProgress}%` }}></div>
                    </div>
                </div>
                {/* Reading Progress */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                        <Book size={24} className="text-[#14274E]" />
                        <h3 className="text-lg font-semibold text-[#14274E]">Reading</h3>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[#14274E]/90">Progress</span>
                        <span className="text-sm font-bold text-[#14274E]">{readingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#14274E] h-2 rounded-full" style={{ width: `${readingProgress}%` }}></div>
                    </div>
                </div>
            </div>

            {/* Learning Roadmap */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-[#14274E]">Learning Roadmap</h2>
                        {currentChapter && (
                            <button 
                                onClick={() => currentChapterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#14274E]/10 text-[#14274E] rounded-lg text-sm font-medium hover:bg-[#14274E]/20 transition-colors"
                            >
                                <ChevronRight size={16} className="rotate-90" />
                                Jump to Current Chapter
                            </button>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm text-[#14274E]/70">Completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#14274E]"></div>
                            <span className="text-sm text-[#14274E]/70">Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                            <span className="text-sm text-[#14274E]/70">Locked</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Connection Line with Gradient */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14274E]/20 via-[#14274E]/30 to-[#14274E]/20 -translate-x-1/2" />
                    
                    {/* Chapters in Roadmap */}
                    <div className="space-y-12">
                        {chapters.map((chapter, index) => {
                            const unlocked = isChapterUnlocked(chapter.id);
                            const isNextAvailable = unlocked && !chapter.completed;
                            const isCurrentChapter = currentChapter?.id === chapter.id;
                            const prerequisites = chapter.requires.map(reqId => {
                                const reqChapter = chapters.find(c => c.id === reqId);
                                return reqChapter?.title;
                            }).filter(Boolean);

                            // Determine if the chapter should be fogged (more than 3 chapters ahead)
                            const isFogged = currentChapterIndex !== -1 && index > currentChapterIndex + 3;

                            return (
                                <div 
                                    key={chapter.id} 
                                    className={`relative group ${isFogged ? 'chapter-fogged' : ''}`}
                                    ref={isCurrentChapter ? currentChapterRef : null}
                                >
                                    {/* Chapter Card */}
                                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Chapter Content */}
                                        <div className={`flex-1 bg-[#F8F9FA] rounded-xl p-6 shadow-sm transition-all duration-300 
                                            ${isNextAvailable ? 'hover:shadow-md hover:scale-[1.02] cursor-pointer' : ''}
                                            ${chapter.completed ? 'border-2 border-green-500/20' : ''}
                                            ${!unlocked ? 'opacity-75' : ''}
                                            ${isCurrentChapter ? 'ring-2 ring-[#14274E] ring-offset-2' : ''}`}>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`p-3 rounded-lg shadow-sm transition-colors duration-300 ${
                                                    chapter.completed ? 'bg-green-50' : 
                                                    isNextAvailable ? 'bg-white group-hover:bg-[#14274E]/5' : 
                                                    'bg-gray-100'
                                                }`}>
                                                    {chapter.completed ? (
                                                        <CheckCircle size={24} className="text-green-500" />
                                                    ) : (
                                                        getChapterIcon(chapter.type)
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-[#14274E] text-lg">{chapter.title}</h3>
                                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                                            chapter.type === 'grammar' ? 'bg-blue-50 text-blue-600' :
                                                            chapter.type === 'writing' ? 'bg-purple-50 text-purple-600' :
                                                            'bg-green-50 text-green-600'
                                                        }`}>
                                                            {chapter.type.charAt(0).toUpperCase() + chapter.type.slice(1)}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-[#14274E]/70 leading-relaxed mb-2">{chapter.description}</p>
                                                    
                                                    {/* Prerequisites */}
                                                    {prerequisites.length > 0 && !chapter.completed && (
                                                        <div className="text-xs text-[#14274E]/60">
                                                            Requires: {prerequisites.join(', ')}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Action Button */}
                                            {chapter.completed ? (
                                                <div className="flex items-center gap-2 text-green-600 text-sm">
                                                    <CheckCircle size={16} />
                                                    <span>Completed</span>
                                                </div>
                                            ) : isNextAvailable ? (
                                                <button className="w-full mt-2 bg-[#14274E] text-white px-4 py-2 rounded-lg font-semibold 
                                                    hover:bg-[#1a3a6e] transition-colors duration-300 flex items-center justify-center gap-2">
                                                    Start Chapter
                                                    <ChevronRight size={16} />
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-2 text-[#14274E]/50 text-sm">
                                                    <Lock size={14} />
                                                    <span>Complete prerequisites to unlock</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Connection Node with Tooltip */}
                                        <div className="relative z-10 group/node">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold 
                                                transition-transform duration-300 group-hover/node:scale-110 ${
                                                chapter.completed ? 'bg-green-500' :
                                                unlocked ? 'bg-[#14274E]' : 'bg-gray-400'
                                            }`}>
                                                {chapter.completed ? <CheckCircle size={20} /> : index + 1}
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#14274E] text-white px-2 py-1 rounded text-xs
                                                opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                Chapter {index + 1}
                                            </div>
                                        </div>
                                        
                                        {/* Empty Space for Alternating Layout */}
                                        <div className="flex-1" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

          </div>
        </main>
      </div>

      {/* CSS for the fog effect */}
      <style jsx>{`
        .chapter-fogged > div:first-child {
          opacity: 0.3;
          filter: blur(2px);
          pointer-events: none; /* Disable interaction */
        }
      `}</style>
    </div>
  );
};

export default N5CompleteCourse;