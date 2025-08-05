
import { Bluetooth, Circle, Star, Circle as GlobalIcon, Lock, User, MessageCircle } from "lucide-react";

// Custom icon component for Unlock Contact Info
const UnlockContactIcon = () => (
  <div className="relative w-8 h-8">
    <User className="w-6 h-6 text-white absolute inset-0 m-auto" />
    <Lock className="w-4 h-4 text-white absolute -top-1 -right-1" />
  </div>
);

const features = [
  {
    icon: Bluetooth,
    title: "Bluetooth Mesh Discovery",
    description: "Offline-ready networking that works even without internet. Discover people around you using advanced Bluetooth mesh technology.",
    gradient: "from-blue-electric to-cyan-400",
    comingSoon: false
  },
  {
    icon: Circle,
    title: "Proof-of-Interaction",
    description: "Verifiable on-chain badges that prove real-world social engagement. Build trust through authentic interactions.",
    gradient: "from-cyan-400 to-green-400",
    comingSoon: false
  },
  {
    icon: UnlockContactIcon,
    title: "Unlock Contact Info",
    description: "Use $BLUE tokens to unlock verified profiles and social contact details after real-life interactions. A trust-based way to connect deeper.",
    gradient: "from-green-400 to-yellow-400",
    comingSoon: false
  },
  {
    icon: Star,
    title: "NFT Badges & Gamification",
    description: "Collect unique NFT badges for different types of interactions. Level up your social game with achievements and rewards.",
    gradient: "from-yellow-400 to-orange-400",
    comingSoon: true
  },
  {
    icon: MessageCircle,
    title: "Encrypted DMs for Real Connections",
    description: "Chat privately with people you've met in real-life. Messages are encrypted, secure, and tied to usernames — not phone numbers.",
    gradient: "from-orange-400 to-purple-cyber",
    comingSoon: true
  },
  {
    icon: GlobalIcon,
    title: "Global Feed",
    description: "View social proof interactions from around the world. See how others are building their social networks in real-time.",
    gradient: "from-purple-cyber to-pink-500",
    comingSoon: true
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of social networking with cutting-edge Web3 technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 group hover:scale-105 hover:-translate-y-2 relative"
            >
              {/* Coming Soon Badge */}
              {feature.comingSoon && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-cyber to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full glow-purple">
                  Coming Soon
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow ${feature.comingSoon ? 'opacity-60' : ''}`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className={`w-0 h-0.5 bg-gradient-to-r ${feature.gradient} mt-4 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
