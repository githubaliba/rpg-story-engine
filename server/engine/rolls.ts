import Randoma from "randoma"

/**
 * All functions use this pseudo-random number generation library.
 * @see https://www.npmjs.com/package/randoma
 */
const seeded = new Randoma({ seed: 0 })

/**
 * Returns a random number between zero and the defined maximum value.
 */
export function random(max: number) {
  return seeded.integerInRange(0, max)
}

/**
 * Returns a random floating point number between zero and the defined maximum value.
 */
export function randomFloat(max: number) {
  return seeded.floatInRange(0, max)
}

/**
 * Returns a random number between the defined minimum and maximum value.
 */
export function randomRange(min: number, max: number) {
  return seeded.integerInRange(min, max)
}

/**
 * Returns a random floating point number between zero and the defined maximum value.
 */
export function randomFloatRange(min: number, max: number) {
  return seeded.floatInRange(min, max)
}

/**
 * Returns a random value from an array.
 */
export function randomValue<T>(values: T[] | Record<any, T>) {
  return seeded.arrayItem(Array.isArray(values) ? values : Object.values(values))
}

/**
 * Returns a random choice from the provided values.
 */
export function either<T>(...values: T[]) {
  return seeded.arrayItem(values)
}

/**
 * Randomly removes an element from the base array and returns it.
 */
export function pluck<T>(array: T[]) {
  if (array.length) {
    const index = randomRange(0, array.length - 1)
    return array.splice(index, 1)[0]
  }
}

/**
 * Rolls a number of dices with n-number of sides.
 */
export function dice(amount: number, sides: number) {
  const rolls: number[] = []
  while (amount > rolls.length) {
    rolls.push(seeded.integerInRange(0, sides))
  }
  return rolls.reduce((result, roll) => result + roll)
}
