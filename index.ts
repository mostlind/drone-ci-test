export class Box<A> {
  constructor(private val: A) {}

  static of<A>(val: A): Box<A> {
    return new Box(val);
  }

  map<B>(fn: (a: A) => B): Box<B> {
    return Box.of(fn(this.val));
  }

  flatMap<B>(fn: (a: A) => Box<B>): Box<B> {
    return fn(this.val);
  }

  value(): A {
    return this.val;
  }
}

export const double = (x: number) => x * 2;

export const add = (x: number) => (y: number) => x + y;

export const compose = <A, B, C>(
  f: (b: B) => C,
  g: (a: A) => B
): ((a: A) => C) => x => f(g(x));

const boxedAddThree = compose(
  Box.of,
  add(3)
);

const result = Box.of(3)
  .map(double)
  .flatMap(boxedAddThree);

console.log(result);
