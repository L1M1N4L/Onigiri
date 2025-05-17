import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OnigiriLogo from '../Homepage/assets/ONIGIRI.svg';
import { Eye, EyeOff, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const passwordRequirements = [
    { id: 'length', text: 'At least 8 characters', met: formData.password.length >= 8 },
    { id: 'uppercase', text: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { id: 'lowercase', text: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
    { id: 'number', text: 'One number', met: /[0-9]/.test(formData.password) },
    { id: 'special', text: 'One special character', met: /[!@#$%^&*]/.test(formData.password) },
  ];

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.password) {
      setError('Please enter a password');
      return false;
    }
    if (!passwordRequirements.every(req => req.met)) {
      setError('Please meet all password requirements');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      setError('');
    }
  };

  const handleBack = () => {
    setStep(1);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleNext();
      return;
    }
    if (!validateStep2()) return;

    setLoading(true);
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update the user's profile with their name
      await updateProfile(userCredential.user, {
        displayName: formData.name
      });

      // Navigate to lessons page
      navigate('/lessons');
    } catch (err: any) {
      // Handle specific Firebase auth errors
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered. Please try logging in instead.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/operation-not-allowed':
          setError('Email/password accounts are not enabled. Please contact support.');
          break;
        case 'auth/weak-password':
          setError('Please choose a stronger password.');
          break;
        default:
          setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/lessons');
    } catch (err: any) {
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in popup was closed before completing the sign-in.');
          break;
        case 'auth/cancelled-popup-request':
          // User cancelled the popup, no need to show error
          break;
        case 'auth/popup-blocked':
          setError('Pop-up was blocked by the browser. Please allow pop-ups for this site.');
          break;
        default:
          setError('Failed to sign in with Google. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#14274E]/70 hover:text-[#14274E] transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={OnigiriLogo} alt="ONIGIRI Logo" className="w-12 h-12" />
              <span className="text-3xl font-bold text-[#14274E] tracking-wide">ONIGIRI</span>
            </div>
            <h1 className="text-3xl font-bold text-[#14274E] mb-3">Create Your Account</h1>
            <p className="text-lg text-[#14274E]/70">
              Join ONIGIRI and start your Japanese learning journey
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#14274E]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-[#14274E] bg-[#14274E] text-white' : 'border-gray-300'}`}>
                  1
                </div>
                <span className="text-sm font-medium">Account</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-200"></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#14274E]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-[#14274E] bg-[#14274E] text-white' : 'border-gray-300'}`}>
                  2
                </div>
                <span className="text-sm font-medium">Security</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2" htmlFor="name">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#14274E] placeholder-[#14274E]/50 focus:outline-none focus:ring-2 focus:ring-[#14274E]/20 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#14274E] placeholder-[#14274E]/50 focus:outline-none focus:ring-2 focus:ring-[#14274E]/20 focus:border-transparent transition-all duration-200"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#14274E] text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-[#1a3a6e] transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Continue
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#14274E]/50">or sign up with</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium text-[#14274E] group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2" htmlFor="password">
                    Create password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#14274E] placeholder-[#14274E]/50 focus:outline-none focus:ring-2 focus:ring-[#14274E]/20 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your password"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#14274E]/50 hover:text-[#14274E] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#14274E] mb-2" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#14274E] placeholder-[#14274E]/50 focus:outline-none focus:ring-2 focus:ring-[#14274E]/20 focus:border-transparent transition-all duration-200"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#14274E]/50 hover:text-[#14274E] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <p className="text-sm font-medium text-[#14274E]">Password requirements:</p>
                  <ul className="space-y-2">
                    {passwordRequirements.map((req) => (
                      <li key={req.id} className="flex items-center gap-2 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${req.met ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                          {req.met ? <Check size={14} /> : null}
                        </div>
                        <span className={req.met ? 'text-green-600' : 'text-gray-600'}>{req.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-[#14274E] font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !passwordRequirements.every(req => req.met)}
                    className="flex-1 bg-[#14274E] text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-[#1a3a6e] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-[#14274E]/70">
                Already have an account?{' '}
                <Link to="/login" className="text-[#E23946] font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 