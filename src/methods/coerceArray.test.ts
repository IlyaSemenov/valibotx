import * as v from "valibot"
import { expect, test } from "vitest"

import { coerceArray } from "./coerceArray"

test("main", () => {
  const schema = coerceArray(v.array(v.string()))
  expect(v.parse(schema, "foo")).toEqual(["foo"])
  expect(v.parse(schema, ["foo"])).toEqual(["foo"])
  for (const invalidValue of [123, [["foo"]]]) {
    expect(() => v.parse(schema, invalidValue)).toThrow("Invalid type")
  }
})
