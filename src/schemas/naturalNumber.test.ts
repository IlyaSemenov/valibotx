import * as v from "valibot"
import { expect, test } from "vitest"

import { naturalNumber } from "./naturalNumber"

test("main", () => {
  for (const value of [1, 2, 123]) {
    expect(v.parse(naturalNumber(), value)).toBe(value)
  }
  for (const value of [0, -1, -5, -1.5]) {
    expect(() => v.parse(naturalNumber(), value)).toThrow("Natural value expected")
  }
  expect(() => v.parse(naturalNumber(), 123.45)).toThrow("Natural value expected")
  expect(() => v.parse(naturalNumber("Please enter valid ID."), 123.45)).toThrow("Please enter valid ID.")

  // Test that there is only one issue.
  expect(v.flatten(v.safeParse(naturalNumber(), -1.5).issues!)).toEqual({ root: ["Natural value expected."] })
})
