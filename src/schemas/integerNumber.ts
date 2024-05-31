import * as v from "valibot"

/**
 * Creates an integer number schema.
 *
 * @returns An integer number schema.
 */
export function integerNumber(message?: string) {
  return v.pipe(v.number(message), v.integer(message))
}
