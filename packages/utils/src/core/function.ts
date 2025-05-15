/**
 * Creates a function that memoizes the result of `func`.
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  const memoized = function (this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = resolver ? resolver.apply(this, args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };

  return memoized as T;
}

/**
 * Composes functions from right to left.
 */
export function compose<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduceRight((acc, func) => func(acc), arg);
}

/**
 * Composes functions from left to right.
 */
export function pipe<T>(...funcs: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => funcs.reduce((acc, func) => func(acc), arg);
}

/**
 * Creates a function that invokes `func` with `partials` prepended to the arguments it receives.
 */
export function partial<T extends (...args: any[]) => any>(
  func: T,
  ...partials: any[]
): (...args: any[]) => ReturnType<T> {
  return function (this: any, ...args: any[]) {
    return func.apply(this, [...partials, ...args]);
  };
}

/**
 * Creates a function that invokes `func` with `this` bound to `thisArg` and `partials` prepended to the arguments it receives.
 */
export function bind<T extends (...args: any[]) => any>(
  func: T,
  thisArg: any,
  ...partials: any[]
): (...args: any[]) => ReturnType<T> {
  return function (this: any, ...args: any[]) {
    return func.apply(thisArg, [...partials, ...args]);
  };
}

/**
 * Creates a function that invokes `func` with arguments reversed.
 */
export function flip<T extends (...args: any[]) => any>(
  func: T
): (...args: any[]) => ReturnType<T> {
  return function (this: any, ...args: any[]) {
    return func.apply(this, args.reverse());
  };
}

/**
 * Creates a function that negates the result of the predicate.
 */
export function negate<T extends (...args: any[]) => boolean>(
  predicate: T
): (...args: Parameters<T>) => boolean {
  return function (this: any, ...args: Parameters<T>): boolean {
    return !predicate.apply(this, args);
  };
}
