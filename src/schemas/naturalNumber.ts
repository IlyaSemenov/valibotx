import {
  ErrorMessage,
  getDefaultArgs,
  integer,
  minValue,
  number,
  NumberSchema,
  Pipe,
} from "valibot"

import { mergePipes } from "../utils"

/**
 * Creates a natural (positive integer) number schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export function naturalNumber(pipe?: Pipe<number>): NumberSchema
/**
 * Creates a natural (positive integer) number schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A number schema.
 */
export function naturalNumber(
  error?: ErrorMessage,
  pipe?: Pipe<number>,
): NumberSchema

export function naturalNumber(
  arg1?: ErrorMessage | Pipe<number>,
  arg2?: Pipe<number>,
) {
  const [error, pipe] = getDefaultArgs(arg1, arg2)
  return number(error, mergePipes([integer(), minValue(1)], pipe))
}
