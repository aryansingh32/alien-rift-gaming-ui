
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad, ChevronRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden tech-pattern">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="alien-glow inline-block mb-4 px-3 py-1 rounded-full bg-alien-dark/60 border border-alien-purple/30">
              <span className="text-alien-teal flex items-center font-medium">
                <Gamepad size={16} className="mr-2" />
                Next-Gen Gaming Experience
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 leading-tight text-glow">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Explore Gaming's
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
                Alien Frontier
              </span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Experience immersive gameplay with cutting-edge alien technology. 
              Unlock new dimensions of gaming that challenge reality and push boundaries.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-to-r from-alien-purple to-alien-blue text-white hover:opacity-90 transition-opacity px-6 py-6">
                <span className="mr-2">Discover Games</span>
                <ChevronRight size={16} />
              </Button>
              <Button variant="outline" className="border-alien-teal/30 text-alien-teal hover:bg-alien-teal/10 transition-colors px-6 py-6">
                Watch Trailer
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-alien-dark overflow-hidden bg-gradient-to-br from-alien-purple/20 to-alien-blue/20"
                  >
                    <div className="w-full h-full bg-alien-dark/50 flex items-center justify-center text-white/70 text-xs">
                      {i}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-white/70 text-sm">
                  <span className="text-alien-teal font-semibold">10K+</span> players online
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="alien-glow rounded-lg overflow-hidden">
                <div className="aspect-[16/9] rounded-lg border border-alien-purple/30 alien-card p-1 overflow-hidden">
                  {/* Abstract alien UI hexagon pattern */}
                  <div className="w-full h-full rounded bg-alien-dark/80 hexagon-bg flex flex-col items-center justify-center p-10">
                    <Rocket size={80} className="text-alien-teal mb-6 animate-float" />
                    <div className="w-full h-2 bg-alien-purple/20 rounded-full overflow-hidden mb-6">
                      <div className="h-full w-3/4 bg-gradient-to-r from-alien-purple to-alien-blue shimmer"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-alien-teal text-xl font-orbitron font-bold mb-2">XENOTECH ENGINE</h3>
                      <p className="text-white/60 text-sm">Advanced alien technology powering next-gen experiences</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech decoration elements */}
              <div className="hidden md:block absolute -top-4 -right-4 w-20 h-20 border border-alien-purple/30 rounded-lg bg-alien-dark/50 alien-border"></div>
              <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-16 border border-alien-purple/30 rounded-lg bg-alien-dark/50 alien-border"></div>
            </div>
          </div>
        </div>
        
        {/* Tech circuit decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-alien-purple/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
