import Hand from "./Hand";
import Card from "./Card";

class Entity {
  private readonly _cardHand: Hand;

  private _score: number;

  private _betAmount: number;

  private _handScore: string;

  private _fold: boolean;

  private _gameOver: boolean;

  get gameOver() {
    return this._gameOver;
  }

  set gameOver(truthy: boolean) {
    this._gameOver = truthy;
  }

  get fold() {
    return this._fold;
  }

  get betAmount(): number {
    return this._betAmount;
  }

  get hand() {
    return this._cardHand;
  }

  get score() {
    return this._score;
  }

  get handScore() {
    return this._handScore;
  }

  set handScore(handScore: string) {
    this._handScore = handScore;
  }

  set fold(truthy: boolean) {
    this._fold = truthy;
  }

  set score(score: number) {
    this._score = score;
  }

  set betAmount(betAmount: number) {
    this._betAmount = betAmount;
  }

  resetBetAmount() {
    this._betAmount = 0;
  }

  cardAt(index: number) {
    return this._cardHand.at(index);
  }

  addCard(card: Card) {
    this._cardHand.addCard(card);
  }

  addScore(amount: number) {
    this._score += amount;
  }

  clearHand() {
    this._cardHand.clear();
  }

  constructor() {
    this._cardHand = new Hand();
    this._score = 0;
    this._handScore = "";
    this._betAmount = 0;
    this._fold = false;
    this._gameOver = false;
  }
}

export default Entity;
