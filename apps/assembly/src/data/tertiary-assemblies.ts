import * as components from './components';
import * as primaryAssemblies from './primary-assemblies';
import * as secondaryAssemblies from './secondary-assemblies';
import { Assembly } from '../types';

// Tertiary Assemblies
export const AAA1: Assembly = {
  name: 'Internals Assembly',
  designator: 'AAA1',
  inputs: [
    { input: primaryAssemblies.A9, quantity: 2 },
    { input: primaryAssemblies.A10, quantity: 1 },
    { input: primaryAssemblies.A11, quantity: 1 },
    { input: primaryAssemblies.A18, quantity: 1 },
    { input: secondaryAssemblies.AA1, quantity: 1 },
    { input: secondaryAssemblies.AA2, quantity: 1 },
    { input: secondaryAssemblies.AA3, quantity: 1 },
  ],
  instructions: [],
};

export const AAA2: Assembly = {
  name: 'Light Assembly',
  designator: 'AAA2',
  inputs: [
    { input: components.E4, quantity: 1 },
    { input: components.G3, quantity: 1 },
    { input: primaryAssemblies.A4, quantity: 1 },
    { input: primaryAssemblies.A5, quantity: 1 },
    { input: secondaryAssemblies.AA4, quantity: 1 },
  ],
  instructions: [],
};

export const AAA3: Assembly = {
  name: 'Body Assembly',
  designator: 'AAA3',
  inputs: [
    { input: secondaryAssemblies.AA5, quantity: 1 },
    { input: secondaryAssemblies.AA6, quantity: 1 },
  ],
  instructions: [],
};

export const tertiaryAssemblies = [AAA1, AAA2, AAA3];
