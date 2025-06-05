
import { Button } from "@/components/ui/button";

const TokenomicsSection = () => {
  const tokenData = [
    { label: "Total Supply", value: "1B $BLUE", percentage: 100 },
    { label: "Community Rewards", value: "40%", percentage: 40 },
    { label: "Liquidity Pool", value: "25%", percentage: 25 },
    { label: "Team & Advisors", value: "20%", percentage: 20 },
    { label: "Treasury", value: "15%", percentage: 15 },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powered by <span className="gradient-text">$BLUE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The native token that fuels social interactions and rewards meaningful connections
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Token Distribution Chart */}
          <div className="glass-card p-8 rounded-2xl glow-blue">
            <h3 className="text-2xl font-semibold mb-8 text-center">Token Distribution</h3>
            
            <div className="space-y-6">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: `linear-gradient(45deg, 
                          hsl(${200 + index * 30}, 70%, 60%), 
                          hsl(${220 + index * 30}, 70%, 70%))`
                      }}
                    ></div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                  <span className="font-semibold text-blue-electric">{item.value}</span>
                </div>
              ))}
            </div>
            
            {/* Visual representation */}
            <div className="mt-8 h-4 bg-gray-800 rounded-full overflow-hidden flex">
              <div className="h-full bg-gradient-to-r from-blue-electric to-cyan-400" style={{ width: '40%' }}></div>
              <div className="h-full bg-gradient-to-r from-cyan-400 to-green-400" style={{ width: '25%' }}></div>
              <div className="h-full bg-gradient-to-r from-green-400 to-yellow-400" style={{ width: '20%' }}></div>
              <div className="h-full bg-gradient-to-r from-yellow-400 to-purple-cyber" style={{ width: '15%' }}></div>
            </div>
          </div>
          
          {/* Token Utility */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl hover:glow-purple transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 gradient-text">Utility Features</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-electric rounded-full"></div>
                  <span>Access premium app features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-electric rounded-full"></div>
                  <span>Tip other users for great interactions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-electric rounded-full"></div>
                  <span>Unlock detailed contact information</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-electric rounded-full"></div>
                  <span>Stake for governance voting rights</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:glow-purple transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 gradient-text">Socialize-to-Earn™</h4>
              <p className="text-gray-300 mb-4">
                Earn tokens through verified real-world interactions and build your on-chain social graph.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-blue-electric text-blue-electric hover:bg-blue-electric/10">
                  View Contract
                </Button>
                <Button variant="outline" size="sm" className="border-purple-cyber text-purple-cyber hover:bg-purple-cyber/10">
                  Audit Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
