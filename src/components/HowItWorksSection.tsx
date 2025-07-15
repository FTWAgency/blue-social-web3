
const steps = [
  {
    gif: "/lovable-uploads/onboarding_01_gif_updd_2.gif",
    title: "Discover people nearby",
    description: "Your phone automatically detects other Blue Social users in your proximity using Bluetooth mesh technology.",
    color: "from-blue-electric to-cyan-400"
  },
  {
    gif: "/lovable-uploads/Tour 2.gif",
    title: "Break the ice",
    description: "Send a friendly message or react to their profile. Start meaningful conversations with people around you.",
    color: "from-cyan-400 to-purple-cyber"
  },
  {
    gif: "/lovable-uploads/Tour 3.gif",
    title: "Earn tokens for interacting",
    description: "Get rewarded with $BLUE tokens for every genuine social interaction. Build your on-chain social graph.",
    color: "from-purple-cyber to-pink-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to transform your social interactions into valuable digital assets
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-electric to-transparent z-0"></div>
              )}
              
              <div className="glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 relative z-10 h-full group-hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-electric to-purple-cyber rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* GIF */}
                <div className="w-24 h-24 mb-6 mx-auto">
                  <img 
                    src={step.gif} 
                    alt={step.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block px-6 py-3 rounded-full glow-purple">
            <span className="text-purple-cyber font-semibold">Socialize-to-Earn™</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
