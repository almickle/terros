import { Assembly } from './types';
import { AssemblySection } from './components/AssemblySection';
import { TableOfContents } from './components/TableOfContents';
import { primaryAssemblies } from './data/primary-assemblies';
import { secondaryAssemblies } from './data/secondary-assemblies';
import { tertiaryAssemblies } from './data/tertiary-assemblies';
import { quaternaryAssemblies } from './data/quaternary-assemblies';
import { finalAssembly } from './data/final-assembly';

function App() {
  // Group assemblies by level
  const assemblyGroups = [
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
        {assemblyGroups.map(({ level, assemblies }, groupIndex) => (
          <div key={level} className="assembly-level">
            <h2 className="level-header">
              {level === 'final'
                ? 'Final Assembly'
                : level.charAt(0).toUpperCase() + level.slice(1) + ' Assemblies'}
            </h2>
            {assemblies.map((assembly, index) => (
              <AssemblySection key={assembly.designator} assembly={assembly} level={0} />
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
