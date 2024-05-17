import type {
  ErrorMessage,
  NumberSchema,
  Pipe,
} from "valibot"
import {
  defaultArgs,
  integer,
  number,
} from "valibot"

import { mergePipes } from "../utils"

/**
 * Creates an integer number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export function integerNumber(pipe?: Pipe<number>): NumberSchema
/**
 * Creates an integer number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export function integerNumber(
  error?: ErrorMessage,
  pipe?: Pipe<number>,
): NumberSchema

export function integerNumber(
  arg1?: ErrorMessage | Pipe<number>,
  arg2?: Pipe<number>,
) {
  const [error, pipe] = defaultArgs(arg1, arg2)
  return number(error, mergePipes([integer()], pipe))
}
