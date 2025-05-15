/**
 * Asserts that a value is not null or undefined
 * @throws {Error} If the value is null or undefined
 */
export function assertDefined<T>(
  value: T | null | undefined,
  message = 'Value must be defined'
): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
}

/**
 * Asserts that a condition is true
 * @throws {Error} If the condition is false
 */
export function assert(condition: unknown, message = 'Assertion failed'): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Asserts that a value is an instance of a specific class
 * @throws {Error} If the value is not an instance of the class
 */
export function assertInstanceOf<T>(
  value: unknown,
  constructor: new (...args: any[]) => T,
  message = `Expected value to be an instance of ${constructor.name}`
): asserts value is T {
  if (!(value instanceof constructor)) {
    throw new Error(message);
  }
}
