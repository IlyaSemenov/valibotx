import type * as v from "valibot"

import type { GenericSchemaMaybeAsync } from "../types"

type SimpleError = string | [string, ...string[]]
type SimpleNestedErrors = Partial<Record<string, SimpleError>>

export interface CreateFlatErrors {
  <TSchema extends GenericSchemaMaybeAsync = GenericSchemaMaybeAsync>(root: SimpleError, nested?: SimpleNestedErrors): v.FlatErrors<TSchema>
  <TSchema extends GenericSchemaMaybeAsync = GenericSchemaMaybeAsync>(nested: SimpleNestedErrors): v.FlatErrors<TSchema>
}

export type CreateFlatErrorsInput = [root: SimpleError, nested?: SimpleNestedErrors] | [nested: SimpleNestedErrors]

export const createFlatErrors: CreateFlatErrors = function createFlatErrors(rootOrNested: SimpleError | SimpleNestedErrors, nestedOrNothing?: SimpleNestedErrors): v.FlatErrors<any> {
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
