import { useState, useRef, useEffect, useCallback } from 'react';

import { motion } from 'framer-motion';

import { Tile } from '@/components/Tile';

interface TileConfig {
  id: string;
  label: string;
  position: {
    x: number; // 0-1 relative position
    y: number; // 0-1 relative position
  };
  connections: string[];
}

const gridDimensions = {
  width: 6,
  height: 6,
};

const tileDimensions = {
  width: 80,
  height: 80,
};

const tileConfigs: TileConfig[] = [
  // Row 1
  {
    id: '1',
    label: 'Start',
    position: { x: 2, y: 0 },
    connections: ['2', '3'],
  },
  // Row 2
  {
    id: '2',
    label: 'Explore',
    position: { x: 0, y: 1 },
    connections: ['3'],
  },
  {
    id: '3',
    label: 'Discover',
    position: { x: 3, y: 1 },
    connections: ['6'],
  },
  {
    id: '4',
    label: 'Learn',
    position: { x: 4, y: 1 },
    connections: ['8'],
  },
  // Row 3
  {
    id: '5',
    label: 'Create',
    position: { x: 1, y: 2 },
    connections: ['6'],
  },
  {
    id: '6',
    label: 'Connect',
    position: { x: 2, y: 2 },
    connections: ['7'],
  },
  {
    id: '7',
    label: 'Innovate',
    position: { x: 3, y: 2 },
    connections: ['10'],
  },
  {
    id: '8',
    label: 'Grow',
    position: { x: 5, y: 2 },
    connections: ['10'],
  },
  // Row 4
  {
    id: '9',
    label: 'Transform',
    position: { x: 0, y: 3 },
    connections: ['11'],
  },
  {
    id: '10',
    label: 'Evolve',
    position: { x: 3, y: 3 },
    connections: ['12'],
  },
  // Row 5
  {
    id: '11',
    label: 'Inspire',
    position: { x: 2, y: 4 },
    connections: ['12'],
  },
  {
    id: '12',
    label: 'Empower',
    position: { x: 3, y: 4 },
    connections: ['13'],
  },
  {
    id: '13',
    label: 'Lead',
    position: { x: 4, y: 4 },
    connections: ['15'],
  },
  // Row 6
  {
    id: '14',
    label: 'Impact',
    position: { x: 1, y: 5 },
    connections: ['15'],
  },
  {
    id: '15',
    label: 'Legacy',
    position: { x: 4, y: 5 },
    connections: ['16'],
  },
  {
    id: '16',
    label: 'Innovate',
    position: { x: 5, y: 5 },
    connections: [],
  },
];

export function OrganicTileGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const mapRange = (x: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return outMin + ((x - inMin) * (outMax - outMin)) / (inMax - inMin);
  };

  const getTilePosition = useCallback(
    (id: string) => {
      const config = tileConfigs.find((b) => b.id === id);
      const pos = config?.position || { x: 0, y: 0 };
      return {
        x:
          mapRange(pos.x, 0, gridDimensions.width, 0, containerDimensions?.width ?? 0) +
          tileDimensions.width / 2,
        y:
          mapRange(pos.y, 0, gridDimensions.height, 0, containerDimensions?.height ?? 0) +
          tileDimensions.height / 2,
      };
    },
    [containerDimensions]
  );

  const getLinePath = useCallback(
    (startId: string, endId: string) => {
      const start = getTilePosition(startId);
      const end = getTilePosition(endId);
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;

      // Add some curve variation
      const curveX = 50;
      const curveY = 50;

      return `M${start.x},${start.y} Q${midX + curveX},${midY + curveY} ${end.x},${end.y}`;
    },
    [getTilePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-half overflow-hidden m-4"
      style={{ aspectRatio: '1', height: 'auto' }}
    >
      {/* SVG Container */}
      <svg viewBox={`0 0 ${containerDimensions?.width} ${containerDimensions?.height}`}>
        {/* Lines */}
        {tileConfigs.map((tile) => {
          return tile.connections.map((connection) => (
            <motion.path
              key={`${tile.id}-${connection}`}
              d={getLinePath(tile.id, connection)}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="opacity-20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          ));
        })}
      </svg>

      {/* Tiles */}
      {tileConfigs.map((tile) => (
        <motion.div
          key={tile.id}
          className="absolute"
          style={{
            left: getTilePosition(tile.id).x - tileDimensions.width / 2,
            top: getTilePosition(tile.id).y - tileDimensions.height / 2,
          }}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Tile
            label={tile.label}
            dimensions={tileDimensions}
            onClick={() => console.log(tile.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default OrganicTileGrid;
