import * as v from "valibot"
import { expect, test } from "vitest"

import { integerNumber } from "./integerNumber"

test("main", () => {
  for (const value of [-10, -1, 0, 1, 2, 5, 123]) {
    expect(v.safeParse(integerNumber(), value).output).toBe(value)
  }
  expect(v.safeParse(integerNumber(), 123.45).issues?.[0].message).toContain(
    "Invalid integer",
  )
})
