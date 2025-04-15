import * as v from "valibot"
import { expect, test } from "vitest"

import { FlatErrorsError, flatErrorsParser } from "./flatErrorsParser"

test("flatErrorsParser", () => {
  expect(flatErrorsParser(v.string())("foo")).toStrictEqual("foo")
  expect(() => flatErrorsParser(v.string())(123)).toThrow(FlatErrorsError)
})
