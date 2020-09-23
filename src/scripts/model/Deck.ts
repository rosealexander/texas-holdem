import Card from "./Card";

class Deck {
  private readonly cards: Card[];

  clear() {
    this.cards.length = 0;
  }

  size() {
    return this.cards.length;
  }

  dealCard() {
    let card: Card | undefined = this.cards.pop();
    if (typeof card === "undefined")
      throw new TypeError(
        "Deck does not contain type Card and is most likely empty"
      );
    return card;
  }

  fill() {
    for (let i = 1; i <= 4; i++)
      for (let j = 2; j <= 14; j++) this.cards.push(new Card(j, i));
  }

  shuffle() {
    let j: number;
    for (let i = 0; i < this.size(); i++) {
      j = Math.trunc(Math.random() * Math.floor(i + 1));
      if (j != i) {
        let tmp: Card = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = tmp;
      }
    }
  }

  constructor() {
    this.cards = [];
  }
}

export default Deck;
