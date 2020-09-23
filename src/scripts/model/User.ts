import Player from "./Player";

class User extends Player {
  private _currentBetAmount: number;

  get currentBetAmount() {
    return this._currentBetAmount;
  }

  set currentBetAmount(amount: number) {
    this._currentBetAmount = amount;
  }

  constructor() {
    super();
    this._currentBetAmount = 0;
  }
}

export default User;
