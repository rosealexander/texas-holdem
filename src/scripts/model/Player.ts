import Entity from "./Entity";
import TextView from "../view/TextView";
import CardView from "../view/CardView";

class Player extends Entity {
  private _marker: TextView | undefined;

  private _scoreView: TextView | undefined;

  private _scoreMarker: TextView | undefined;

  private _turnView: TextView | undefined;

  private _raiseAmount: TextView | undefined;

  private _card1: CardView | undefined;

  private _card2: CardView | undefined;

  get marker() {
    if (typeof this._marker === "object") return this._marker;
    else throw new Error("cannot return undefined");
  }

  get scoreView() {
    if (typeof this._scoreView === "object") return this._scoreView;
    else throw new Error("cannot return undefined");
  }

  get scoreMarker() {
    if (typeof this._scoreMarker === "object") return this._scoreMarker;
    else throw new Error("cannot return undefined");
  }

  get turnView() {
    if (typeof this._turnView === "object") return this._turnView;
    else throw new Error("cannot return undefined");
  }

  get raiseAmount() {
    if (typeof this._raiseAmount === "object") return this._raiseAmount;
    else throw new Error("cannot return undefined");
  }

  get card1() {
    if (typeof this._card1 === "object") return this._card1;
    else throw new Error("cannot return undefined");
  }

  get card2() {
    if (typeof this._card2 === "object") return this._card2;
    else throw new Error("cannot return undefined");
  }

  set marker(marker: TextView) {
    this._marker = marker;
  }

  set scoreView(scoreView: TextView) {
    this._scoreView = scoreView;
  }

  set scoreMarker(scoreMarker: TextView) {
    this._scoreMarker = scoreMarker;
  }

  set turnView(turnView: TextView) {
    this._turnView = turnView;
  }

  set raiseAmount(raiseAmount: TextView) {
    this._raiseAmount = raiseAmount;
  }

  set card1(card: CardView) {
    this._card1 = card;
  }

  set card2(card: CardView) {
    this._card2 = card;
  }

  constructor() {
    super();
  }
}

export default Player;
