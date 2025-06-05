
const teamMembers = [
  {
    name: "Jose Montero",
    role: "CEO, Growth Hacker, Web3 Native",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Visionary leader with deep expertise in Web3 ecosystems and growth strategies."
  },
  {
    name: "Jose Montero Sr.",
    role: "CFO/COO, MIT Grad, Ex-Kaiser",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "MIT graduate with extensive experience in operations and financial strategy at Fortune 500 companies."
  },
  {
    name: "Javier Calderon",
    role: "Emerging Tech, Blockchain Expert",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
    description: "Blockchain technology expert specializing in emerging tech and decentralized systems."
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experienced leaders building the future of decentralized social networking
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 group hover:scale-105 text-center"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-blue-electric to-purple-cyber p-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-electric/20 to-purple-cyber/20 group-hover:animate-pulse-glow"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-blue-electric font-medium mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              
              {/* LinkedIn Button */}
              <div className="mt-6">
                <button className="glass-card px-4 py-2 rounded-lg hover:glow-blue transition-all duration-300 text-blue-electric hover:text-white">
                  LinkedIn →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
