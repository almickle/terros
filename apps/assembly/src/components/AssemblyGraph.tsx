import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { Sigma } from 'react-sigma';

import { primaryAssemblies } from '../data/primary-assemblies';
import { secondaryAssemblies } from '../data/secondary-assemblies';
import { tertiaryAssemblies } from '../data/tertiary-assemblies';
import { quaternaryAssemblies } from '../data/quaternary-assemblies';
import { finalAssembly } from '../data/final-assembly';
import { components } from '@/data/components';

interface Node {
  id: string;
  name: string;
  level: number;
  x: number;
  y: number;
}

interface Link {
  source: string;
  target: string;
}

interface AssemblyGraphProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const AssemblyGraph: React.FC<AssemblyGraphProps> = ({ containerRef }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [nodes, setNodes] = useState<Map<string, Node>>(new Map());
  const [links, setLinks] = useState<Link[]>([]);

  // ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
  const padding = 20;
  const mapXValue = (val: number) => {
    return val * (width - padding * 2) + padding;
  };

  const mapYValue = (val: number) => {
    return val * (height - padding * 2) + padding;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      if (!containerRef.current) return;
      setWidth(containerRef.current.clientWidth);
      setHeight(containerRef.current.clientHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);

  useEffect(() => {
    components.forEach((entry) => {
      nodes.set(entry.designator, {
        id: entry.designator,
        name: entry.name,
        level: 0,
        x: 0,
        y: 0,
      });
    });
    primaryAssemblies.forEach((assembly) => {
      nodes.set(assembly.designator, {
        id: assembly.designator,
        name: assembly.name,
        level: 1,
        x: 0,
        y: 0,
      });
      assembly.inputs.forEach((input) => {
        links.push({
          source: assembly.designator,
          target: input.input.designator,
        });
      });
    });
    secondaryAssemblies.forEach((assembly) => {
      nodes.set(assembly.designator, {
        id: assembly.designator,
        name: assembly.name,
        level: 2,
        x: 0,
        y: 0,
      });
      assembly.inputs.forEach((input) => {
        links.push({
          source: assembly.designator,
          target: input.input.designator,
        });
      });
    });
    tertiaryAssemblies.forEach((assembly) => {
      nodes.set(assembly.designator, {
        id: assembly.designator,
        name: assembly.name,
        level: 3,
        x: 0,
        y: 0,
      });
      assembly.inputs.forEach((input) => {
        links.push({
          source: assembly.designator,
          target: input.input.designator,
        });
      });
    });
    quaternaryAssemblies.forEach((assembly) => {
      nodes.set(assembly.designator, {
        id: assembly.designator,
        name: assembly.name,
        level: 4,
        x: 0,
        y: 0,
      });
      assembly.inputs.forEach((input) => {
        links.push({
          source: assembly.designator,
          target: input.input.designator,
        });
      });
    });
    finalAssembly.forEach((assembly) => {
      nodes.set(assembly.designator, {
        id: assembly.designator,
        name: assembly.name,
        level: 5,
        x: 0,
        y: 0,
      });
      assembly.inputs.forEach((input) => {
        links.push({
          source: assembly.designator,
          target: input.input.designator,
        });
      });
    });
  }, []);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;
    d3.select(svgRef.current).selectAll('*').remove();
    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    const graph = {
      nodes: Array.from(nodes.values()),
      links: links,
    };

    const layerNodes = new Map<number, Node[]>();

    graph.nodes.forEach((node) => {
      const layer = node.level;
      if (!layerNodes.has(layer)) {
        layerNodes.set(layer, []);
      }
      layerNodes.get(layer)?.push(node);
    });

    // Sort nodes within each layer by number of connections
    layerNodes.forEach((nodes) => {
      nodes.sort((a, b) => {
        const aLinks = links.filter((l) => l.source === a.id || l.target === a.id).length;
        const bLinks = links.filter((l) => l.source === b.id || l.target === b.id).length;
        return aLinks - bLinks;
      });
    });

    // Position nodes in layers
    const layerCount = Array.from(layerNodes.keys()).length;
    if (layerCount === 0) return;

    const layerHeight = 1 / (layerCount - 1);

    Array.from(layerNodes.entries()).forEach(([layer, nodes]) => {
      const nodeCount = nodes.length;
      const nodeSpacing = 1 / (nodeCount + 1);

      const y = layer * layerHeight;

      nodes.forEach((node, i) => {
        node.x = mapXValue(nodeSpacing + i * nodeSpacing);
        node.y = mapYValue(1 - y);
      });
    });

    // Draw links with improved layout
    svg
      .append('g')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      // .attr('stroke-width', (d: Link) => d.quantity * 2 || 1)
      .attr('stroke-width', 1)
      .attr('x1', (d: Link) => nodes.get(d.source)?.x || 0)
      .attr('y1', (d: Link) => nodes.get(d.source)?.y || 0)
      .attr('x2', (d: Link) => nodes.get(d.target)?.x || 0)
      .attr('y2', (d: Link) => nodes.get(d.target)?.y || 0);

    // Draw nodes
    svg
      .append('g')
      .selectAll('g')
      .data(graph.nodes)
      .enter()
      .append('g')
      .attr('transform', (d: Node) => `translate(${d.x},${d.y})`)
      .append('circle')
      // .attr('r', (d: Node) => (d.type === 'assembly' ? 20 : 15))
      // .attr('fill', (d: Node) => (d.type === 'assembly' ? '#69b3a2' : '#4a90e2'));
      .attr('r', 20)
      .attr('fill', '#69b3a2');

    // Draw node labels
    svg
      .append('g')
      .selectAll('g')
      .data(graph.nodes)
      .enter()
      .append('g')
      .attr('transform', (d: Node) => `translate(${d.x},${d.y})`)
      .append('text')
      .text((d: Node) => d.name)
      .attr('dx', 20)
      .attr('dy', 5);

    return () => {
      // Cleanup
    };
  }, [nodes, links, width, height]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg
        ref={svgRef}
        style={{
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};
