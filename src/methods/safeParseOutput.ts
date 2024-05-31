import * as v from "valibot"

import type { UnknownBaseSchema } from "../types"

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param config The parse configuration.
 *
 * @returns The parsed output, or undefined if the parse failed.
 */
export function safeParseOutput<TSchema extends UnknownBaseSchema>(
  schema: TSchema,
  input: unknown,
  config?: Omit<v.Config<v.InferIssue<TSchema>>, "skipPipe">,
) {
  const result = v.safeParse(schema, input, config)
  return result.success ? result.output : undefined
}

export const tryParse = safeParseOutput
