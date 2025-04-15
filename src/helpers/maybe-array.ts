export type MaybeArray<T> = T | T[]

export function normalizeMaybeArray<T>(value: MaybeArray<T>): T[] {
  return Array.isArray(value) ? value : [value]
}
