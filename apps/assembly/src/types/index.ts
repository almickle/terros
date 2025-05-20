type Category =
  | 'sheet-metal'
  | 'cnc'
  | 'plastic'
  | 'plastic-sheet'
  | 'rubber'
  | 'foam'
  | 'pcb'
  | 'misc'
  | 'external';

export interface Component {
  name: string;
  designator: string;
  category: Category;
  description?: string;
  price?: number;
  image?: string;
}

interface Input {
  input: Component | Assembly;
  quantity: number;
}

export interface Assembly {
  name: string;
  designator: string;
  inputs: Input[];
  instructions: Instruction[];
  image?: string;
}

export interface Instruction {
  instruction: string;
  image?: string;
}
