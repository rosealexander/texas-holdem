class Pot {
  private _score: number;

  get score() {
    return this._score;
  }

  add(amount: number) {
    amount < 0
      ? new Error("Amount to add must be strictly positive")
      : (this._score += amount);
  }

  clear() {
    this._score = 0;
  }

  awardScore() {
    let tmp: number = this._score;
    this.clear();
    return tmp;
  }

  constructor() {
    this._score = 0;
  }
}

export default Pot;
