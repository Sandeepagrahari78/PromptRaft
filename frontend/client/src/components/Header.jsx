import { Button } from "@/components/ui/button";
import { Atom, LogIn } from "lucide-react";

export default function Header({ onPromptingClick, onLoginClick }) {
  const handlePromptingClick = () => {
    console.log('Prompting button clicked');
    onPromptingClick?.();
  };

  const handleLoginClick = () => {
    console.log('Login button clicked');
    onLoginClick?.();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/60 border-b border-blue-500/20">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo with enhanced colors */}
        <div className="flex items-center space-x-3" data-testid="logo-container">
          <div className="relative">
            <Atom className="w-8 h-8 text-blue-400 animate-pulse" data-testid="logo-icon" />
            <div className="absolute inset-0 animate-spin">
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <span className="text-xl font-bold text-blue-100" data-testid="logo-text">
            AI Prompting
          </span>
        </div>

        {/* Navigation with improved colors */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="default" 
            className="rounded-full px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover-elevate text-white border-0"
            onClick={handlePromptingClick}
            data-testid="button-prompting"
            style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
          >
            Prompting
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full px-4 backdrop-blur-lg hover-elevate border-blue-400/50 text-blue-200 hover:text-white"
            onClick={handleLoginClick}
            data-testid="button-login"
          >
            <LogIn className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}