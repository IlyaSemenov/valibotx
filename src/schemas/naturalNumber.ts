import * as v from "valibot"

/**
 * Creates a natural (positive integer) number schema.
 *
 * @returns A natural number schema.
 */
export function naturalNumber(message?: string) {
  const naturalMessage = message ?? "Natural value expected."
  return v.config(v.pipe(v.number(message), v.integer(naturalMessage), v.minValue(1, naturalMessage)), { abortEarly: true })
}
