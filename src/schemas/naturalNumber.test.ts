import { safeParse } from "valibot"
import { expect, test } from "vitest"

import { naturalNumber } from "./naturalNumber"

test("main", () => {
  for (const value of [1, 2, 123]) {
    expect(safeParse(naturalNumber(), value).output).toBe(value)
  }
  for (const value of [0, -1, -5]) {
    expect(safeParse(naturalNumber(), value).issues?.[0].message).toContain(
      "Invalid value",
    )
  }
  expect(safeParse(naturalNumber(), 123.45).issues?.[0].message).toContain(
    "Invalid integer",
  )
})
