import * as v from "valibot"
import { expect, test } from "vitest"

import { coerceArray } from "./coerceArray"

test("main", () => {
  const schema = coerceArray(v.array(v.string()))
  expect(v.parse(schema, "foo")).toStrictEqual(["foo"])
  expect(v.parse(schema, ["foo"])).toStrictEqual(["foo"])
  for (const invalidValue of [123, [["foo"]]]) {
    expect(v.safeParse(schema, invalidValue).issues?.[0].message).toContain(
      "Invalid type",
    )
  }
})
