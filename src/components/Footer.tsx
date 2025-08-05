
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-blue-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Blue Social</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The first decentralized social platform powered by real-world proximity interactions. 
              Turn your social life into digital assets.
            </p>
            <div className="glass-card inline-block px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-400">Smart Contract:</span>
              <br />
              <span className="text-blue-electric font-mono text-sm">0x...BLUE</span>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-electric transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Token</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">App</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Privacy</a></li>
            </ul>
          </div>
          
          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-electric transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Lens</a></li>
              <li><a href="#" className="hover:text-blue-electric transition-colors">Mirror</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Blue Social. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with</span>
            <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">for the decentralized future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
