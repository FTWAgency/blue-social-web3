import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Temporary BuyWidget until we resolve the thirdweb configuration
const BuyWidget = ({ amount }: { amount: string }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-electric to-purple-cyber rounded-xl flex items-center justify-center mb-4 mx-auto">
          <span className="text-2xl">💎</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Get $BLUE Tokens</h3>
        <p className="text-gray-400 text-sm mb-4">Purchase {amount} BLUE tokens</p>
        <div className="bg-gradient-to-r from-blue-electric/20 to-purple-cyber/20 border border-blue-electric/30 rounded-lg p-4 mb-4">
          <p className="text-blue-electric text-sm font-mono">
            Amount: {amount} BLUE<br/>
            Network: Base (Chain ID: 8453)<br/>
            Token: 0x744952C666990dDba159387a9B9e668e4e72682E<br/>
            Payment: Credit Card or Crypto
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-electric to-purple-cyber hover:from-blue-electric/80 hover:to-purple-cyber/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 glow-blue">
          Buy BLUE Tokens
        </button>
      </div>
    </div>
  );
};

const BuyBlueTokensSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('10');

  const amounts = [
    { value: '10', label: '50 BLUE', popular: false },
    { value: '50', label: '100 BLUE', popular: true },
    { value: '100', label: '500 BLUE', popular: false },
    { value: '500', label: '1000 BLUE', popular: false },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-blue-dark">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-electric/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-cyber/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Buy <span className="gradient-text">$BLUE</span> Tokens
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your $BLUE tokens to unlock premium features, earn rewards, and participate in the decentralized social economy
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Buy Widget */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-8 rounded-2xl glow-blue">
                <h3 className="text-2xl font-bold text-white mb-6">Purchase $BLUE Tokens</h3>
                
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-gray-300 mb-3 font-medium">Select Amount</label>
                  <div className="grid grid-cols-2 gap-3">
                    {amounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => setSelectedAmount(amount.value)}
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          selectedAmount === amount.value
                            ? 'border-blue-electric bg-blue-electric/10 text-blue-electric'
                            : 'border-white/20 bg-white/5 text-gray-300 hover:border-blue-electric/50'
                        } ${amount.popular ? 'ring-2 ring-blue-electric/30' : ''}`}
                      >
                        <div className="text-lg font-semibold">{amount.label}</div>
                        {amount.popular && (
                          <div className="text-xs text-blue-electric mt-1">Most Popular</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Buy Widget */}
                <BuyWidget amount={selectedAmount} />
              </div>
            </motion.div>

            {/* Right side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Why Buy $BLUE Tokens?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-electric to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Unlock Premium Features</h4>
                      <p className="text-gray-300">Access advanced social features, priority discovery, and exclusive networking tools</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">💰</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Earn Rewards</h4>
                      <p className="text-gray-300">Get rewarded for real-world interactions, social proof, and community contributions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🏆</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Governance Rights</h4>
                      <p className="text-gray-300">Participate in platform decisions and shape the future of decentralized social networking</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🔗</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Network Access</h4>
                      <p className="text-gray-300">Unlock contact information and deeper connections with people you meet in real life</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Info */}
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-white mb-4">Token Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Network:</span>
                    <div className="text-white font-medium">Base (Ethereum L2)</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Token Standard:</span>
                    <div className="text-white font-medium">ERC-20</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Payment Methods:</span>
                    <div className="text-white font-medium">Credit Card, Crypto</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Processing Time:</span>
                    <div className="text-white font-medium">Instant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBlueTokensSection;
