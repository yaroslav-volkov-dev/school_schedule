type PossibleSubjectsCount = 2 | 3 | 4 | 5;

type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'

type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> =
  Pick<TObj, Exclude<keyof TObj, ArrayLengthMutationKeys>>
  & {
  readonly length: L
  [I: number]: T
  [Symbol.iterator]: () => IterableIterator<T>
}

export type {
  PossibleSubjectsCount,
  ArrayLengthMutationKeys,
  FixedLengthArray
};