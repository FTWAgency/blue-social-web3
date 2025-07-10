
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

      {/* Phone with Bluetooth pulse animations */}
      <div className="absolute bottom-0 right-8 hidden lg:block pointer-events-none">
        {/* Bluetooth pulse rings behind phone */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-96 h-96 border border-blue-electric/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-electric/30 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-cyber/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
        </div>
        
        {/* Phone image with gradient shadow */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-electric/30 via-purple-cyber/20 to-transparent blur-2xl transform translate-y-8 scale-110"></div>
          <img 
            src="/lovable-uploads/da1afb44-6d5a-48f7-9be8-8d12dbf9a7cd.png" 
            alt="Blue Social App Interface" 
            className="w-auto h-[75vh] max-h-[600px] object-contain drop-shadow-2xl glow-blue"
          />
        </div>
      </div>

      {/* Mobile phone positioning */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden pointer-events-none">
        {/* Smaller pulse rings for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-48 h-48 border border-blue-electric/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-purple-cyber/20 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-electric/30 via-purple-cyber/20 to-transparent blur-xl transform translate-y-4 scale-110"></div>
          <img 
            src="/lovable-uploads/da1afb44-6d5a-48f7-9be8-8d12dbf9a7cd.png" 
            alt="Blue Social App Interface" 
            className="w-auto h-48 object-contain drop-shadow-xl glow-blue"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-2xl">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn{" "}
            <span className="gradient-text">Real-Life</span>
            <br />
            Interactions into{" "}
            <span className="gradient-text">Rewards</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl lg:max-w-lg">
            Discover and connect with people nearby. Earn tokens for being social.
            <br />
            <span className="text-blue-electric font-semibold">Think Pokémon GO meets Web3 networking.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
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
          
          {/* Hero Graphic - only show on larger screens when phone is visible */}
          <div className="relative max-w-2xl mx-auto lg:hidden">
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
