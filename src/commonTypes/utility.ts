import { ReactNode } from 'react';

type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'
type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
  Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>>
  & {
  readonly length: L
  [I: number]: T
  [Symbol.iterator]: () => IterableIterator<T>
}

type WithChildren<T = {}> = { children: ReactNode } & T;

export type {
  FixedLengthArray,
  WithChildren
};
