import * as components from './components';
import * as quaternaryAssemblies from './quaternary-assemblies';
import * as tertiaryAssemblies from './tertiary-assemblies';
import { Assembly } from '../types';

// Final Assembly
export const AAAAA1: Assembly = {
  name: 'Terrarium',
  designator: 'AAAAA1',
  inputs: [
    { input: components.N3, quantity: 1 },
    { input: components.F6, quantity: 1 },
    { input: tertiaryAssemblies.AAA3, quantity: 1 },
    { input: quaternaryAssemblies.AAAA1, quantity: 1 },
  ],
  instructions: [],
};

export const finalAssembly = [AAAAA1];
