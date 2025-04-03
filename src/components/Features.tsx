
import React from 'react';
import { Zap, Shield, Atom, Satellite } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="alien-card p-6 border-t border-alien-purple/20 group hover:bg-alien-dark/80 transition-all duration-300">
      <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-alien-purple/20 to-alien-teal/20 flex items-center justify-center border border-alien-purple/30 group-hover:border-alien-teal/30 transition-colors">
        <div className="text-alien-teal group-hover:text-alien-purple transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-orbitron font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
      
      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-alien-purple to-alien-teal mt-4 transition-all duration-300"></div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Quantum Processing",
      description: "Experience zero lag with our advanced alien quantum processing technology"
    },
    {
      icon: <Shield size={24} />,
      title: "Neural Security",
      description: "Advanced protection systems keep your gaming data secure and private"
    },
    {
      icon: <Atom size={24} />,
      title: "Immersive Worlds",
      description: "Our alien rendering engine creates unbelievably realistic gaming environments"
    },
    {
      icon: <Satellite size={24} />,
      title: "Global Network",
      description: "Connect with players around the world with our interstellar networking"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative hexagon-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Alien Technology
          </h2>
          <p className="text-white/70">
            Our platform is powered by advanced extraterrestrial technology that redefines what's possible in gaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-alien-purple/30 to-transparent"></div>
    </section>
  );
};

export default Features;
