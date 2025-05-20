import * as components from './components';
import { Assembly } from '../types';

// Primary Assemblies
export const A1: Assembly = {
  name: 'Enclosure Back Assembly',
  designator: 'A1',
  inputs: [
    { input: components.N7, quantity: 1 },
    { input: components.G1, quantity: 4 },
  ],
  instructions: [],
};

export const A2: Assembly = {
  name: 'Moisture Sensor Assembly',
  designator: 'A2',
  inputs: [
    { input: components.S10, quantity: 1 },
    { input: components.E2, quantity: 1 },
  ],
  instructions: [],
};

export const A3: Assembly = {
  name: 'Water Pipe Assembly',
  designator: 'A3',
  inputs: [
    { input: components.P1, quantity: 1 },
    { input: components.X13, quantity: 10 },
  ],
  instructions: [],
};

export const A4: Assembly = {
  name: 'Light Top Metal Assembly',
  designator: 'A4',
  inputs: [
    { input: components.S6, quantity: 1 },
    { input: components.M2, quantity: 1 },
  ],
  instructions: [],
};

export const A5: Assembly = {
  name: 'Light Electrical Top Assembly',
  designator: 'A5',
  inputs: [
    { input: components.X4, quantity: 1 },
    { input: components.C1, quantity: 1 },
  ],
  instructions: [],
};

export const A6: Assembly = {
  name: 'Light Bottom Metal Assembly',
  designator: 'A6',
  inputs: [
    { input: components.S5, quantity: 1 },
    { input: components.M1, quantity: 1 },
  ],
  instructions: [],
};

export const A7: Assembly = {
  name: 'Light Electrical Bottom Assembly',
  designator: 'A7',
  inputs: [
    { input: components.C1, quantity: 1 },
    { input: components.X5, quantity: 1 },
  ],
  instructions: [],
};

export const A8: Assembly = {
  name: 'Hinge Assembly',
  designator: 'A8',
  inputs: [
    { input: components.C2, quantity: 2 },
    { input: components.X11, quantity: 1 },
  ],
  instructions: [],
};

export const A9: Assembly = {
  name: 'Pump Assembly',
  designator: 'A9',
  inputs: [
    { input: components.S11, quantity: 1 },
    { input: components.X1, quantity: 1 },
  ],
  instructions: [],
};

export const A10: Assembly = {
  name: 'Internal Base Assembly',
  designator: 'A10',
  inputs: [
    { input: components.S3, quantity: 1 },
    { input: components.X2, quantity: 2 },
    { input: components.X12, quantity: 4 },
    { input: components.S8, quantity: 2 },
    { input: components.S9, quantity: 2 },
  ],
  instructions: [],
};

export const A11: Assembly = {
  name: 'Main PCB Assembly',
  designator: 'A11',
  inputs: [
    { input: components.E1, quantity: 1 },
    { input: components.S12, quantity: 1 },
  ],
  instructions: [],
};

export const A12: Assembly = {
  name: 'Air Sensor Assembly',
  designator: 'A12',
  inputs: [
    { input: components.P8, quantity: 1 },
    { input: components.E3, quantity: 1 },
  ],
  instructions: [],
};

export const A13: Assembly = {
  name: 'Fan Assembly',
  designator: 'A13',
  inputs: [
    { input: components.P11, quantity: 1 },
    { input: components.X3, quantity: 1 },
  ],
  instructions: [],
};

export const A14: Assembly = {
  name: 'Connector Module Assembly',
  designator: 'A14',
  inputs: [
    { input: components.P6, quantity: 1 },
    { input: components.P7, quantity: 1 },
    { input: components.S7, quantity: 1 },
  ],
  instructions: [],
};

export const A15: Assembly = {
  name: 'Exhaust Connector Module Assembly',
  designator: 'A15',
  inputs: [
    { input: components.P5, quantity: 1 },
    { input: components.P7, quantity: 1 },
  ],
  instructions: [],
};

export const A16: Assembly = {
  name: 'Reservoir Body Assembly',
  designator: 'A16',
  inputs: [
    { input: components.P3, quantity: 1 },
    { input: components.X6, quantity: 2 },
    { input: components.G5, quantity: 2 },
  ],
  instructions: [],
};

export const A17: Assembly = {
  name: 'Foam Base Assembly',
  designator: 'A17',
  inputs: [
    { input: components.F1, quantity: 1 },
    { input: components.F2, quantity: 2 },
    { input: components.F3, quantity: 1 },
    { input: components.F4, quantity: 2 },
    { input: components.F5, quantity: 2 },
  ],
  instructions: [],
};

export const A18: Assembly = {
  name: 'Inner Connections Assembly',
  designator: 'A18',
  inputs: [
    { input: components.N2, quantity: 1 },
    { input: components.X9, quantity: 3 },
    { input: components.X10, quantity: 1 },
  ],
  instructions: [],
};

export const A19: Assembly = {
  name: 'Back Panel Initial Assembly',
  designator: 'A19',
  inputs: [
    { input: components.P10, quantity: 2 },
    { input: components.S13, quantity: 1 },
    { input: components.X6, quantity: 1 },
    { input: components.X7, quantity: 1 },
    { input: components.X8, quantity: 1 },
  ],
  instructions: [],
};

export const primaryAssemblies = [
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A19,
];
