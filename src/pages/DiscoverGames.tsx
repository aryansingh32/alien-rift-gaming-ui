
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad, Search, Star, ChevronRight, Filter } from "lucide-react";

interface GameCardProps {
  title: string;
  category: string;
  rating: number;
  imageClass: string;
  description: string;
  tags: string[];
}

const GameCard: React.FC<GameCardProps> = ({ title, category, rating, imageClass, description, tags }) => {
  return (
    <Card className="alien-card group hover:translate-y-[-5px] transition-all duration-300 overflow-hidden border-0 bg-transparent">
      <CardContent className="p-0">
        <div className={`aspect-video ${imageClass} bg-cover bg-center relative rounded-lg overflow-hidden`}>
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
              <h3 className="text-xl font-bold font-orbitron text-white">{title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-alien-purple/20 border border-alien-purple/30 text-alien-purple rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
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
      </CardContent>
    </Card>
  );
};

const DiscoverGames = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const games = [
    {
      title: "Quantum Strike",
      category: "FPS",
      rating: 4.8,
      imageClass: "bg-gradient-to-br from-alien-purple/40 to-alien-blue/40",
      description: "Engage in high-stakes battles with alien technology and quantum weapons",
      tags: ["Multiplayer", "Competitive", "Sci-Fi"]
    },
    {
      title: "Stellar Odyssey",
      category: "Adventure",
      rating: 4.9,
      imageClass: "bg-gradient-to-br from-alien-teal/40 to-alien-blue/40",
      description: "Explore strange new worlds and uncover the secrets of an ancient alien civilization",
      tags: ["Open World", "Story-Rich", "Exploration"]
    },
    {
      title: "Neon Wasteland",
      category: "RPG",
      rating: 4.7,
      imageClass: "bg-gradient-to-br from-alien-magenta/40 to-alien-purple/40",
      description: "Survive in a post-apocalyptic world filled with mutants and alien technology",
      tags: ["Survival", "Character Customization", "Post-Apocalyptic"]
    },
    {
      title: "Eclipse Racer",
      category: "Racing",
      rating: 4.5,
      imageClass: "bg-gradient-to-br from-alien-blue/40 to-alien-teal/40",
      description: "Push the limits in anti-gravity vehicles powered by alien propulsion systems",
      tags: ["Racing", "Futuristic", "Competitive"]
    },
    {
      title: "Void Hunters",
      category: "Strategy",
      rating: 4.6,
      imageClass: "bg-gradient-to-br from-alien-purple/40 to-alien-magenta/40",
      description: "Command a fleet of ships and conquer the galaxy with advanced alien technology",
      tags: ["Strategy", "Space", "Resource Management"]
    },
    {
      title: "Cybernetic Infiltrator",
      category: "Stealth",
      rating: 4.4,
      imageClass: "bg-gradient-to-br from-alien-blue/40 to-alien-purple/40",
      description: "Infiltrate secure facilities using cutting-edge alien stealth technology",
      tags: ["Stealth", "Single Player", "Cyberpunk"]
    },
    {
      title: "Tectonic Shift",
      category: "Puzzle",
      rating: 4.7,
      imageClass: "bg-gradient-to-br from-alien-teal/40 to-alien-magenta/40",
      description: "Solve complex puzzles by manipulating alien artifacts and gravity wells",
      tags: ["Puzzle", "Physics", "Atmospheric"]
    },
    {
      title: "Xenobyte",
      category: "MMO",
      rating: 4.6,
      imageClass: "bg-gradient-to-br from-alien-purple/40 to-alien-bright-purple/40",
      description: "Join thousands of players in a persistent alien world filled with quests and challenges",
      tags: ["Massively Multiplayer", "Social", "PvE"]
    }
  ];

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    game.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    game.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-alien-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="relative tech-pattern py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-5xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Discover Games
              </h1>
              <p className="text-white/70">
                Explore our vast collection of games powered by advanced alien technology
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search games, categories, or tags..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-alien-dark/60 border-alien-purple/30 text-white placeholder:text-white/50 focus:border-alien-teal/50 focus-visible:ring-alien-teal/20"
                />
              </div>
              <Button className="bg-alien-dark/60 border border-alien-purple/30 text-white hover:bg-alien-purple/20">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-alien-dark/60 border border-alien-purple/30 p-1 mb-8">
                <TabsTrigger value="all" className="data-[state=active]:bg-alien-purple/20 data-[state=active]:text-white text-white/70">
                  All Games
                </TabsTrigger>
                <TabsTrigger value="new" className="data-[state=active]:bg-alien-purple/20 data-[state=active]:text-white text-white/70">
                  New Releases
                </TabsTrigger>
                <TabsTrigger value="popular" className="data-[state=active]:bg-alien-purple/20 data-[state=active]:text-white text-white/70">
                  Popular
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-alien-purple/20 data-[state=active]:text-white text-white/70">
                  Upcoming
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGames.map((game, index) => (
                    <GameCard
                      key={index}
                      title={game.title}
                      category={game.category}
                      rating={game.rating}
                      imageClass={game.imageClass}
                      description={game.description}
                      tags={game.tags}
                    />
                  ))}
                </div>
                
                {filteredGames.length === 0 && (
                  <div className="text-center py-16">
                    <Gamepad className="mx-auto h-12 w-12 text-alien-purple/50 mb-4" />
                    <h3 className="text-xl font-orbitron text-white mb-2">No Games Found</h3>
                    <p className="text-white/70">Try adjusting your search criteria</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                <div className="text-center py-16">
                  <Gamepad className="mx-auto h-12 w-12 text-alien-teal/50 mb-4" />
                  <h3 className="text-xl font-orbitron text-white mb-2">New Releases Coming Soon</h3>
                  <p className="text-white/70">Check back for our latest game releases</p>
                </div>
              </TabsContent>
              
              <TabsContent value="popular" className="mt-0">
                <div className="text-center py-16">
                  <Gamepad className="mx-auto h-12 w-12 text-alien-blue/50 mb-4" />
                  <h3 className="text-xl font-orbitron text-white mb-2">Popular Games Coming Soon</h3>
                  <p className="text-white/70">Our most played games will appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="text-center py-16">
                  <Gamepad className="mx-auto h-12 w-12 text-alien-magenta/50 mb-4" />
                  <h3 className="text-xl font-orbitron text-white mb-2">Upcoming Games</h3>
                  <p className="text-white/70">Stay tuned for exciting new titles</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-alien-purple/30 to-transparent"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiscoverGames;
