import { safeParse } from "valibot"
import { expect, test } from "vitest"

import { naturalNumber } from "./naturalNumber"

test("main", () => {
  for (const value of [1, 2, 123]) {
    expect(safeParse(naturalNumber(), value)).toStrictEqual(
      expect.objectContaining({
        output: value,
      }),
    )
  }
  for (const value of [0, -1, -5]) {
    expect(safeParse(naturalNumber(), value)).toStrictEqual(
      expect.objectContaining({
        issues: [
          expect.objectContaining({
            message: "Invalid value",
          }),
        ],
      }),
    )
  }
  expect(safeParse(naturalNumber(), 123.45)).toStrictEqual(
    expect.objectContaining({
      issues: [
        expect.objectContaining({
          message: "Invalid integer",
        }),
      ],
    }),
  )
})
