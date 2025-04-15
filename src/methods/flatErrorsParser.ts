import * as v from "valibot"

import type { GenericSchemaMaybeAsync } from "../types"

export class FlatErrorsError<TSchema extends GenericSchemaMaybeAsync | undefined> extends Error implements v.FlatErrors<TSchema> {
  readonly root?: v.FlatErrors<TSchema>["root"]
  readonly nested?: v.FlatErrors<TSchema>["nested"]
  readonly other?: v.FlatErrors<TSchema>["other"]

  constructor(data: v.FlatErrors<TSchema>) {
    // This is probably not very brilliant, but I don't know how to do it better.
    super("Validation Error")
    Object.assign(this, data)
  }
}

export function flatErrorsParser<const TSchema extends v.GenericSchema>(schema: TSchema) {
  return function parse(input: unknown) {
    const res = v.safeParse(schema, input)
    if (res.success) {
      return res.output
    } else {
      throw new FlatErrorsError(v.flatten(res.issues))
    }
  }
}
