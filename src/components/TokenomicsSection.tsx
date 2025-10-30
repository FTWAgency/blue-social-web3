
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TokenomicsSection = () => {
  const totalSupply = "2,500,000,000 $BLUE";

  // Allocation configuration with fixed color codes
  const allocations: { label: string; value: string; percentage: number; color: string }[] = [
    { label: "IDO", value: "12.30%", percentage: 12.3, color: "#4CC9F0" },
    { label: "Network Partners", value: "6.00%", percentage: 6.0, color: "#4895EF" },
    { label: "Liquidity", value: "2.28%", percentage: 2.28, color: "#4361EE" },
    { label: "Design / Development", value: "4.00%", percentage: 4.0, color: "#3A0CA3" },
    { label: "Marketing + Airdrops", value: "3.70%", percentage: 3.7, color: "#7209B7" },
    { label: "Operations / Admin", value: "3.50%", percentage: 3.5, color: "#B5179E" },
    { label: "Merger & Acquisition", value: "2.00%", percentage: 2.0, color: "#F72585" },
    { label: "Team", value: "6.50%", percentage: 6.5, color: "#FF7F50" },
    { label: "Early Investors", value: "3.04%", percentage: 3.04, color: "#F59E0B" },
    { label: "Future Investors Reserves", value: "5.60%", percentage: 5.6, color: "#10B981" },
    { label: "Earnings / Rewards", value: "50.08%", percentage: 50.08, color: "#22D3EE" },
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

            {/* Total Supply Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-blue-electric"></div>
                <span className="text-gray-300">Total Supply</span>
              </div>
              <span className="font-semibold text-blue-electric">{totalSupply}</span>
            </div>

            {/* Allocations */}
            <div className="space-y-4">
              {allocations.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: item.color }}
                    ></div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                  <span className="font-semibold text-blue-electric">{item.value}</span>
                </div>
              ))}
            </div>

          </div>
          
          {/* Allocation Pie Chart */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 gradient-text text-center">Allocation Breakdown</h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocations}
                      dataKey="percentage"
                      nameKey="label"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={1}
                    >
                      {allocations.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
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
        
        {/* Locks/Vesting attribution */}
        <div className="mt-10 flex items-center justify-center">
          <div className="glass-card px-5 py-3 rounded-full flex items-center space-x-4">
            <span className="text-sm text-gray-300">Tokens locked / vested via</span>
            <a
              href="https://www.team.finance/view-coin/0x744952c666990ddba159387a9b9e668e4e72682e?name=Blue%20Social%20Token&symbol=BLUE&chainid=0x2105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
              aria-label="View locks on Team.Finance"
            >
              <img
                src="/assets/Team.Finance%20logo.png"
                alt="Team.Finance"
                className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
