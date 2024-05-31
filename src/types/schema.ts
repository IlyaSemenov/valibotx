import type * as v from "valibot"

/**
 * Base schema type, either sync or async.
 */
export type BaseSchemaMaybeAsync<TInput, TOutput, TIssue extends v.BaseIssue<unknown>> =
  | v.BaseSchema<TInput, TOutput, TIssue>
  | v.BaseSchemaAsync<TInput, TOutput, TIssue>

export type UnknownBaseSchema = v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
export type UnknownBaseSchemaAsync = v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>
export type UnknownBaseSchemaMaybeAsync = BaseSchemaMaybeAsync<unknown, unknown, v.BaseIssue<unknown>>
