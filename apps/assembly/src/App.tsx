import { useRef } from 'react';
import { AssemblyGroup } from './types';
import { AssemblySection } from './components/AssemblySection';
import { TableOfContents } from './components/TableOfContents';
import { AssemblyGraph } from './components/AssemblyGraph';
import { primaryAssemblies } from './data/primary-assemblies';
import { secondaryAssemblies } from './data/secondary-assemblies';
import { tertiaryAssemblies } from './data/tertiary-assemblies';
import { quaternaryAssemblies } from './data/quaternary-assemblies';
import { finalAssembly } from './data/final-assembly';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Group assemblies by level
  const assemblyGroups: AssemblyGroup[] = [
    { level: 'primary', assemblies: primaryAssemblies },
    { level: 'secondary', assemblies: secondaryAssemblies },
    { level: 'tertiary', assemblies: tertiaryAssemblies },
    { level: 'quaternary', assemblies: quaternaryAssemblies },
    { level: 'final', assemblies: finalAssembly },
  ];

  return (
    <div className="app">
      <TableOfContents assemblyGroups={assemblyGroups} />

      <main className="assembly-content">
        <style>
          {`
            .assembly-item {
              margin-bottom: 2rem;
            }
            .assembly-item svg {
              width: 100%;
              max-width: 800px;
              margin: 1rem 0;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
          `}
        </style>
        <div className="assembly-graph">
          <h2>Assembly Relationships</h2>
          <div className="graph-container" ref={containerRef}>
            <AssemblyGraph containerRef={containerRef} />
          </div>
        </div>
        {assemblyGroups.map(({ level, assemblies }) => (
          <div key={level} className="assembly-level">
            <h2 className="level-header">
              {level === 'final'
                ? 'Final Assembly'
                : level.charAt(0).toUpperCase() + level.slice(1) + ' Assemblies'}
            </h2>
            {assemblies.map((assembly) => (
              <div key={assembly.designator} className="assembly-item">
                <AssemblySection assembly={assembly} level={0} />
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
