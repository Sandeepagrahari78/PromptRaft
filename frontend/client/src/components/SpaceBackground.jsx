import cosmicBg from '@assets/generated_images/Cosmic_tech_space_background_a0a1dbbd.png';

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-cyan-500/5 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      {/* Main cosmic background with reduced opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: `url(${cosmicBg})`,
          backgroundPosition: 'center center'
        }}
        data-testid="cosmic-background"
      />
      
      {/* Enhanced gradient overlays for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-purple-900/15 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-900/8" />
      
      {/* Subtle shimmer effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shimmer-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(59, 130, 246, 0.03)' :
                i % 3 === 1 ? 'rgba(147, 51, 234, 0.03)' :
                'rgba(34, 211, 238, 0.03)'
              } 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced floating particles with glow */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400' : 
              i % 4 === 1 ? 'w-1 h-1 bg-purple-400' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-cyan-400' :
              'w-1 h-1 bg-pink-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              opacity: 0.4 + Math.random() * 0.6
            }}
            data-testid={`particle-${i}`}
          />
        ))}
      </div>

      {/* Enhanced floating geometric shapes with glow */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/40 rounded-full animate-pulse" 
           style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.25)' }} 
           data-testid="geo-circle-1" />
      
      <div className="absolute top-1/3 right-20 w-8 h-8 border-2 border-purple-400/40 rounded animate-bounce" 
           style={{ 
             animationDuration: '3s',
             boxShadow: '0 0 20px rgba(147, 51, 234, 0.25)' 
           }} 
           data-testid="geo-square-1" />
      
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-cyan-400/40 rounded-full animate-pulse" 
           style={{ boxShadow: '0 0 22px rgba(34, 211, 238, 0.25)' }}
           data-testid="geo-circle-2" />
      
      <div className="absolute bottom-20 right-1/3 w-6 h-6 border-2 border-pink-400/40 transform rotate-45 animate-pulse" 
           style={{ boxShadow: '0 0 15px rgba(244, 114, 182, 0.25)' }}
           data-testid="geo-diamond-1" />

      {/* Additional visual elements - subtle glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 animate-pulse"
           style={{ boxShadow: '0 0 50px rgba(59, 130, 246, 0.15)' }} />
      
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/8 to-pink-500/8 animate-pulse"
           style={{ boxShadow: '0 0 40px rgba(147, 51, 234, 0.15)' }} />

      {/* Animated background lines with shine */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-blue-400/15 to-transparent h-px"
            style={{
              width: `${70 + Math.random() * 30}%`,
              left: `${Math.random() * 40}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${4 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)'
            }}
          />
        ))}
      </div>
    </div>
  );
}