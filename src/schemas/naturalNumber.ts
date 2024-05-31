import * as v from "valibot"

/**
 * Creates a natural (positive integer) number schema.
 *
 * @returns A natural number schema.
 */
export function naturalNumber(message?: string) {
  // can't just use v.integer() and v.minValue(1) where, see https://github.com/fabian-hiller/valibot/issues/618
  return v.pipe(v.number(message), v.custom(x => typeof x === "number" && Number.isInteger(x) && x > 0, message ?? "Natural value expected."))
}
