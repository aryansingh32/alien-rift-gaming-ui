
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

interface GameCardProps {
  title: string;
  category: string;
  rating: number;
  imageClass: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, category, rating, imageClass }) => {
  return (
    <div className="alien-card group hover:translate-y-[-5px] transition-all duration-300 overflow-hidden">
      <div className={`aspect-[3/4] ${imageClass} bg-cover bg-center relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
          <Star size={14} className="mr-1 text-yellow-400" fill="currentColor" />
          <span className="text-white text-xs font-medium">{rating}</span>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="space-y-2">
            <span className="inline-block px-2 py-1 bg-alien-blue/20 border border-alien-blue/30 text-alien-teal text-xs rounded">
              {category}
            </span>
            <h3 className="text-lg font-bold font-orbitron text-white">{title}</h3>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-between mt-2 bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-alien-purple/20 transition-colors"
            >
              <span>Play Now</span>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedGames = () => {
  const games = [
    {
      title: "Quantum Strike",
      category: "FPS",
      rating: 4.8,
      imageClass: "bg-gradient-to-br from-alien-purple/40 to-alien-blue/40"
    },
    {
      title: "Stellar Odyssey",
      category: "Adventure",
      rating: 4.9,
      imageClass: "bg-gradient-to-br from-alien-teal/40 to-alien-blue/40"
    },
    {
      title: "Neon Wasteland",
      category: "RPG",
      rating: 4.7,
      imageClass: "bg-gradient-to-br from-alien-magenta/40 to-alien-purple/40"
    },
    {
      title: "Eclipse Racer",
      category: "Racing",
      rating: 4.5,
      imageClass: "bg-gradient-to-br from-alien-blue/40 to-alien-teal/40"
    }
  ];

  return (
    <section id="games" className="py-16 md:py-24 relative tech-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Featured Games
            </h2>
            <p className="text-white/70 max-w-xl">
              Explore our collection of cutting-edge games powered by alien technology
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-alien-teal/30 text-alien-teal hover:bg-alien-teal/10"
          >
            View All Games
            <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              category={game.category}
              rating={game.rating}
              imageClass={game.imageClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
