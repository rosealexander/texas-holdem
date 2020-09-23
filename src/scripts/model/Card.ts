class Card {
  private _value: number;

  private _suit: number;

  get value(): number {
    return this._value;
  }

  get suit(): number {
    return this._suit;
  }

  set value(value: number) {
    this._value = value;
  }

  set suit(suit: number) {
    this._suit = suit;
  }

  constructor(value?: number, suit?: number) {
    this._value = value || 0;
    this._suit = suit || 0;
  }
}

export default Card;
