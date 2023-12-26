import { expect, test } from "vitest"

import { nonEmpty } from "./nonEmpty"

test("string", () => {
  expect(nonEmpty()("")).toStrictEqual({
    issues: [expect.objectContaining({ validation: "min_length" })],
  })
  expect(nonEmpty()("a")).toStrictEqual({ output: "a" })
  expect(nonEmpty()("one two")).toStrictEqual({ output: "one two" })
})

test("array", () => {
  expect(nonEmpty()([])).toStrictEqual({
    issues: [expect.objectContaining({ validation: "min_length" })],
  })
  expect(nonEmpty()([0])).toStrictEqual({ output: [0] })
})
