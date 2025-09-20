import { Button } from "@/components/ui/button";

export default function HeroSection({ onStartLearning }) {
  const handleStartLearning = () => {
    console.log('Start Learning Today clicked');
    onStartLearning?.();
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Headline with gradient colors */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          data-testid="headline-main"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Master the Art of Prompting
          </span>
        </h1>

        {/* Subtitle with better color */}
        <p 
          className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="subtitle-text"
        >
          Unlock the full potential of AI with our expert-led courses
          <br />
          and interactive tools.
        </p>

        {/* Enhanced CTA Button */}
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0"
          onClick={handleStartLearning}
          data-testid="button-start-learning"
          style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
        >
          Start Learning Today
        </Button>
      </div>
    </div>
  );
}