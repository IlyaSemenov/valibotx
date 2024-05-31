import type * as v from "valibot"

import type { UnknownBaseSchemaMaybeAsync } from "../types"

type SimpleError = string | [string, ...string[]]
type SimpleNestedErrors = Partial<Record<string, SimpleError>>

export function createFlatErrors<TSchema extends UnknownBaseSchemaMaybeAsync = UnknownBaseSchemaMaybeAsync>(root: SimpleError, nested?: SimpleNestedErrors): v.FlatErrors<TSchema>
export function createFlatErrors<TSchema extends UnknownBaseSchemaMaybeAsync = UnknownBaseSchemaMaybeAsync>(nested: SimpleNestedErrors): v.FlatErrors<TSchema>

export function createFlatErrors<TSchema extends UnknownBaseSchemaMaybeAsync = UnknownBaseSchemaMaybeAsync>(rootOrNested: SimpleError | SimpleNestedErrors, nestedOrNothing?: SimpleNestedErrors): v.FlatErrors<TSchema> {
  const [root, nested] = typeof rootOrNested === "object" && !Array.isArray(rootOrNested)
    ? [undefined, rootOrNested]
    : [rootOrNested, nestedOrNothing]
  return {
    root: root ? normalizeError(root) : undefined,
    nested: Object.fromEntries(Object.entries(nested ?? {}).map(([key, value]) => [key, normalizeError(value!)])) as any,
  }
}

function normalizeError(error: SimpleError): [string, ...string[]] {
  return Array.isArray(error) ? error : [error]
}
