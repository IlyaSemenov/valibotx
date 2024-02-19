import { ErrorMessage, minLength } from "valibot"

/**
 * Creates a validation function that validates a string or array to be not empty.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function nonEmpty<TInput extends string | any[]>(error?: ErrorMessage) {
  return minLength<TInput, 1>(1, error)
}
