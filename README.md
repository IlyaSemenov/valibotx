# valibotx

A collection of extensions for [valibot](https://valibot.dev/).

valibot maintainers tend to keep the valibot core to the minimum and sometimes [refuse](https://github.com/fabian-hiller/valibot/issues/171#issuecomment-1726646389) to accept non-essential contributions, as explained [here](https://github.com/fabian-hiller/valibot/issues/198#issuecomment-1749261796).

`valibotx` re-exports `valibot` and adds a set of non-obtrusive extensions. Due to how valibot is organized, this is still perfectly tree-shakeable.

* valibot <0.31: valibotx 1
* valibot >=0.31: valibotx 2

## Install

```sh
npm install valibot valibotx
```

## Use

Simply import `valibotx` instead of `valibot` and enjoy both the original and the new methods:

```ts
import * as v from "valibotx"

const integerSchema = v.integerNumber([v.minValue(100)])
```

## Schemas

### `integerNumber`

Validate integer number.

### `naturalNumber`

Validate natural number (positive integer).

## Parse data

### `safeParseOutput`

Shortcut for `safeParse().output`. Returns `undefined` for failed parse.

Alias: `tryParse`.

## Methods

### `coerceArray`

Coerces the input to be an array.

Useful for normalizing query string inputs such as `?id=1&id=2` which are presented as `string | string[]`.

Usage:

```ts
// works for both single ID and multiple IDs
const ids = v.parse(v.coerceArray(v.array(v.string())), request.query.id)
```

## Issues

### `createFlatErrors`

Utility shortcut to simplify creating `FlatErrors`:

- accepts root error(s), nested error(s), or both
- converts single strings to error lists

Usage:

```ts
createFlatErrors("Single root error")
// => FlatErrors { root: ["Single root error"], nested: {} }

createFlatErrors(["Root error 1", "Root error 2"])
// => FlatErrors { root: ["Root error 1", "Root error 2"], nested: {} }

createFlatErrors({ nested1: "Nested 1", nested2: ["Nested 2a", "Nested 2b"] })
// => FlatErrors { nested: { nested1: ["Nested 1"], nested2: ["Nested 2a", "Nested 2b"] } }

createFlatErrors("Root", { nested: "Nested" })
// => FlatErrors { root: ["Root"], nested: { nested: ["Nested"] } }
```

## Types

### `BaseSchemaMaybeAsync`

Shortcut for `BaseSchema<...> | BaseSchemaAsync<...>` generic.

Related issue: https://github.com/fabian-hiller/valibot/issues/198

### `UnknownBaseSchema`, `UnknownBaseSchemaAsync`, `UnknownBaseSchemaMaybeAsync`

Shortcuts for `BaseSchema`, `BaseSchemaAsync`, `BaseSchemaMaybeAsync` typed against unknown.

To be used as a parameter for high-order schema processors.
