import { expect, test } from "vitest"

import { nonEmpty } from "./nonEmpty"

test("string", () => {
  expect(nonEmpty()._parse("").issues).toBeTruthy()
  expect(nonEmpty()._parse("a").output).toBe("a")
  expect(nonEmpty()._parse("one two").output).toBe("one two")
})

test("array", () => {
  expect(nonEmpty()._parse([]).issues).toBeTruthy()
  const value = [0]
  expect(nonEmpty()._parse(value).output).toBe(value)
})
