import React, { useState, useEffect } from 'react';
import { SigmaContainer, useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import Graph from 'graphology';
import dagre from '@dagrejs/dagre';

import { components } from '@/data/components';
import { primaryAssemblies } from '@/data/primary-assemblies';
import { secondaryAssemblies } from '@/data/secondary-assemblies';
import { tertiaryAssemblies } from '@/data/tertiary-assemblies';
import { quaternaryAssemblies } from '@/data/quaternary-assemblies';
import { finalAssembly } from '@/data/final-assembly';
import { Assembly } from '@/types';

interface AssemblyGraphProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const colorMap = {
  0: '#FFFF00',
  1: '#59A14F',
  2: '#4E79A7',
  3: '#AF7AA1',
  4: '#F48FB1',
  5: '#E15759',
};

const getColor = (level: number) => {
  switch (level) {
    case 0:
      return colorMap[0];
    case 1:
      return colorMap[1];
    case 2:
      return colorMap[2];
    case 3:
      return colorMap[3];
    case 4:
      return colorMap[4];
    case 5:
      return colorMap[5];
    default:
      return '#000000';
  }
};

const addAssemblies = (graph: dagre.graphlib.Graph, assemblies: Assembly[], level: number) => {
  assemblies.forEach((assembly) => {
    graph.setNode(assembly.designator, {
      id: assembly.designator,
      label: assembly.designator,
      level,
      color: getColor(level),
      size: 10,
      x: 0,
      y: 0,
      forceLabel: true,
    });
    assembly.inputs.forEach((input: any) => {
      graph.setEdge(assembly.designator, input.input.designator);
    });
  });
};

// Component to load the graph
const LoadGraph: React.FC = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new dagre.graphlib.Graph();
    graph.setGraph({
      rankdir: 'LR',
      nodesep: 50,
      ranksep: 300,
    });

    graph.setDefaultNodeLabel(() => ({}));
    graph.setDefaultEdgeLabel(() => ({}));

    // Add parts
    components.forEach((entry) => {
      graph.setNode(entry.designator, {
        id: entry.designator,
        label: entry.designator,
        level: 0,
        color: getColor(0),
        size: 10,
        x: 0,
        y: 0,
        forceLabel: true,
      });
    });

    addAssemblies(graph, primaryAssemblies, 1);
    addAssemblies(graph, secondaryAssemblies, 2);
    addAssemblies(graph, tertiaryAssemblies, 3);
    addAssemblies(graph, quaternaryAssemblies, 4);
    addAssemblies(graph, finalAssembly, 5);

    dagre.layout(graph);

    const renderGraph = new Graph();
    graph.nodes().forEach((node) => {
      renderGraph.addNode(node, graph.node(node));
    });
    graph.edges().forEach((edge) => {
      const { v, w } = edge;
      renderGraph.addDirectedEdge(v, w, {
        type: 'arrow',
      });
    });
    loadGraph(renderGraph);
  }, [loadGraph]);

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
