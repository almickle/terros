import { isObject } from './typeguards';

/**
 * Creates a deep copy of an object
 */
export function deepClone<T>(obj: T): T {
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as unknown as T;
  }

  const result: Record<string, unknown> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result as T;
}

/**
 * Merges multiple objects deeply
 */
export function deepMerge<T extends Record<string, any>>(...sources: Array<Partial<T>>): T {
  const result = {} as T;

  for (const source of sources) {
    if (!isObject(source)) continue;

    for (const key in source) {
      if (!Object.prototype.hasOwnProperty.call(source, key)) continue;

      const value = source[key];
      const existingValue = result[key];

      if (Array.isArray(value) && Array.isArray(existingValue)) {
        // If both are arrays, concatenate them
        (result as any)[key] = [...existingValue, ...value];
      } else if (isObject(value) && isObject(existingValue)) {
        // If both are objects, merge them
        (result as any)[key] = deepMerge({}, existingValue, value);
      } else if (value !== undefined) {
        // Otherwise, use the new value if it's defined
        (result as any)[key] = value;
      }
    }
  }

  return result;
}

/**
 * Picks specific properties from an object
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

/**
 * Omits specific properties from an object
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj } as Omit<T, K>;

  for (const key of keys) {
    delete (result as any)[key];
  }

  return result;
}

/**
 * Returns an object with only the specified keys
 */
export function filterObject<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  return Object.entries(obj).reduce<Partial<T>>((result, [key, value]) => {
    if (predicate(value, key as keyof T)) {
      (result as any)[key] = value;
    }
    return result;
  }, {});
}

/**
 * Maps over object values
 */
export function mapValues<T extends object, V>(
  obj: T,
  mapper: (value: T[keyof T], key: keyof T) => V
): Record<keyof T, V> {
  return Object.entries(obj).reduce(
    (result, [key, value]) => {
      result[key as keyof T] = mapper(value, key as keyof T);
      return result;
    },
    {} as Record<keyof T, V>
  );
}

/**
 * Checks if two objects are deeply equal
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual((a as any)[key], (b as any)[key])) {
      return false;
    }
  }

  return true;
}
