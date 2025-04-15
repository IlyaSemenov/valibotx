import * as v from "valibot"
import { expect, test } from "vitest"

import { safeUrl } from "./safeUrl"

test("defaults", () => {
  const schema = v.pipe(v.string(), safeUrl())

  const validUrls = [
    "https://example.com",
  ]

  const invalidUrls = [
    "http://example.com",
    "ftp://example.com",
    "javascript:alert('pwn3d')",
  ]

  for (const url of validUrls) {
    expect(v.parse(schema, url)).toEqual(url)
  }
  for (const url of invalidUrls) {
    expect(() => v.parse(schema, url)).toThrow("Invalid URL")
  }
})

test("allow http", () => {
  const schema = v.pipe(v.string(), safeUrl({ protocol: ["http", "https"] }))

  const validUrls = [
    "http://example.com",
    "https://example.com",
  ]

  const invalidUrls = [
    "ftp://example.com",
    "javascript:alert('pwn3d')",
  ]

  for (const url of validUrls) {
    expect(v.parse(schema, url)).toEqual(url)
  }
  for (const url of invalidUrls) {
    expect(() => v.parse(schema, url)).toThrow("Invalid URL")
  }
})

test("allow protocols with :", () => {
  const schema = v.pipe(v.string(), safeUrl({ protocol: ["http:", "https:"] }))

  const validUrls = [
    "http://example.com",
    "https://example.com",
  ]

  const invalidUrls = [
    "ftp://example.com",
    "javascript:alert('pwn3d')",
  ]

  for (const url of validUrls) {
    expect(v.parse(schema, url)).toEqual(url)
  }
  for (const url of invalidUrls) {
    expect(() => v.parse(schema, url)).toThrow("Invalid URL")
  }
})

test("allow ftp only", () => {
  const schema = v.pipe(v.string(), safeUrl({ protocol: "ftp" }))

  const validUrls = [
    "ftp://example.com",
  ]

  const invalidUrls = [
    "http://example.com",
    "https://example.com",
    "javascript:alert('pwn3d')",
  ]

  for (const url of validUrls) {
    expect(v.parse(schema, url)).toEqual(url)
  }
  for (const url of invalidUrls) {
    expect(() => v.parse(schema, url)).toThrow("Invalid URL")
  }
})

test("twitter and X", () => {
  const schema = v.pipe(v.string(), safeUrl({ hostname: ["twitter.com", "x.com"] }))

  const validUrls = [
    "https://twitter.com",
    "https://twitter.com:443/path",
    "HTTPS://X.COM",
  ]

  const invalidUrls = [
    "https://example.com",
    "ftp://twitter.com",
    "javascript:alert('pwn3d')",
  ]

  for (const url of validUrls) {
    expect(v.parse(schema, url)).toEqual(url)
  }
  for (const url of invalidUrls) {
    expect(() => v.parse(schema, url)).toThrow("Invalid URL")
  }
})
