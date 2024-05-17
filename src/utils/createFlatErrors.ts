import type { FlatErrors } from "valibot"

type SimpleError = string | [string, ...string[]]
type SimpleNestedErrors = Partial<Record<string, SimpleError>>

export function createFlatErrors(root: SimpleError, nested?: SimpleNestedErrors): FlatErrors
export function createFlatErrors(nested: SimpleNestedErrors): FlatErrors

export function createFlatErrors(rootOrNested: SimpleError | SimpleNestedErrors, nestedOrNothing?: SimpleNestedErrors): FlatErrors {
  const [root, nested] = typeof rootOrNested === "object" && !Array.isArray(rootOrNested)
    ? [undefined, rootOrNested]
    : [rootOrNested, nestedOrNothing]
  return {
    root: root ? normalizeError(root) : undefined,
    nested: Object.fromEntries(Object.entries(nested ?? {}).map(([key, value]) => [key, normalizeError(value!)])),
  }
}

function normalizeError(error: SimpleError): [string, ...string[]] {
  return Array.isArray(error) ? error : [error]
}
