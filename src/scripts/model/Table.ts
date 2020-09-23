import Entity from "./Entity";
import Hand from "./Hand";
import Deck from "./Deck";
import Pot from "./Pot";
import Card from "./Card";

class Table {
  private readonly _players: Entity[];

  private readonly _cards: Hand;

  private readonly _pot: Pot;

  private _deck: Deck;

  private _callAmount: number;

  get players() {
    return this._players;
  }

  get callAmount() {
    return this._callAmount;
  }

  get pot() {
    return this._pot;
  }

  get cards() {
    return this._cards;
  }

  set callAmount(amount: number) {
    this._callAmount = amount;
  }

  empty() {
    return this._players.length === 0;
  }

  size() {
    return this._players.length;
  }

  at(index: number) {
    if (index <= 0 || index > this._players.length)
      new RangeError("index out of bounds");
    return this._players[index];
  }

  cardAt(index: number) {
    return this._cards.at(index);
  }

  addCard(card: Card) {
    this._cards.addCard(card);
  }

  clearCards() {
    this._cards.clear();
  }

  resetDeck() {
    this._deck.clear();
    this._deck.fill();
    this._deck.shuffle();
  }

  resetCallAmount() {
    this._callAmount = 0;
  }

  resetBetAmounts() {
    this._players.forEach(players => players.resetBetAmount());
  }

  addToPot(amount: number) {
    this._pot.add(amount);
  }

  awardPot() {
    return this._pot.awardScore();
  }

  addEntity(entity: Entity) {
    this._players.push(entity);
  }

  removeEntity(entity: Entity) {
    for (let i = 0; i < this._players.length; i++)
      if (this._players[i] === entity) this._players.splice(i, 1);
  }

  fold(entity: Entity) {
    entity.fold = true;
    entity.resetBetAmount();
  }

  resetFold() {
    this._players.forEach(player => (player.fold = false));
  }

  resetTable() {
    this.resetBetAmounts();
    this.resetCallAmount();
    this.resetDeck();
    this.clearCards();
    this.resetFold();
    this._players.forEach(player => player.clearHand());
  }

  playing() {
    let tmp: number = 0;
    this._players.forEach(player => {
      if (player.fold) tmp++;
    });
    return tmp;
  }

  skipTurn(entity: Entity) {
    let hasHighestBet: boolean = true;
    let counter: number = 0;
    if (entity.betAmount <= 0) hasHighestBet = false;
    this._players.forEach(player => {
      if (!player.fold && entity.betAmount < player.betAmount)
        hasHighestBet = false;
      if (player !== entity && (player.fold || player.score === 0)) counter++;
    });
    return (
      (entity.betAmount >= this._callAmount &&
        (counter === this._players.length - 1 || hasHighestBet)) ||
      entity.score === 0 ||
      entity.fold
    );
  }

  raise(entity: Entity, raiseAmount: number) {
    if (raiseAmount + this._callAmount > entity.score)
      throw RangeError(
        "amount raised + the current call amount cannot exceed entity score"
      );
    this.addToPot(raiseAmount + this._callAmount);
    entity.score = entity.score - (this._callAmount + raiseAmount);
    this._callAmount += raiseAmount;
    entity.betAmount = this._callAmount;
  }

  call(entity: Entity) {
    if (entity.score < this._callAmount - entity.betAmount) {
      this.addToPot(entity.score);
      entity.score = 0;
    } else {
      this.addToPot(this._callAmount - entity.betAmount);
      entity.score = entity.score - (this._callAmount - entity.betAmount);
      entity.betAmount = this._callAmount;
    }
  }

  dealToPlayers(numberOfCards: number) {
    if (this._deck.size() < numberOfCards * this._players.length)
      throw new RangeError(
        "not enough cards left in the deck to dealToPlayers"
      );
    for (let i = 0; i < numberOfCards; i++)
      this._players.forEach(player => player.addCard(this._deck.dealCard()));
  }

  dealToTable(numberOfCards: number) {
    if (this._deck.size() < numberOfCards) {
      throw new Error("Not enough cards left in the deck to dealToTable");
    }
    for (let i = 0; i < numberOfCards; i++) {
      this.addCard(this._deck.dealCard());
    }
  }

  constructor() {
    this._players = [];
    this._cards = new Hand();
    this._deck = new Deck();
    this._pot = new Pot();
    this._callAmount = 0;
  }
}

export default Table;
