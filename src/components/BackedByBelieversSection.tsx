import { Users, Trophy, DollarSign, Award } from "lucide-react";

const stats = [
  { value: "$2M+", label: "Raised", icon: DollarSign },
  { value: "4K+", label: "Investors", icon: Users },
  { value: "50K+", label: "Community", icon: Users },
  { value: "2024", label: "Base Winner", icon: Award }
];

const BackedByBelieversSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/5 to-purple-cyber/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-cyber/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Backed by <span className="gradient-text">Believers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From top VCs to a global community — thousands already believe in Blue Social's vision for real-world Web3.
          </p>
        </div>
        
        {/* Main Content Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Large Quote Card */}
          <div className="glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 group hover:scale-105">
            <div className="flex items-start mb-6">
              <div className="relative mr-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-r from-blue-electric to-purple-cyber p-0.5">
                  <img 
                    src="/assets/tim-draper.png" 
                    alt="Tim Draper"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback icon if image doesn't load */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-electric to-purple-cyber rounded-lg flex items-center justify-center hidden">
                    <span className="text-white text-2xl font-bold">TD</span>
                  </div>
                </div>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium gradient-text">Tim Draper Invested</span>
              </div>
            </div>
            
            <blockquote className="text-lg text-gray-300 leading-relaxed mb-6 italic">
              "Jose and his family are laser-focused, resilient, and building something truly revolutionary with Blue Social. I love the opportunity, the timing, and the powerful network effects behind their vision. That's why I invested and I'm more excited than ever about what's coming next."
            </blockquote>
            
            <p className="text-blue-electric font-medium text-sm">
              — Tim Draper, Billionaire Venture Capitalist (Early Investor in Coinbase, Tesla, Bitcoin)
            </p>
          </div>
          
          {/* Right Side Stacked Cards */}
          <div className="space-y-6">
            {/* Top Card - Investors */}
            <div className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300 group hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-cyber rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-electric">4,000+ Investors</h3>
                  <p className="text-gray-400 text-sm">on Republic</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                In 2020, Blue Social raised over $1,000,000 from more than 4,000 early believers through a public crowdfunding campaign on Republic.co/blue
              </p>
            </div>
            
            {/* Bottom Card - Buildathon */}
            <div className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300 group hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-cyber to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-electric">2024 Base Buildathon</h3>
                  <p className="text-gray-400 text-sm">Winners</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Selected by Base, Coinbase's Layer 2 protocol, for innovation in Bluetooth-based social discovery and Proof-of-Interaction™ tech
              </p>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="glass-card p-6 rounded-2xl hover:glow-blue transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-electric to-purple-cyber rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-electric mb-2 group-hover:gradient-text transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedByBelieversSection; 