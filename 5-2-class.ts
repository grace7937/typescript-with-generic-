interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rigthValue: R);
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rigthValue;
  }
}
