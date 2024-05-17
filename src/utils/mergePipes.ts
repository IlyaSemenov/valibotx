import type { Pipe } from "valibot"

export function mergePipes<T>(pipe1?: Pipe<T>, pipe2?: Pipe<T>) {
  return pipe1 && pipe2 ? [...pipe1, ...pipe2] : pipe1 ?? pipe2
}
