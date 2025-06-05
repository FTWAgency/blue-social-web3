
import { Bluetooth, Circle, Star, Circle as GlobalIcon, Circle as GraphIcon } from "lucide-react";

const features = [
  {
    icon: Bluetooth,
    title: "Bluetooth Mesh Discovery",
    description: "Offline-ready networking that works even without internet. Discover people around you using advanced Bluetooth mesh technology.",
    gradient: "from-blue-electric to-cyan-400"
  },
  {
    icon: Circle,
    title: "Proof-of-Interaction",
    description: "Verifiable on-chain badges that prove real-world social engagement. Build trust through authentic interactions.",
    gradient: "from-cyan-400 to-green-400"
  },
  {
    icon: Star,
    title: "NFT Badges & Gamification",
    description: "Collect unique NFT badges for different types of interactions. Level up your social game with achievements and rewards.",
    gradient: "from-green-400 to-yellow-400"
  },
  {
    icon: GlobalIcon,
    title: "Global Feed",
    description: "View social proof interactions from around the world. See how others are building their social networks in real-time.",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    icon: GraphIcon,
    title: "Decentralized Social Graph",
    description: "Own your social connections on-chain. Your network belongs to you, not a centralized platform.",
    gradient: "from-orange-400 to-purple-cyber"
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
              className="glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 group hover:scale-105 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}>
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
        
        {/* Feature highlight */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block p-6 rounded-2xl glow-purple max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Building the Future</h3>
            <p className="text-gray-300">
              Blue Social is pioneering the first decentralized social graph built from real-world proximity interactions. 
              Join us in creating a more authentic, rewarding social experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
