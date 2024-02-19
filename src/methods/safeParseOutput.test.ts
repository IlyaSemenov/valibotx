import * as v from "valibot"
import { expect, test } from "vitest"

import { safeParseOutput, tryParse } from "./safeParseOutput"

test("safeParseOutput", () => {
  expect(safeParseOutput(v.string(), "foo")).toStrictEqual("foo")
  expect(safeParseOutput(v.string(), 123)).toStrictEqual(undefined)
})

test("tryParse", () => {
  expect(tryParse(v.string(), "foo")).toStrictEqual("foo")
  expect(tryParse(v.string(), 123)).toStrictEqual(undefined)
})
