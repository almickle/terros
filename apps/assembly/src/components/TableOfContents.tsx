interface TableOfContentsProps {
  assemblyGroups: Array<{
    level: string;
    assemblies: Array<{
      name: string;
      designator: string;
      inputs: any[];
    }>;
  }>;
}

export const TableOfContents = ({ assemblyGroups }: TableOfContentsProps) => {
  return (
    <nav className="table-of-contents">
      <h2>Table of Contents</h2>
      
      {assemblyGroups.map(({ level, assemblies }) => (
        <div key={level} className="assembly-level-group">
          <h3>{
            level === 'final' 
              ? 'Final Assembly' 
              : level.charAt(0).toUpperCase() + level.slice(1) + ' Assemblies'
          }</h3>
          <ul>
            {assemblies.map((assembly, index) => (
              <li key={index}>
                <a href={`#${assembly.designator}`}>
                  {assembly.designator}: {assembly.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
