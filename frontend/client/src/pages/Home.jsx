import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handlePromptingClick = () => {
    console.log('Navigate to prompting section');
    // TODO: Add navigation to prompting tools page
  };

  const handleLoginClick = () => {
    console.log('Login clicked');
    setShowLoginModal(true);
  };

  const handleStartLearning = () => {
    console.log('Navigate to courses');
    // TODO: Add navigation to courses page
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Space background */}
      <SpaceBackground />
      
      {/* Header with enhanced styling */}
      <Header 
        onPromptingClick={handlePromptingClick} 
        onLoginClick={handleLoginClick}
      />
      
      {/* Hero section with improved colors */}
      <HeroSection onStartLearning={handleStartLearning} />

      {/* Enhanced login modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900/95 to-blue-900/95 border border-blue-500/30 rounded-lg p-8 max-w-md w-full mx-4 relative backdrop-blur-lg">
            <button 
              onClick={closeLoginModal}
              className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
              data-testid="button-close-modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-blue-100">Welcome Back</h2>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 rounded-lg border border-blue-500/30 bg-black/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:outline-none"
                data-testid="input-email"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 rounded-lg border border-blue-500/30 bg-black/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 focus:outline-none"
                data-testid="input-password"
              />
              <button 
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                data-testid="button-submit-login"
                style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }}
              >
                Sign In
              </button>
            </div>
            <p className="text-center mt-4 text-blue-300/80">
              Don't have an account? <span className="text-cyan-400 cursor-pointer hover:underline">Sign up</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}