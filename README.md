# valibotx

A collection of extensions for [valibot](https://valibot.dev/).

valibot maintainers tend to keep the valibot core to the minimum and sometimes [refuse](https://github.com/fabian-hiller/valibot/issues/171#issuecomment-1726646389) to accept non-essential contributions, as explained [here](https://github.com/fabian-hiller/valibot/issues/198#issuecomment-1749261796).

`valibotx` re-exports `valibot` and adds a set of non-obtrusive extensions. Due to how valibot is organized, this is still perfectly tree-shakeable.

## Install

```sh
npm install valibot valibotx
```

## Use

Just import `valibotx` instead of `valibot` and enjoy the new methods:

```ts
import * as v from "valibotx"

const usernameSchema = v.string([v.nonEmpty()])
```

## Extensions

### `nonEmpty`

Shortcut for `minLength(1)`, similar to zod's [nonEmpty](https://github.com/colinhacks/zod#nonempty).

Related issue: https://github.com/fabian-hiller/valibot/issues/171

### `BaseSchemaMaybeAsync`

Shortcut for `BaseSchema<Input, Output> | BaseSchemaAsync<Input, Output>`.

Related issue: https://github.com/fabian-hiller/valibot/issues/198
