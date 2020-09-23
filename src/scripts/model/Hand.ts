import Card from "./Card";

class Hand {
  private readonly _cards: Card[];

  get cards() {
    return this._cards;
  }

  at(index: number) {
    return this._cards[index];
  }

  empty() {
    return this._cards.length === 0;
  }

  addCard(card: Card) {
    this._cards.push(card);
  }

  clear() {
    this._cards.length = 0;
  }

  size() {
    return this._cards.length;
  }

  constructor() {
    this._cards = [];
  }
}

export default Hand;
