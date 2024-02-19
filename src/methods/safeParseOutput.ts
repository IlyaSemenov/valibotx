import { BaseSchema, safeParse } from "valibot"

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output, or undefined if the parse failed.
 */
export function safeParseOutput<TSchema extends BaseSchema>(
  schema: TSchema,
  input: unknown,
  info?: Parameters<typeof safeParse<TSchema>>[2],
) {
  const result = safeParse(schema, input, info)
  return result.success ? result.output : undefined
}

export const tryParse = safeParseOutput
