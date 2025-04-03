
import React from 'react';
import { Rocket, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-alien-dark border-t border-alien-purple/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Rocket className="h-6 w-6 text-alien-teal mr-2" />
              <span className="text-xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
                ALIEN RIFT
              </span>
            </div>
            <p className="text-white/70 mb-6">
              The future of gaming is here. Experience cutting-edge alien technology and explore new dimensions of play.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a 
                  href="#" 
                  key={i} 
                  className="w-10 h-10 rounded-full border border-alien-purple/30 flex items-center justify-center text-white/70 hover:text-alien-teal hover:border-alien-teal transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-white mb-6">Games</h3>
            <ul className="space-y-3">
              {["Action", "Adventure", "Strategy", "RPG", "Simulation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-alien-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "News", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-alien-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {["Help Center", "Community", "Game Rules", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-alien-teal transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-alien-purple/20 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alien Rift Gaming. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a 
                href="#" 
                key={item} 
                className="text-white/50 hover:text-alien-teal text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
