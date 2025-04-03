
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rocket } from 'lucide-react';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
    // Implement subscription logic here
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="alien-glow max-w-5xl mx-auto">
          <div className="alien-card p-8 md:p-12 rounded-lg border border-alien-purple/30 relative tech-pattern overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-alien-purple/10 to-alien-blue/10 opacity-50"></div>
            
            {/* Circuit line decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-alien-purple/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-alien-blue/30 to-transparent"></div>
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-alien-purple/30 to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-t from-transparent via-alien-blue/30 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-alien-purple to-alien-blue p-0.5">
                  <div className="w-full h-full rounded-full bg-alien-dark flex items-center justify-center">
                    <Rocket size={28} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Join The Alien Network
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Subscribe to our newsletter for exclusive game updates, alien technology insights, and special offers from across the galaxy
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-alien-dark/50 border-alien-purple/30 focus:border-alien-teal focus:ring-1 focus:ring-alien-teal/50 text-white"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-alien-purple to-alien-blue text-white hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </Button>
              </form>
              
              <p className="text-center text-white/50 text-sm mt-4">
                By subscribing, you agree to receive gaming news and updates. No alien abductions, we promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
