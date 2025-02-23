import React, { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#ECE7E2] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header Image */}
          <div className="h-32 bg-[#14274E] relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 gap-1 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-full h-full bg-white rounded-full transform rotate-45" />
                ))}
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white relative">ONIGIRI</h1>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
              <p className="text-gray-600">Join our community</p>
            </div>

            {/* Google Sign-in Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700"
              onClick={() => {
                /* Handle Google auth */
              }}
            >
              <LogIn size={20} />
              Continue with Google
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or sign up with email</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14274E] focus:ring-2 focus:ring-[#14274E]/20 transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14274E] focus:ring-2 focus:ring-[#14274E]/20 transition-all duration-200"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#14274E] focus:ring-2 focus:ring-[#14274E]/20 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#14274E] text-white py-3 rounded-xl font-medium hover:bg-[#14274E]/90 transition-all duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Sign up"
                )}
              </button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                By signing up, you agree to our{" "}
                <a href="/terms" className="text-[#14274E] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#14274E] hover:underline">
                  Privacy Policy
                </a>
              </p>

              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-[#14274E] hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
