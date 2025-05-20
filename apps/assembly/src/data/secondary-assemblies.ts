import * as components from './components';
import * as assemblies from './primary-assemblies';
import { Assembly } from '../types';

// Secondary Assemblies
export const AA1: Assembly = {
  name: 'Back Panel Final Assembly',
  designator: 'AA1',
  inputs: [
    { input: assemblies.A15, quantity: 2 },
    { input: assemblies.A19, quantity: 1 },
  ],
  instructions: [],
};

export const AA2: Assembly = {
  name: 'Reservoir Assembly',
  designator: 'AA2',
  inputs: [
    { input: assemblies.A16, quantity: 1 },
    { input: components.P4, quantity: 1 },
  ],
  instructions: [],
};

export const AA3: Assembly = {
  name: 'Airflow Module Assembly',
  designator: 'AA3',
  inputs: [
    { input: assemblies.A12, quantity: 1 },
    { input: assemblies.A13, quantity: 1 },
    { input: assemblies.A14, quantity: 2 },
    { input: components.P9, quantity: 1 },
    { input: components.G4, quantity: 5 },
  ],
  instructions: [],
};

export const AA4: Assembly = {
  name: 'Light Bottom Assembly',
  designator: 'AA4',
  inputs: [
    { input: assemblies.A6, quantity: 1 },
    { input: assemblies.A7, quantity: 1 },
    { input: assemblies.A8, quantity: 1 },
    { input: components.G3, quantity: 1 },
  ],
  instructions: [],
};

export const AA5: Assembly = {
  name: 'Enclosure Assembly',
  designator: 'AA5',
  inputs: [
    { input: assemblies.A1, quantity: 1 },
    { input: components.N4, quantity: 1 },
    { input: components.N5, quantity: 2 },
    { input: components.N6, quantity: 1 },
    { input: components.P12, quantity: 1 },
  ],
  instructions: [],
};

export const AA6: Assembly = {
  name: 'Climate Controls Assembly',
  designator: 'AA6',
  inputs: [
    { input: assemblies.A2, quantity: 1 },
    { input: assemblies.A3, quantity: 1 },
    { input: components.S4, quantity: 1 },
    { input: components.G2, quantity: 1 },
    { input: components.P2, quantity: 2 },
  ],
  instructions: [],
};

export const secondaryAssemblies = [AA1, AA2, AA3, AA4, AA5, AA6];
