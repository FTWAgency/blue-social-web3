
import { useEffect, useState } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  connections: string[];
  active: boolean;
}

interface Connection {
  from: string;
  to: string;
  active: boolean;
}

const AnimatedSocialGraph = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Initialize nodes in a circular pattern
    const initialNodes: Node[] = [
      { id: 'center', x: 200, y: 150, connections: ['node1', 'node2', 'node3'], active: true },
      { id: 'node1', x: 120, y: 80, connections: ['center', 'node4'], active: false },
      { id: 'node2', x: 280, y: 80, connections: ['center', 'node5'], active: false },
      { id: 'node3', x: 320, y: 200, connections: ['center', 'node6'], active: false },
      { id: 'node4', x: 80, y: 220, connections: ['node1'], active: false },
      { id: 'node5', x: 320, y: 280, connections: ['node2'], active: false },
      { id: 'node6', x: 150, y: 280, connections: ['node3'], active: false },
    ];

    const initialConnections: Connection[] = [
      { from: 'center', to: 'node1', active: false },
      { from: 'center', to: 'node2', active: false },
      { from: 'center', to: 'node3', active: false },
      { from: 'node1', to: 'node4', active: false },
      { from: 'node2', to: 'node5', active: false },
      { from: 'node3', to: 'node6', active: false },
    ];

    setNodes(initialNodes);
    setConnections(initialConnections);

    // Animate connections appearing one by one
    const animateConnections = () => {
      let index = 0;
      const interval = setInterval(() => {
        // Check if we're still within bounds
        if (index >= initialConnections.length) {
          clearInterval(interval);
          // Reset after a delay and restart
          setTimeout(() => {
            setNodes(prev => prev.map(node => ({ ...node, active: node.id === 'center' })));
            setConnections(prev => prev.map(conn => ({ ...conn, active: false })));
            setTimeout(() => animateConnections(), 1000);
          }, 2000);
          return;
        }

        // Get the current connection safely
        const currentConnection = initialConnections[index];
        if (!currentConnection) {
          index++;
          return;
        }

        setConnections(prev => 
          prev.map((conn, i) => 
            i === index ? { ...conn, active: true } : conn
          )
        );
        
        setNodes(prev => 
          prev.map(node => {
            if (node.id === currentConnection.to) {
              return { ...node, active: true };
            }
            return node;
          })
        );

        index++;
      }, 800);
    };

    const timeoutId = setTimeout(() => animateConnections(), 1000);
    
    // Cleanup function to prevent memory leaks
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
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
              className="transition-all duration-500"
              style={{
                filter: conn.active ? 'drop-shadow(0 0 4px #1e90ff)' : 'none'
              }}
            />
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.id === 'center' ? 12 : 8}
            fill={node.active ? '#1e90ff' : '#374151'}
            className="transition-all duration-500"
            style={{
              filter: node.active ? 'drop-shadow(0 0 8px #1e90ff)' : 'none'
            }}
          >
            {node.active && (
              <animate
                attributeName="r"
                values={node.id === 'center' ? '12;16;12' : '8;12;8'}
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="glass-card px-4 py-2 rounded-lg text-sm text-gray-300">
          <span className="text-blue-electric">●</span> Active proximity connections
        </div>
      </div>
    </div>
  );
};

export default AnimatedSocialGraph;
