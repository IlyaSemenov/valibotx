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

Shortcut for `number([integer()])`.

### `naturalNumber`

Shortcut for `number([integer(), minValue(1)])`. Useful for validating database IDs.

## Pipelines

### `nonEmpty`

Shortcut for `minLength(1)`, similar to zod's [nonEmpty](https://github.com/colinhacks/zod#nonempty).

Related issue: https://github.com/fabian-hiller/valibot/issues/171

### `trim`

Shortcut for `toTrimmed()`, named after zod's [trim](https://github.com/colinhacks/zod/#strings).

## Parse data

### `safeParseOutput`

Shortcut for `safeParse().output`. Returns `undefined` for failed parse.

## Methods

### `coerceArray`

Coerces the input to be an array.

Useful for validating query string inputs such as `?id=1&id=2` which are usually typed as `string | string[]` are require cumbersome checks.

## Types

### `BaseSchemaMaybeAsync`

Shortcut for `BaseSchema<Input, Output> | BaseSchemaAsync<Input, Output>`.

Related issue: https://github.com/fabian-hiller/valibot/issues/198
