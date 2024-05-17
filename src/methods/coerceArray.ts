import type { ArraySchema, BaseSchema } from "valibot"
import { coerce } from "valibot"

/**
 * Coerces the input of an array schema to be an array.
 * Coerces single value to be a single-element array.
 *
 * @param schema The affected schema (must extend ArraySchema).
 *
 * @returns The passed schema.
 */
export function coerceArray<
  TSchema extends BaseSchema,
  TArraySchema extends ArraySchema<TSchema>,
>(schema: TArraySchema): TArraySchema {
  return coerce(schema, x => (Array.isArray(x) ? x : [x]))
}
