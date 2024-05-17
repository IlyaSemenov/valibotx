import { expect, test } from "vitest"

import { createFlatErrors } from "./createFlatErrors"

test("main", () => {
  expect(createFlatErrors("foo")).toEqual({ root: ["foo"], nested: {} })
  expect(createFlatErrors(["foo", "bar"])).toEqual({ root: ["foo", "bar"], nested: {} })
  expect(createFlatErrors({ foo: "Invalid foo", bar: "Invalid bar" })).toEqual({ nested: { foo: ["Invalid foo"], bar: ["Invalid bar"] } })
  expect(createFlatErrors("gummy", { foo: "Invalid foo", bar: ["bar1", "bar2"] })).toEqual({ root: ["gummy"], nested: { foo: ["Invalid foo"], bar: ["bar1", "bar2"] } })
})
