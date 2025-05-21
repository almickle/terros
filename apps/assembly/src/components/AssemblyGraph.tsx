import React, { useState, useEffect } from 'react';
import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { useLayoutNoverlap } from '@react-sigma/layout-noverlap';
import Graph from 'graphology';

import { primaryAssemblies } from '../data/primary-assemblies';
import { secondaryAssemblies } from '../data/secondary-assemblies';
import { tertiaryAssemblies } from '../data/tertiary-assemblies';
import { quaternaryAssemblies } from '../data/quaternary-assemblies';
import { finalAssembly } from '../data/final-assembly';
import { components } from '@/data/components';
import { Assembly } from '@/types';

interface AssemblyGraphProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const LoadGraph: React.FC = () => {
  const loadGraph = useLoadGraph();
  const { positions, assign } = useLayoutNoverlap();

  useEffect(() => {
    const graph = new Graph();

    // Add parts
    components.forEach((entry) => {
      graph.addNode(entry.designator, {
        id: entry.designator,
        label: entry.name,
        level: 0,
        x: 0,
        y: 0,
      });
    });

    const addAssemblies = (assemblies: Assembly[], level: number) => {
      assemblies.forEach((assembly) => {
        graph.addNode(assembly.designator, {
          id: assembly.designator,
          label: assembly.name,
          level,
          x: 0,
          y: 0,
        });
        assembly.inputs.forEach((input: any) => {
          graph.addDirectedEdge(assembly.designator, input.input.designator);
        });
      });
    };

    addAssemblies(primaryAssemblies, 1);
    addAssemblies(secondaryAssemblies, 2);
    addAssemblies(tertiaryAssemblies, 3);
    addAssemblies(quaternaryAssemblies, 4);
    addAssemblies(finalAssembly, 5);

    loadGraph(graph);
    assign();
  }, [assign, loadGraph, positions]);

  return null;
};

export const AssemblyGraph: React.FC<AssemblyGraphProps> = ({ containerRef }) => {
  const [width, setWidth] = useState(containerRef.current?.clientWidth || 800);
  const [height, setHeight] = useState(containerRef.current?.clientHeight || 600);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      if (!containerRef.current) return;
      setWidth(containerRef.current.clientWidth);
      setHeight(containerRef.current.clientHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);

  return (
    <SigmaContainer id="sigma-graph" style={{ width, height }}>
      <LoadGraph />
    </SigmaContainer>
  );
};
