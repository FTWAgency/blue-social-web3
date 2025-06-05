
import { Button } from "@/components/ui/button";
import { Bluetooth } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue-dark to-purple-cyber/20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-electric/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-cyber/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn{" "}
            <span className="gradient-text">Real-Life</span>
            <br />
            Interactions into{" "}
            <span className="gradient-text">Rewards</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover and connect with people nearby. Earn tokens for being social.
            <br />
            <span className="text-blue-electric font-semibold">Think Pokémon GO meets Web3 networking.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-electric to-purple-cyber hover:from-blue-electric/80 hover:to-purple-cyber/80 glow-blue transition-all duration-300 text-lg px-8 py-4"
            >
              Download the App
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-electric text-blue-electric hover:bg-blue-electric/10 glow-blue transition-all duration-300 text-lg px-8 py-4"
            >
              Buy $BLUE Token
            </Button>
          </div>
          
          {/* Hero Graphic */}
          <div className="relative max-w-2xl mx-auto">
            <div className="glass-card p-8 rounded-3xl glow-blue">
              <div className="relative flex items-center justify-center space-x-8">
                {/* Person 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-electric to-purple-cyber rounded-full flex items-center justify-center mb-2 animate-pulse-glow">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">You</span>
                </div>
                
                {/* Bluetooth Connection */}
                <div className="flex flex-col items-center">
                  <Bluetooth className="w-12 h-12 text-blue-electric animate-pulse-glow" />
                  <div className="flex space-x-1 mt-2">
                    <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                
                {/* Person 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-cyber to-blue-electric rounded-full flex items-center justify-center mb-2 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">Nearby</span>
                </div>
              </div>
              
              {/* Floating reward indicator */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-electric to-purple-cyber px-3 py-1 rounded-full text-sm font-semibold animate-float">
                +10 $BLUE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
