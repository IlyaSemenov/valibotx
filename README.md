# valibotx

A collection of extensions for [valibot](https://valibot.dev/).

valibot maintainers tend to keep the valibot core to the minimum and sometimes [refuse](https://github.com/fabian-hiller/valibot/issues/171#issuecomment-1726646389) to accept non-essential contributions, as explained [here](https://github.com/fabian-hiller/valibot/issues/198#issuecomment-1749261796).

`valibotx` re-exports `valibot` and adds a set of non-obtrusive extensions. Due to how valibot is organized, this is still perfectly tree-shakeable.

## Install

```sh
npm install valibot valibotx
```

## Use

Simply import `valibotx` instead of `valibot` and enjoy both the original and the new methods:

```ts
import * as v from "valibotx"

const usernameSchema = v.string([v.trim(), v.nonEmpty(), v.maxLength(100)])
```

## Schemas

### `integerNumber`

Validate integer number.

### `naturalNumber`

Validate natural number (positive integer).

## Pipelines

### `nonEmpty`

Shortcut for `minLength(1)`, similar to zod's [nonEmpty](https://github.com/colinhacks/zod#nonempty).

Related issue: https://github.com/fabian-hiller/valibot/issues/171

### `trim`

Shortcut for `toTrimmed()`, named after zod's [trim](https://github.com/colinhacks/zod/#strings).

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
const ids = v.parse(v.coerceArray(v.array(v.string())), query.id)
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

Shortcut for `BaseSchema<Input, Output> | BaseSchemaAsync<Input, Output>`.

Related issue: https://github.com/fabian-hiller/valibot/issues/198
