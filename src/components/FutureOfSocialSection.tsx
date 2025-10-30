import { useEffect, useState, useRef } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  connections: string[];
  active: boolean;
  pulse: boolean;
  ensTag?: string;
  walletAddress?: string;
  interactionTime?: string;
  duration?: string;
  contractHash?: string;
}

interface Connection {
  from: string;
  to: string;
  active: boolean;
  opacity: number;
}

const FutureOfSocialSection = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Helper function to format wallet address
  const formatWalletAddress = (address: string) => {
    if (address.length < 10) return address;
    return `${address.slice(0, 4)}...${address.slice(-6)}`;
  };

  useEffect(() => {
    console.log('FutureOfSocialSection useEffect running...'); // Debug log
    
    // Initialize nodes in a more complex pattern with ENS tags and wallet data
    const initialNodes: Node[] = [
      { 
        id: 'center', 
        x: 200, 
        y: 150, 
        connections: ['node1', 'node2', 'node3', 'node4'], 
        active: true, 
        pulse: true,
        ensTag: '0x43...daB',
        walletAddress: '0x43a1b2c3d4e5f6789012345678901234567890daB',
        interactionTime: '2024-01-15 14:30:00',
        duration: '15 minutes',
        contractHash: '0x7f8e9a1b2c3d4e5f6789012345678901234567890abcdef'
      },
      { 
        id: 'node1', 
        x: 120, 
        y: 80, 
        connections: ['center', 'node5', 'node6'], 
        active: false, 
        pulse: false,
        ensTag: '0x12...fE7',
        walletAddress: '0x12a3b4c5d6e7f890123456789012345678901234fE7',
        interactionTime: '2024-01-15 15:45:00',
        duration: '8 minutes',
        contractHash: '0x1a2b3c4d5e6f7890123456789012345678901234567890abcd'
      },
      { 
        id: 'node2', 
        x: 280, 
        y: 80, 
        connections: ['center', 'node5', 'node6'], 
        active: false, 
        pulse: false,
        ensTag: '0x89...cD4',
        walletAddress: '0x89b1c2d3e4f567890123456789012345678901234cD4',
        interactionTime: '2024-01-15 16:15:00',
        duration: '12 minutes',
        contractHash: '0x2b3c4d5e6f7890123456789012345678901234567890abcde'
      },
      { 
        id: 'node3', 
        x: 320, 
        y: 200, 
        connections: ['center', 'node9', 'node10'], 
        active: false, 
        pulse: false,
        ensTag: '0x56...gH9',
        walletAddress: '0x56c1d2e3f456789012345678901234567890123456gH9',
        interactionTime: '2024-01-15 16:00:00',
        duration: '20 minutes',
        contractHash: '0x3c4d5e6f7890123456789012345678901234567890abcdef'
      },
      { 
        id: 'node4', 
        x: 80, 
        y: 220, 
        connections: ['center', 'node11', 'node12'], 
        active: false, 
        pulse: false,
        ensTag: '0x34...iJ2',
        walletAddress: '0x34d1e2f3456789012345678901234567890123456iJ2',
        interactionTime: '2024-01-15 13:30:00',
        duration: '25 minutes',
        contractHash: '0x4d5e6f7890123456789012345678901234567890abcdef1'
      },
      { id: 'node5', x: 60, y: 40, connections: ['node1'], active: false, pulse: false },
      { id: 'node6', x: 180, y: 40, connections: ['node1'], active: false, pulse: false },
      { id: 'node7', x: 340, y: 40, connections: ['node2'], active: false, pulse: false },
      { id: 'node8', x: 400, y: 120, connections: ['node2'], active: false, pulse: false },
      { id: 'node9', x: 400, y: 280, connections: ['node3'], active: false, pulse: false },
      { id: 'node10', x: 320, y: 320, connections: ['node3'], active: false, pulse: false },
      { id: 'node11', x: 40, y: 280, connections: ['node4'], active: false, pulse: false },
      { id: 'node12', x: 120, y: 320, connections: ['node4'], active: false, pulse: false },
    ];

    const initialConnections: Connection[] = [
      { from: 'center', to: 'node1', active: false, opacity: 0 },
      { from: 'center', to: 'node2', active: false, opacity: 0 },
      { from: 'center', to: 'node3', active: false, opacity: 0 },
      { from: 'center', to: 'node4', active: false, opacity: 0 },
      { from: 'node1', to: 'node5', active: false, opacity: 0 },
      { from: 'node1', to: 'node6', active: false, opacity: 0 },
      { from: 'node2', to: 'node7', active: false, opacity: 0 },
      { from: 'node2', to: 'node8', active: false, opacity: 0 },
      { from: 'node3', to: 'node9', active: false, opacity: 0 },
      { from: 'node3', to: 'node10', active: false, opacity: 0 },
      { from: 'node4', to: 'node11', active: false, opacity: 0 },
      { from: 'node4', to: 'node12', active: false, opacity: 0 },
    ];

    setNodes(initialNodes);
    setConnections(initialConnections);

    // Start animation immediately after a short delay
    const startAnimation = () => {
      console.log('startAnimation called, setting isVisible to true'); // Debug log
      setIsVisible(true);
      setTimeout(() => animateNetwork(), 500);
    };

    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observer triggered:', entry.isIntersecting); // Debug log
        if (entry.isIntersecting && !isVisible) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      console.log('Setting up intersection observer on sectionRef.current'); // Debug log
      observer.observe(sectionRef.current);
    } else {
      console.log('sectionRef.current is null!'); // Debug log
    }

    // Fallback: start animation after 2 seconds if not triggered by intersection observer
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer triggered, isVisible:', isVisible); // Debug log
      if (!isVisible) {
        startAnimation();
      }
    }, 2000);

    // TEST: Force animation to start immediately for debugging
    const testTimer = setTimeout(() => {
      console.log('TEST: Forcing animation to start immediately'); // Debug log
      startAnimation();
    }, 1000);

    return () => {
      console.log('Cleanup: disconnecting observer and clearing timer'); // Debug log
      observer.disconnect();
      clearTimeout(fallbackTimer);
      clearTimeout(testTimer);
    };
  }, [isVisible]);

  const animateNetwork = () => {
    if (!isVisible) return;

    console.log('Starting network animation...'); // Debug log

    // Animate connections appearing one by one
    let connectionIndex = 0;
    const animateConnections = () => {
      if (connectionIndex >= connections.length) {
        console.log('Animation cycle complete, restarting...'); // Debug log
        // Reset and restart animation
        setTimeout(() => {
          setNodes(prev => prev.map(node => ({ ...node, active: node.id === 'center', pulse: node.id === 'center' })));
          setConnections(prev => prev.map(conn => ({ ...conn, active: false, opacity: 0 })));
          setTimeout(() => animateNetwork(), 2000);
        }, 3000);
        return;
      }

      const currentConnection = connections[connectionIndex];
      if (currentConnection) {
        console.log(`Animating connection ${connectionIndex}: ${currentConnection.from} -> ${currentConnection.to}`); // Debug log
        
        setConnections(prev => 
          prev.map((conn, i) => 
            i === connectionIndex ? { ...conn, active: true, opacity: 1 } : conn
          )
        );
        
        setNodes(prev => 
          prev.map(node => {
            if (node.id === currentConnection.to) {
              return { ...node, active: true, pulse: true };
            }
            return node;
          })
        );
      }

      connectionIndex++;
      setTimeout(animateConnections, 600);
    };

    animateConnections();
  };

  const handleNodeHover = (node: Node, event: React.MouseEvent) => {
    if (node.walletAddress) {
      setHoveredNode(node);
      const rect = event.currentTarget.getBoundingClientRect();
      const containerRect = event.currentTarget.closest('.relative')?.getBoundingClientRect();
      
      if (containerRect) {
        // Position tooltip next to the node
        const nodeX = rect.left - containerRect.left + rect.width / 2;
        const nodeY = rect.top - containerRect.top;
        
        // Determine if tooltip should appear to the right or left of node
        const tooltipWidth = 256; // min-w-64 = 16rem = 256px
        const containerWidth = containerRect.width;
        
        let tooltipX = nodeX + 20; // Default to right of node
        
        // If tooltip would go off the right edge, position it to the left
        if (nodeX + tooltipWidth + 20 > containerWidth) {
          tooltipX = nodeX - tooltipWidth - 20;
        }
        
        setTooltipPosition({
          x: tooltipX,
          y: nodeY - 80 // Above the node
        });
      }
    }
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/5 to-purple-cyber/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-cyber/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of Social <span className="gradient-text">Belongs to You</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Blue Social is pioneering the first decentralized social graph powered by real-world interactions. Your network is no longer owned by corporations, it's built from proximity, owned by you, and secured on-chain.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Join us in creating a new kind of social experience — one that's authentic, rewarding, and truly yours.
          </p>
        </div>
        
        {/* Network Visualization */}
        <div className="relative w-full h-80 flex items-center justify-center mb-12">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Render connections */}
            {connections.map((conn, index) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              
              if (!fromNode || !toNode) return null;
              
              return (
                <line
                  key={index}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={conn.active ? '#1e90ff' : 'transparent'}
                  strokeWidth="2"
                  opacity={conn.opacity}
                  className="transition-all duration-1000"
                  style={{
                    filter: conn.active ? 'drop-shadow(0 0 6px #1e90ff)' : 'none'
                  }}
                />
              );
            })}
            
            {/* Render nodes */}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.id === 'center' ? 14 : 10}
                  fill={node.active ? '#1e90ff' : '#374151'}
                  className="transition-all duration-500 cursor-pointer"
                  style={{
                    filter: node.active ? 'drop-shadow(0 0 12px #1e90ff)' : 'none'
                  }}
                  onMouseEnter={(e) => handleNodeHover(node, e)}
                  onMouseLeave={handleNodeLeave}
                >
                  {node.pulse && (
                    <animate
                      attributeName="r"
                      values={node.id === 'center' ? '14;18;14' : '10;14;10'}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
                
                {/* ENS Tag */}
                {node.ensTag && (
                  <text
                    x={node.x + 20}
                    y={node.y + 4}
                    className="text-xs font-mono fill-blue-electric"
                    style={{
                      filter: node.active ? 'drop-shadow(0 0 4px #1e90ff)' : 'none'
                    }}
                  >
                    {node.ensTag}
                  </text>
                )}
              </g>
            ))}
          </svg>
          
          {/* Tooltip */}
          {hoveredNode && (
            <div 
              className="absolute z-50 glass-card p-4 rounded-lg text-sm min-w-64"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                pointerEvents: 'none'
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Wallet:</span>
                  <span className="text-blue-electric font-mono text-xs">
                    {hoveredNode.walletAddress ? formatWalletAddress(hoveredNode.walletAddress) : ''}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Interaction:</span>
                  <span className="text-white text-xs">{hoveredNode.interactionTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{hoveredNode.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Transaction:</span>
                  <a 
                    href={`https://etherscan.io/tx/${hoveredNode.contractHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-electric font-mono text-xs hover:underline"
                    style={{ pointerEvents: 'auto' }}
                  >
                    {hoveredNode.contractHash?.slice(0, 10)}...
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card inline-block p-8 rounded-2xl glow-purple max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Ready to Own Your Network?</h3>
            <p className="text-gray-300 mb-6">
              Start building your decentralized social graph today. Every real-world interaction becomes a valuable connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-electric to-purple-cyber hover:from-blue-electric/80 hover:to-purple-cyber/80 glow-blue transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Download App
              </button>
              <button className="border border-blue-electric text-blue-electric hover:bg-blue-electric/10 glow-blue transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOfSocialSection; 