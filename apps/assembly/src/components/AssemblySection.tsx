import { Assembly } from '../types';

interface AssemblySectionProps {
  assembly: Assembly;
  level: number;
}

export const AssemblySection = ({ assembly, level }: AssemblySectionProps) => {
  const getIndentation = () => {
    return '  '.repeat(level);
  };

  return (
    <section className="assembly-section">
      <h2>
        {getIndentation()} {assembly.designator}: {assembly.name}
      </h2>

      <h3>
        {level === 0 ? 'Components & Subassemblies' : 'Component'}
      </h3>
      <ul className="components-list">
        {assembly.inputs.map((input, index) => (
          <li key={index}>
            {input.quantity}x {input.input.designator}: {input.input.name}
          </li>
        ))}
      </ul>

      <h3>Assembly Instructions</h3>
      <ol className="instructions-list">
        {assembly.instructions.map((instruction, index) => (
          <li key={index} className="instruction-item">
            <p>{instruction.instruction}</p>
            {instruction.image && (
              <img
                src={instruction.image}
                alt={`Step ${index + 1} of ${assembly.name} assembly`}
                className="instruction-image"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
