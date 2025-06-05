
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CommunitySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/5 to-purple-cyber/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-cyber/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build the <span className="gradient-text">future</span> of social networking, <span className="gradient-text">together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of innovators, developers, and social networking enthusiasts 
            who are revolutionizing how we connect in the real world.
          </p>
          
          {/* Newsletter Signup */}
          <div className="glass-card p-8 rounded-2xl glow-blue mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Early Beta Access</h3>
            <p className="text-gray-300 mb-6">
              Be among the first to experience Blue Social. Get notified when we launch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-blue-electric to-purple-cyber hover:from-blue-electric/80 hover:to-purple-cyber/80 glow-blue transition-all duration-300">
                Join Waitlist
              </Button>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>or</span>
              <Button variant="link" className="text-blue-electric hover:text-blue-electric/80 p-0">
                Connect Wallet
              </Button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Join our community</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Telegram", handle: "@bluesocial" },
                { name: "Discord", handle: "Blue Social" },
                { name: "X (Twitter)", handle: "@blue_social" },
                { name: "Lens", handle: "@bluesocial.lens" },
                { name: "Mirror", handle: "bluesocial.mirror.xyz" }
              ].map((social, index) => (
                <div 
                  key={index}
                  className="glass-card px-6 py-3 rounded-full hover:glow-purple transition-all duration-300 cursor-pointer group"
                >
                  <span className="font-medium group-hover:gradient-text transition-all duration-300">
                    {social.name}
                  </span>
                  <span className="text-gray-400 ml-2">{social.handle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
