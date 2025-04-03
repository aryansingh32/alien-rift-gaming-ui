
import React, { useState } from 'react';
import { Menu, X, Rocket, Zap, Gamepad, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-alien-dark/80 backdrop-blur-md border-b border-alien-purple/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-alien-teal animate-pulse-slow mr-2" />
              <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
                ALIEN RIFT
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["Games", "News", "Community", "Shop"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-white/80 hover:text-alien-teal transition-colors"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-alien-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white/80 hover:text-alien-purple hover:bg-white/5">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-alien-purple to-alien-blue text-white hover:opacity-90 transition-opacity">
              Join Now
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-alien-purple transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-alien-dark/95 backdrop-blur-lg md:hidden transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-alien-purple transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 p-8">
          <a href="/" className="flex items-center mb-8">
            <Rocket className="h-8 w-8 text-alien-teal animate-pulse-slow mr-2" />
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
              ALIEN RIFT
            </span>
          </a>
          {[
            { name: "Games", icon: <Gamepad className="mr-2" size={18} /> },
            { name: "News", icon: <Zap className="mr-2" size={18} /> },
            { name: "Community", icon: <Shield className="mr-2" size={18} /> },
            { name: "Shop", icon: <Rocket className="mr-2" size={18} /> },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center w-full text-lg font-medium text-white/80 hover:text-alien-teal transition-colors p-2"
              onClick={toggleMenu}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}

          <div className="flex flex-col w-full space-y-4 mt-4">
            <Button variant="ghost" className="w-full text-white/80 hover:text-alien-purple">
              Sign In
            </Button>
            <Button className="w-full bg-gradient-to-r from-alien-purple to-alien-blue text-white hover:opacity-90 transition-opacity">
              Join Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
