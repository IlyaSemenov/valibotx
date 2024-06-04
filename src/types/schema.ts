import type * as v from "valibot"

/**
 * Base schema type, either sync or async.
 */
export type BaseSchemaMaybeAsync<TInput, TOutput, TIssue extends v.BaseIssue<unknown>> =
  | v.BaseSchema<TInput, TOutput, TIssue>
  | v.BaseSchemaAsync<TInput, TOutput, TIssue>

/**
 * Generic schema type, either sync or async.
 */
export type GenericSchemaMaybeAsync<TInput = unknown, TOutput = TInput, TIssue extends v.BaseIssue<unknown> = v.BaseIssue<unknown>> =
  v.GenericSchema<TInput, TOutput, TIssue> | v.GenericSchemaAsync<TInput, TOutput, TIssue>

/** @deprecated use GenericSchema */
export type UnknownBaseSchema = v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>
/** @deprecated use GenericSchemaAsync */
export type UnknownBaseSchemaAsync = v.BaseSchemaAsync<unknown, unknown, v.BaseIssue<unknown>>
/** @deprecated use GenericSchemaMaybeAsync */
export type UnknownBaseSchemaMaybeAsync = BaseSchemaMaybeAsync<unknown, unknown, v.BaseIssue<unknown>>
