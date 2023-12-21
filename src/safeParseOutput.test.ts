import * as v from "valibot"
import { expect, test } from "vitest"

import { safeParseOutput } from "./safeParseOutput"

test("main", () => {
  expect(safeParseOutput(v.string(), "foo")).toStrictEqual("foo")
  expect(safeParseOutput(v.string(), 123)).toStrictEqual(undefined)
})
