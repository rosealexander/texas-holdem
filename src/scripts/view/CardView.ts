import Card from "../model/Card";
import Utility from "../model/Utility/Utility";
import ViewContainer from "./ViewContainer";

class CardView extends ViewContainer {
  private _card: Card;

  get card() {
    return this._card;
  }

  set card(card: Card) {
    this._card = card;
  }

  set(value: number, suit: number) {
    this._card.value = value;
    this._card.suit = suit;
  }

  display() {
    this.element.innerHTML = `${Utility.cardToUnicode(
      this._card.value,
      this._card.suit
    )}`;
    this._card.suit < 3
      ? (this.element.style.color = "Red")
      : (this.element.style.color = "Black");
  }

  default() {
    this.element.innerHTML = `${Utility.cardToUnicode(0, 0)}`;
    this.element.style.color = "Red";
  }

  clear() {
    this.element.innerHTML = "";
  }

  constructor(element: HTMLElement) {
    super(element);
    this._card = new Card();
  }
}

export default CardView;
