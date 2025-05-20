import * as components from './components';
import * as primaryAssemblies from './primary-assemblies';
import * as tertiaryAssemblies from './tertiary-assemblies';
import { Assembly } from '../types';

// Quaternary Assemblies
export const AAAA1: Assembly = {
  name: 'Base Assembly',
  designator: 'AAAA1',
  inputs: [
    { input: components.S1, quantity: 1 },
    { input: components.S2, quantity: 1 },
    { input: components.N1, quantity: 1 },
    { input: primaryAssemblies.A17, quantity: 1 },
    { input: tertiaryAssemblies.AAA1, quantity: 1 },
    { input: tertiaryAssemblies.AAA2, quantity: 1 },
  ],
  instructions: [],
};

export const quaternaryAssemblies = [AAAA1];
