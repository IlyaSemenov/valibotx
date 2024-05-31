import * as v from "valibot"

/**
 * Coerces the input of an array schema to be an array.
 * Coerces single value to be a single-element array.
 *
 * @param schema The affected schema (must extend ArraySchema).
 *
 * @returns The passed schema.
 */
export function coerceArray<const TSchema extends v.ArraySchema<any, any>>(schema: TSchema) {
  return v.pipe(
    v.unknown(),
    v.transform((x: unknown) => Array.isArray(x) ? x : [x]),
    schema,
  )
}
