import * as v from "valibot"

import { normalizeMaybeArray } from "../helpers"

export interface SafeUrlOptions {
  protocol?: string | string[]
  hostname?: string | string[]
}

export function safeUrl<TInput extends string, TMessage extends v.ErrorMessage<v.UrlIssue<TInput>> | undefined>(message?: TMessage): v.UrlAction<TInput, TMessage>
export function safeUrl<TInput extends string, TMessage extends v.ErrorMessage<v.UrlIssue<TInput>> | undefined>(options: SafeUrlOptions, message?: TMessage): v.UrlAction<TInput, TMessage>

/**
 * Wraps `v.url` with a requirement that only allows "safe" URLs (suitable for <a href>).
 */
export function safeUrl(...args: [message?: string] | [options: SafeUrlOptions, message?: string]) {
  const options = typeof args[0] === "object" ? args.shift() as SafeUrlOptions : undefined
  const message = args.shift() as string | undefined

  const allowedProtocols = new Set(
    options?.protocol
      ? normalizeMaybeArray(options.protocol).map(protocol => protocol.replace(/:?$/, ":"))
      : ["https:"],
  )

  const allowedHostnames = options?.hostname ? new Set(normalizeMaybeArray(options.hostname)) : undefined

  const requirement = (input: string) => {
    const { protocol, hostname } = new URL(input)
    return allowedProtocols.has(protocol) && (!allowedHostnames || allowedHostnames.has(hostname))
  }

  const action = v.url(message)
  return {
    ...action,
    requirement: input => action.requirement(input) && requirement(input),
  } satisfies typeof action
}
