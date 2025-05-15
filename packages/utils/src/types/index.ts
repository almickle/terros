// Export all type utilities
export * from './utility-types';

// Common types
export type { JsonValue, JsonObject, JsonArray } from 'type-fest';

// Re-export common type utilities
export type { Omit, Pick, Partial, Required, Readonly, Record } from 'typescript';

// Additional type utilities
export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]-?: DeepRequired<T[P]>;
    }
  : T;

export type DeepReadonly<T> = T extends object
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    }
  : T;
