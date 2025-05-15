/**
 * Makes all properties in T optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Makes all properties in T required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Makes all properties in T readonly
 */
export type ReadonlyBy<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

/**
 * Makes all properties in T mutable (non-readonly)
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Extracts the type of a Promise
 */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

/**
 * Extracts the return type of a function
 */
export type ReturnTypeAsync<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

/**
 * Makes all properties in T nullable
 */
export type Nullable<T> = { [P in keyof T]: T[P] | null };

/**
 * Makes all properties in T required and not null
 */
export type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

/**
 * Creates a type that represents either the type T or an array of T
 */
export type SingleOrArray<T> = T | T[];

/**
 * Creates a type that represents a value that can be null or undefined
 */
export type Maybe<T> = T | null | undefined;

/**
 * Creates a type that represents a dictionary with string keys and values of type T
 */
export type Dictionary<T> = Record<string, T>;

/**
 * Creates a type that represents a value that can be a Promise or a direct value
 */
export type MaybePromise<T> = T | Promise<T>;

/**
 * Creates a type that represents a constructor function
 */
export type Constructor<T = any> = new (...args: any[]) => T;
