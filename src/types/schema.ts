import type { BaseSchema, BaseSchemaAsync } from "valibot"

/**
 * Base schema type, either sync or async.
 */
export type BaseSchemaMaybeAsync<TInput = any, TOutput = any> =
  | BaseSchema<TInput, TOutput>
  | BaseSchemaAsync<TInput, TOutput>
