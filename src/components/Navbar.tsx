
import React, { useState } from 'react';
import { Menu, X, Rocket, Zap, Gamepad, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Games", path: "/discover-games", icon: <Gamepad className="mr-2" size={18} /> },
    { name: "News", path: "#news", icon: <Zap className="mr-2" size={18} /> },
    { name: "Community", path: "#community", icon: <Shield className="mr-2" size={18} /> },
    { name: "Shop", path: "#shop", icon: <Rocket className="mr-2" size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-alien-dark/80 backdrop-blur-md border-b border-alien-purple/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-alien-teal animate-pulse-slow mr-2" />
              <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
                ALIEN RIFT
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = 
                (item.path === "/discover-games" && location.pathname === "/discover-games") || 
                (item.path.startsWith("#") && location.pathname === "/" && window.location.hash === item.path);
              
              return (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "relative font-medium transition-colors",
                    isActive 
                      ? "text-alien-teal" 
                      : "text-white/80 hover:text-alien-teal"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-alien-teal"></span>
                  )}
                </Link>
              );
            })}
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
          <Link to="/" className="flex items-center mb-8" onClick={toggleMenu}>
            <Rocket className="h-8 w-8 text-alien-teal animate-pulse-slow mr-2" />
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-alien-purple to-alien-teal">
              ALIEN RIFT
            </span>
          </Link>
          {navItems.map((item) => {
            const isActive = 
              (item.path === "/discover-games" && location.pathname === "/discover-games") || 
              (item.path.startsWith("#") && location.pathname === "/" && window.location.hash === item.path);
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center w-full text-lg font-medium p-2 transition-colors",
                  isActive 
                    ? "text-alien-teal" 
                    : "text-white/80 hover:text-alien-teal"
                )}
                onClick={toggleMenu}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}

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
