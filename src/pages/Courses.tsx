import React, { useState, useRef } from 'react';
import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import { BookOpen, Award, Clock, CheckCircle, ChevronRight, Lock, Users, Star, ArrowRight, Upload, Info, AlertCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock user progress - in real app, this would come from user data
  const userProgress = {
    completedLevels: ['n5'],
    verifiedCertificates: ['n4']
  };

  // Available courses data
  const courses = [
    {
      id: 'n5',
      title: 'JLPT N5 Complete Course',
      description: 'Master the basics of Japanese language for JLPT N5.',
      level: 'Beginner',
      duration: '6 months',
      features: [
        'Complete N5 vocabulary (800+ words)',
        'Essential grammar patterns',
        'Basic reading comprehension',
        'Practice tests and simulations',
        'Certificate upon completion'
      ],
      enrolled: false,
      prerequisites: 'None',
      nextLevel: 'N4',
      students: 1243,
      difficulty: 1,
      kanjiCount: '100 kanji',
      grammarPoints: '80 grammar points'
    },
    {
      id: 'n4',
      title: 'JLPT N4 Complete Course',
      description: 'Build upon your N5 knowledge and prepare for JLPT N4.',
      level: 'Intermediate',
      duration: '8 months',
      features: [
        'Complete N4 vocabulary (1,500+ words)',
        'Intermediate grammar patterns',
        'Reading comprehension practice',
        'Full-length practice tests',
        'Certificate upon completion',
        'Access to study materials',
        'Community support'
      ],
      enrolled: false,
      prerequisites: 'N5 certification or equivalent knowledge',
      nextLevel: 'N3',
      students: 856,
      difficulty: 2,
      kanjiCount: '300 kanji',
      grammarPoints: '150 grammar points'
    },
    {
      id: 'n3',
      title: 'JLPT N3 Complete Course',
      description: 'Achieve intermediate Japanese proficiency with JLPT N3.',
      level: 'Upper Intermediate',
      duration: '10 months',
      features: [
        'Complete N3 vocabulary (2,000+ words)',
        'Advanced grammar patterns',
        'Complex reading materials',
        'Comprehensive practice tests',
        'Certificate upon completion',
        'Access to study materials',
        'Community support'
      ],
      enrolled: false,
      prerequisites: 'N4 certification or equivalent knowledge',
      nextLevel: 'N2',
      students: 432,
      difficulty: 3,
      kanjiCount: '650 kanji',
      grammarPoints: '300 grammar points'
    },
    {
      id: 'n2',
      title: 'JLPT N2 Complete Course',
      description: 'Develop advanced Japanese skills for JLPT N2.',
      level: 'Advanced',
      duration: '12 months',
      features: [
        'Complete N2 vocabulary (3,000+ words)',
        'Advanced grammar and expressions',
        'Complex reading comprehension',
        'Business Japanese practice',
        'Certificate upon completion',
        'Access to study materials',
        'Community support'
      ],
      enrolled: false,
      prerequisites: 'N3 certification or equivalent knowledge',
      nextLevel: 'N1',
      students: 245,
      difficulty: 4,
      kanjiCount: '1,000 kanji',
      grammarPoints: '500 grammar points'
    },
    {
      id: 'n1',
      title: 'JLPT N1 Complete Course',
      description: 'Master Japanese at the highest level for JLPT N1.',
      level: 'Expert',
      duration: '14 months',
      features: [
        'Complete N1 vocabulary (4,000+ words)',
        'Master advanced grammar and expressions',
        'Academic and professional reading',
        'Native-level comprehension practice',
        'Certificate upon completion',
        'Access to study materials',
        'Community support'
      ],
      enrolled: false,
      prerequisites: 'N2 certification or equivalent knowledge',
      nextLevel: null,
      students: 128,
      difficulty: 5,
      kanjiCount: '2,000 kanji',
      grammarPoints: '800 grammar points'
    }
  ];

  const filteredCourses = selectedLevel 
    ? courses.filter(course => course.id === selectedLevel)
    : courses;

  const canAccessCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return false;
    
    if (course.prerequisites === 'None') return true;
    
    // Check if user has completed the prerequisite level
    const prerequisiteLevel = course.prerequisites.toLowerCase().split(' ')[0];
    return userProgress.completedLevels.includes(prerequisiteLevel) || 
           userProgress.verifiedCertificates.includes(courseId);
  };

  const handleStartLearning = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    if (course.prerequisites !== 'None' && !canAccessCourse(courseId)) {
      setSelectedCourse(courseId);
      setShowVerificationModal(true);
      setCertificateFile(null);
      setUploadError(null);
    } else {
      // Handle course enrollment
      console.log('Enrolling in course:', courseId);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Please upload a JPG, PNG, or PDF file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setCertificateFile(file);
    setUploadError(null);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Please upload a JPG, PNG, or PDF file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setCertificateFile(file);
    setUploadError(null);
  };

  const handleSubmitVerification = async () => {
    if (!certificateFile || !selectedCourse) return;

    setIsUploading(true);
    setUploadError(null);

    try {
      // Here you would typically upload the file to your server
      // For now, we'll simulate an upload
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock successful verification
      console.log('Certificate uploaded for course:', selectedCourse);
      
      // Close modal and reset state
      setShowVerificationModal(false);
      setSelectedCourse(null);
      setCertificateFile(null);
      
      // In a real app, you would update the user's verified certificates here
      // userProgress.verifiedCertificates.push(selectedCourse);
    } catch (error) {
      setUploadError('Failed to upload certificate. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removeCertificate = () => {
    setCertificateFile(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <div className="min-h-screen flex bg-[#F8F9FA]">
        <UserSidebar />
        <div className="flex-1 flex flex-col">
          <UserHeader />
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header with Quick Actions */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-[#14274E] mb-2">JLPT Courses</h1>
                  <p className="text-[#14274E]/70">Choose your level and start your Japanese learning journey</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowVerificationModal(true)}
                    className="bg-white text-[#14274E] px-4 py-2 rounded-lg font-medium hover:bg-[#14274E]/10 transition flex items-center gap-2 border border-[#14274E]/20"
                  >
                    <Upload size={18} />
                    Verify Certificate
                  </button>
                  <Link 
                    to="/pricing" 
                    className="bg-[#14274E] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a3a6e] transition flex items-center gap-2"
                  >
                    View Pricing
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Level Selection and Course Progression Combined */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-[#14274E]">Course Levels</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedLevel(null)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                        !selectedLevel 
                          ? 'bg-[#14274E] text-white' 
                          : 'bg-gray-100 text-[#14274E] hover:bg-[#14274E]/10'
                      }`}
                    >
                      All Levels
                    </button>
                    {courses.map(course => (
                      <button
                        key={course.id}
                        onClick={() => setSelectedLevel(course.id)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                          selectedLevel === course.id 
                            ? 'bg-[#14274E] text-white' 
                            : 'bg-gray-100 text-[#14274E] hover:bg-[#14274E]/10'
                        }`}
                      >
                        {course.id.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {courses.map((course, index) => (
                    <React.Fragment key={course.id}>
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${
                          index === 0 ? 'bg-[#14274E] text-white' : 'bg-gray-100 text-[#14274E]/40'
                        }`}>
                          {course.id.toUpperCase()}
                        </div>
                        <div className="text-xs text-[#14274E]/60 mt-1 text-center">
                          {course.level}
                        </div>
                      </div>
                      {index < courses.length - 1 && (
                        <div className="flex-1 h-0.5 bg-gray-200 mx-2 relative">
                          <div className={`absolute inset-0 bg-[#14274E] transition-all duration-500`} 
                            style={{ width: index === 0 ? '100%' : '0%' }} 
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Courses Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => {
                  const isAccessible = canAccessCourse(course.id);
                  const isCompleted = userProgress.completedLevels.includes(course.id);
                  const isVerified = userProgress.verifiedCertificates.includes(course.id);

                  return (
                    <div key={course.id} className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group ${
                      !isAccessible && !isCompleted ? 'opacity-75' : ''
                    }`}>
                      {/* Course Header */}
                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h2 className="text-lg font-bold text-[#14274E]">{course.title}</h2>
                              <div className="flex gap-0.5">
                                {[...Array(course.difficulty)].map((_, i) => (
                                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-[#14274E]/70">{course.description}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className="bg-[#14274E]/10 text-[#14274E] px-2 py-1 rounded-full text-xs font-semibold">
                              {course.level}
                            </div>
                            {isCompleted && (
                              <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                <CheckCircle size={12} />
                                Completed
                              </div>
                            )}
                            {isVerified && (
                              <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                <Award size={12} />
                                Verified
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs text-[#14274E]/60">
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users size={14} />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <BookOpen size={14} />
                            <span>{course.kanjiCount}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Award size={14} />
                            <span>{course.grammarPoints}</span>
                          </div>
                        </div>
                      </div>

                      {/* Course Features */}
                      <div className="p-5 border-b border-gray-100">
                        <div className="grid grid-cols-2 gap-2">
                          {course.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-start gap-1.5 text-xs text-[#14274E]/70">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Course Footer */}
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          {course.nextLevel ? (
                            <div className="flex items-center gap-1.5 text-xs text-[#14274E]/60">
                              <Award size={14} />
                              <span>Next: {course.nextLevel}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs text-[#14274E]/60">
                              <Star size={14} className="text-yellow-400 fill-yellow-400" />
                              <span>Highest Level</span>
                            </div>
                          )}
                          {course.prerequisites !== 'None' && !isAccessible && (
                            <div className="text-xs text-red-600 flex items-center gap-1">
                              <Lock size={14} />
                              <span>Requires: {course.prerequisites}</span>
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => handleStartLearning(course.id)}
                          className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition flex items-center justify-center gap-2 group-hover:gap-3 ${
                            isCompleted
                              ? 'bg-green-50 text-green-700 cursor-not-allowed'
                              : !isAccessible
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-[#14274E] text-white hover:bg-[#1a3a6e]'
                          }`}
                          disabled={isCompleted || !isAccessible}
                        >
                          {isCompleted ? (
                            <>
                              <CheckCircle size={16} />
                              Completed
                            </>
                          ) : !isAccessible ? (
                            <>
                              <Lock size={16} />
                              Locked
                            </>
                          ) : (
                            <>
                              Start Learning
                              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Certificate Verification Modal */}
      {showVerificationModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-[#14274E] mb-1">Verify Your Certificate</h2>
                <p className="text-sm text-[#14274E]/70">
                  Upload your {selectedCourse.toUpperCase()} certificate to start this course
                </p>
              </div>
              <button 
                onClick={() => {
                  setShowVerificationModal(false);
                  setSelectedCourse(null);
                  setCertificateFile(null);
                  setUploadError(null);
                }}
                className="text-[#14274E]/60 hover:text-[#14274E]"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium mb-1">How it works:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Upload your official JLPT {selectedCourse.toUpperCase()} certificate</li>
                      <li>Our team will verify it within 24 hours</li>
                      <li>Once verified, you can start the course immediately</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div 
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  certificateFile 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 hover:border-[#14274E]/20'
                }`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                />
                
                {certificateFile ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <CheckCircle size={24} className="text-green-500" />
                      <span className="font-medium">{certificateFile.name}</span>
                    </div>
                    <button
                      onClick={removeCertificate}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="mx-auto text-[#14274E]/40 mb-2" />
                    <p className="text-sm text-[#14274E]/70 mb-1">Drag and drop your certificate here</p>
                    <p className="text-xs text-[#14274E]/50">or</p>
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-2 bg-[#14274E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a3a6e] transition"
                    >
                      Browse Files
                    </button>
                  </>
                )}
              </div>

              {uploadError && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{uploadError}</p>
                  </div>
                </div>
              )}

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    Make sure your certificate is clearly visible and includes your name and test date
                  </p>
                </div>
              </div>

              <button
                onClick={handleSubmitVerification}
                disabled={!certificateFile || isUploading}
                className={`w-full rounded-lg px-4 py-2.5 font-medium transition flex items-center justify-center gap-2 ${
                  !certificateFile || isUploading
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#14274E] text-white hover:bg-[#1a3a6e]'
                }`}
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Uploading...
                  </>
                ) : (
                  'Submit for Verification'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses; 