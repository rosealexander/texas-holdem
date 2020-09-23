import Table from "./Table";
import Clock from "./Utility/Clock";
import Interface from "../view/Interface";
import Entity from "./Entity";
import Scorer from "./Scorer";
import OpponentLogic from "./OpponentLogic";
import Player from "./Player";
import User from "./User";

class TurnLogic {
  private readonly _table: Table;

  private _clock: Clock;

  private _interface: Interface;

  private readonly _opponent: Player[];

  private readonly _player: User;

  private _state: number;

  private _betState: number;

  private _clickable: boolean;

  private readonly _flag: boolean[];

  get betState() {
    return this._betState;
  }

  get state() {
    return this._state;
  }

  private _resetFlag() {
    for (let i = 0; i < this._flag.length; i++) {
      this._flag[i] = true;
    }
  }

  private _setInterface() {
    this._opponent[0].scoreMarker = this._interface.opponentAscoreMarker;
    this._opponent[0].raiseAmount = this._interface.opponentARaiseAmount;
    this._opponent[0].marker = this._interface.opponentAmarker;
    this._opponent[0].scoreView = this._interface.opponentAscore;
    this._opponent[0].turnView = this._interface.opponentAturn;
    this._opponent[0].card1 = this._interface.opponentACard1;
    this._opponent[0].card2 = this._interface.opponentACard2;

    this._opponent[1].scoreMarker = this._interface.opponentBscoreMarker;
    this._opponent[1].raiseAmount = this._interface.opponentBRaiseAmount;
    this._opponent[1].marker = this._interface.opponentBmarker;
    this._opponent[1].scoreView = this._interface.opponentBscore;
    this._opponent[1].turnView = this._interface.opponentBturn;
    this._opponent[1].card1 = this._interface.opponentBCard1;
    this._opponent[1].card2 = this._interface.opponentBCard2;

    this._player.scoreView = this._interface.playerScore;
    this._player.turnView = this._interface.playerTurn;
    this._player.card1 = this._interface.playerCard1;
    this._player.card2 = this._interface.playerCard2;
  }

  private _startGame() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      if (this._table.empty()) {
        this._setInterface();
        this._table.addEntity(this._player);
        this._player.score = 300;
        this._interface.raiseAmount.string("$10");
        for (let i = 0; i < this._opponent.length; i++) {
          this._table.addEntity(this._opponent[i]);
          this._opponent[i].score = 300;
        }
      }
      this._table.resetTable();
      this._interface.resetInterface();
      this._interface.potScore.string(this._table.pot.score.toString());
      this._opponent[0].scoreView.string(
        "$" + this._opponent[0].score.toString()
      );
      if (this._table.size() == 2)
        this._opponent[1].scoreView.string(
          "$" + this._opponent[1].score.toString()
        );
      this._player.scoreView.string("$" + this._player.score.toString());
      this._opponent[1].scoreView.string(
        "$" + this._opponent[1].score.toString()
      );
    }
    if (this._flag[1] && this._clock.get.seconds() > 1.5) {
      this._flag[1] = false;

      for (const player of this._table.players) {
        player.score -= 10;
        this._table.pot.add(10);
      }

      this._interface.potScore.string(this._table.pot.score.toString());
      this._opponent[0].scoreView.string(
        "$" + this._opponent[0].score.toString()
      );
      if (this._table.size() == 2)
        this._opponent[1].scoreView.string(
          "$" + this._opponent[1].score.toString()
        );
      this._player.scoreView.string("$" + this._player.score.toString());
      this._opponent[1].scoreView.string(
        "$" + this._opponent[1].score.toString()
      );
    }
    if (this._flag[2] && this._clock.get.seconds() > 2) {
      this._flag[2] = false;
      this._state++;
      this._resetFlag();
    }
  }

  private _preRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      this._table.callAmount = 10;
      this._table.dealToPlayers(2);
      this._player.turnView.string("NEW ROUND");
      this._player.turnView.color("Magenta");
    }
    if (this._flag[1] && this._clock.get.seconds() > 1) {
      this._flag[1] = false;
      this._player.turnView.string("");
      this._player.turnView.color("Black");
    }
    if (!this._opponent[0].gameOver) {
      if (this._flag[2] && this._clock.get.seconds() > 1.5) {
        this._flag[2] = false;
        this._opponent[0].card1.card = this._opponent[0].cardAt(0);
        this._opponent[0].card1.default();
      }
      if (this._flag[3] && this._clock.get.seconds() > 2) {
        this._flag[3] = false;
        this._opponent[0].card2.card = this._opponent[0].cardAt(1);
        this._opponent[0].card2.default();
      }
    } else if (this._flag[2] && this._flag[3]) {
      this._flag[2] = false;
      this._flag[3] = false;
      this._opponent[0].card1.clear();
      this._opponent[0].card2.clear();
    }
    if (this._flag[4] && this._clock.get.seconds() > 2.5) {
      this._flag[4] = false;
      this._player.card1.card = this._player.cardAt(0);
      this._player.card1.display();
    }
    if (this._flag[5] && this._clock.get.seconds() > 3) {
      this._flag[5] = false;
      this._player.card2.card = this._player.cardAt(1);
      this._player.card2.display();
    }
    if (!this._opponent[1].gameOver) {
      if (this._flag[6] && this._clock.get.seconds() > 3.5) {
        this._flag[6] = false;
        this._opponent[1].card2.card = this._opponent[1].cardAt(0);
        this._opponent[1].card2.default();
      }
      if (this._flag[7] && this._clock.get.seconds() > 4) {
        this._flag[7] = false;
        this._opponent[1].card1.card = this._opponent[1].cardAt(1);
        this._opponent[1].card1.default();
      }
    } else if (this._flag[6] && this._flag[6]) {
      this._flag[6] = false;
      this._flag[7] = false;
      this._opponent[1].card1.clear();
      this._opponent[1].card2.clear();
    }
    if (this._clock.get.seconds() > 5) {
      this._state++;
      this._resetFlag();
    }
  }

  private _tableFirstRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      this._table.dealToTable(3);
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      this._interface.tableCard6.default();
    }
    if (this._flag[2] && this._clock.get.seconds() > 1) {
      this._flag[2] = false;
      this._interface.tableCard1.card = this._table.cardAt(0);
      this._interface.tableCard1.display();
    }
    if (this._flag[3] && this._clock.get.seconds() > 1.5) {
      this._flag[3] = false;
      this._interface.tableCard2.card = this._table.cardAt(1);
      this._interface.tableCard2.display();
    }
    if (this._flag[4] && this._clock.get.seconds() > 2) {
      this._flag[4] = false;
      this._interface.tableCard3.card = this._table.cardAt(2);
      this._interface.tableCard3.display();
    }
    if (this._clock.get.seconds() > 3) {
      this._state++;
      this._resetFlag();
    }
  }

  private _tableSecondRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      this._table.dealToTable(1);
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      this._interface.tableCard4.card = this._table.cardAt(3);
      this._interface.tableCard4.display();
    }
    if (this._flag[2] && this._clock.get.seconds() > 1) {
      this._flag[2] = false;
      this._state++;
      this._resetFlag();
    }
  }

  private _tableThirdRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      this._table.dealToTable(1);
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      this._interface.tableCard5.card = this._table.cardAt(4);
      this._interface.tableCard5.display();
    }
    if (this._flag[2] && this._clock.get.seconds() > 1) {
      this._flag[2] = false;
      this._state++;
      this._resetFlag();
    }
  }

  private _scoreRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      for (let i = 0; i < this._opponent.length; i++)
        if (!this._opponent[i].gameOver && !this._opponent[i].fold) {
          this._opponent[i].card1.display();
          this._opponent[i].card2.display();
        }
    }
    if (this._flag[2] && this._clock.get.seconds() > 1) {
      this._flag[2] = false;

      let winner: Entity = this._player;

      let tmp: number = 0;

      for (let i = 0; i < this._opponent.length; i++)
        if (this._opponent[i].gameOver || this._opponent[i].fold) tmp++;

      if (this._player.fold) tmp++;

      if (tmp == this._opponent.length) {
        for (let i = 0; i < this._opponent.length; i++)
          if (!this._opponent[i].fold && !this._opponent[i].gameOver)
            winner = this._opponent[i];
      } else {
        Scorer.assignHandScores(this._table);
        winner = Scorer.compareHandScores(this._table);
      }

      winner.addScore(this._table.awardPot());

      this._player.scoreView.string("$" + this._player.score.toString());
      this._player.scoreView.color("Black");

      for (let i = 0; i < this._opponent.length; i++)
        if (!this._opponent[i].gameOver) {
          this._opponent[i].score === 0
            ? this._opponent[i].scoreView.string("BUST")
            : this._opponent[i].scoreView.string(
                "$" + this._opponent[i].score.toString()
              );
          this._opponent[i].scoreView.color("Black");
        }

      if (winner === this._player) {
        this._interface.topLeft.string("YOU");
        this._interface.topLeft.color("Blue");
        this._interface.topRight.string("WIN!");
        this._interface.topRight.color("Blue");
        this._player.turnView.color("Blue");
      } else {
        this._interface.topLeft.string("YOU");
        this._interface.topLeft.color("Red");
        this._interface.topRight.string("LOSE!");
        this._interface.topRight.color("Red");
        this._player.turnView.color("Red");

        if (winner === this._opponent[0])
          this._opponent[0].scoreMarker.string("&#x2190");
        else this._opponent[1].scoreMarker.string("&#x2192");
      }
    }
    if (this._flag[3] && this._clock.get.seconds() > 3) {
      this._flag[3] = false;

      for (let i = 0; i < this._opponent.length; i++) {
        this._opponent[i].raiseAmount.clear();
        this._opponent[i].raiseAmount.color("Black");
      }
    }
    if (this._flag[4] && this._clock.get.seconds() > 3.5) {
      this._flag[4] = false;
      this._interface.topLeft.clear();
      this._interface.topRight.clear();
    }
    if (this._flag[5] && this._clock.get.seconds() > 4) {
      this._flag[5] = false;
      this._resetFlag();
      this._state++;
    }
  }

  private _finalRound() {
    for (let i = 0; i < this._opponent.length; i++)
      if (!this._opponent[i].gameOver) {
        if (this._opponent[i].score <= 0) {
          this._opponent[i].gameOver = true;
          this._table.removeEntity(this._opponent[i]);
        }
      }

    if (
      (this._opponent[0].gameOver && this._opponent[1].gameOver) ||
      this._player.score <= 0
    ) {
      this._state++;
    } else {
      this._state = 0;
    }
  }

  private _gameOver() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._interface.tableCard1.clear();
      this._interface.tableCard2.clear();
      this._interface.tableCard3.clear();
      this._interface.tableCard4.clear();
      this._interface.tableCard5.clear();
      this._interface.tableCard6.clear();
      this._player.turnView.string("GAME OVER");
      this._player.card1.default();
      this._player.card2.default();
      for (let i = 0; i < this._opponent.length; i++) {
        this._opponent[i].card1.default();
        this._opponent[i].card2.default();
      }
    }
  }

  private _playerRound() {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      if (this._table.skipTurn(this._player)) {
        this._betState++;
        this._resetFlag();
      } else {
        this._interface.raiseAmount.color("Black");
        this._interface.raiseAmount.string("$10");
        this._interface.raiseArrowLeft.string("&#x2190");
        this._interface.raiseArrowRight.string("&#x2192");
        this._interface.raise.backgroundColor("red");
      }
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      this._clickable = true;
      if (this._state == 2) {
        this._player.turnView.string("your turn");
        this._player.turnView.color("magenta");
      } else {
        this._interface.topLeft.string("your");
        this._interface.topRight.string("turn");
        this._interface.topLeft.color("blue");
        this._interface.topRight.color("blue");
      }
    }
    if (this._flag[2] && this._clock.get.seconds() > 1.5) {
      this._flag[2] = false;
      this._interface.topLeft.clear();
      this._player.turnView.clear();
      this._interface.topRight.clear();
    }
    if (this._flag[3] && this._clock.get.seconds() > 3) {
      this._flag[3] = false;
      //this._resetFlag();
      //this.playerCall();
    }
  }

  private _opponentRound(opponent: Player) {
    if (this._flag[0]) {
      this._flag[0] = false;
      this._clock.reset();
      if (opponent.gameOver || this._table.skipTurn(opponent)) {
        this._betState++;
        this._resetFlag();
      }
    }
    if (this._flag[1] && this._clock.get.seconds() > 0.5) {
      this._flag[1] = false;
      opponent.marker.string("&#x2193");
      opponent.marker.color("Red");
    }
    if (this._flag[2] && this._clock.get.seconds() > 1.5) {
      this._flag[2] = false;
      opponent.marker.clear();
    }
    if (this._flag[3] && this._clock.get.seconds() > 2) {
      this._flag[3] = false;
      let tmp: number = OpponentLogic.play(opponent, this._table);
      if (tmp > 0) {
        this._table.raise(opponent, tmp);
        if (opponent.score != 0){
          opponent.turnView.string("BET");
          opponent.raiseAmount.string("$" + opponent.betAmount.toString());
        }
      } else if (tmp === 0) {
        this._table.call(opponent);
        if (opponent.score != 0) {
          opponent.turnView.string("CALL");
          opponent.raiseAmount.clear();
        }
      } else if (tmp < 0) {
        this._table.fold(opponent);
        //opponent.turnView.string("FOLD");
        opponent.raiseAmount.clear();
      }
    }
    if (this._flag[4] && this._clock.get.seconds() > 2.5) {
      this._flag[4] = false;
      if (!opponent.gameOver)
        if (opponent.score === 0) {
          opponent.scoreView.string("ALL-IN");
          opponent.scoreView.color("Red");
        } else if (opponent.fold) {
          opponent.scoreView.string("FOLD");
          opponent.scoreView.color("Black");
        } else {
          opponent.scoreView.string("$" + opponent.score.toString());
          opponent.scoreView.color("Black");
        }
      else opponent.scoreView.clear();
      this._interface.potScore.string(this._table.pot.score.toString());
    }
    if (this._flag[5] && this._clock.get.seconds() > 3.5) {
      this._flag[5] = false;
      opponent.turnView.clear();
      opponent.raiseAmount.clear();
      this._betState++;
      this._resetFlag();
    }
  }

  private _switchBettingRound() {
    if (
      this._table.callAmount !== 0 &&
      !this._opponent[0].gameOver &&
      !this._table.skipTurn(this._opponent[0])
    ) {
      this._betState = 0;
    } else if (
      this._table.callAmount !== 0 &&
      !this._table.skipTurn(this._player)
    ) {
      this._betState = 1;
    } else if (
      this._table.callAmount !== 0 &&
      !this._opponent[1].gameOver &&
      !this._table.skipTurn(this._opponent[1])
    ) {
      this._betState = 2;
    } else {
      this._table.resetCallAmount();
      this._table.resetBetAmounts();
      this._betState = 0;
      let tmp = 0;
      if (this._opponent[0].gameOver || this._opponent[0].fold) tmp++;
      if (this._opponent[1].gameOver || this._opponent[1].fold) tmp++;
      if (this._player.fold) tmp++;
      tmp == 2 ? (this._state = 9) : this._state++;
    }
  }

  private _bettingRound() {
    switch (this._betState) {
      case 0:
        this._opponentRound(this._opponent[0]);
        break;
      case 1:
        this._playerRound();
        break;
      case 2:
        this._opponentRound(this._opponent[1]);
        break;
      case 3:
        this._switchBettingRound();
        break;
    }
  }

  playerRaise() {
    if (this._clickable) {
      this._table.raise(this._player, this._player.currentBetAmount);
      this._player.currentBetAmount = 10;
      this._interface.potScore.string(this._table.pot.score.toString());
      this._player.scoreView.string("$" + this._player.score.toString());
      if (this._player.score === 0) {
        this._player.betAmount = 0;
        this._interface.raiseAmount.string("ALL-IN");
        this._interface.raiseAmount.color("Red");
        this._interface.raiseArrowLeft.clear();
        this._interface.raiseArrowRight.clear();
      } else {
        this._player.currentBetAmount = 10;
        this._interface.raiseAmount.string(
          "$" + this._player.currentBetAmount.toString()
        );
      }
      this._interface.call.backgroundColor("Blue");
      this._interface.raise.backgroundColor("Blue");
      this._interface.fold.backgroundColor("Blue");
      this._interface.raiseArrowLeft.color("Black");
      this._interface.raiseArrowRight.color("Black");
      this._clickable = false;
      this._interface.raise.string("RAISE");
      this._betState++;
      this._resetFlag();
    }
  }

  playerCall() {
    if (this._clickable) {
      this._table.call(this._player);
      if (this._player.score === 0) {
        this._player.betAmount = 0;
        this._interface.raiseAmount.string("ALL-IN");
        this._interface.raiseAmount.color("Red");
        this._interface.raiseArrowLeft.clear();
        this._interface.raiseArrowRight.clear();
        this._player.currentBetAmount = 0;
      } else {
        this._interface.raiseAmount.string("$10");
        this._interface.raiseAmount.color("Black");
        this._interface.raiseArrowRight.string("&#x2192");
        this._player.currentBetAmount = 10;
      }
      this._interface.playerScore.string("$" + this._player.score.toString());
      this._interface.call.backgroundColor("Blue");
      this._interface.raise.backgroundColor("Red");
      this._interface.fold.backgroundColor("Blue");
      this._interface.raiseArrowLeft.color("Red");
      this._interface.raiseArrowRight.color("Red");
      this._clickable = false;
      this._interface.call.string("CALL");
      this._betState++;
      this._resetFlag();
    }
  }

  playerFold() {
    if (this._clickable) {
      this._table.fold(this._player);
      this._interface.raiseAmount.string("FOLD");
      this._interface.raiseAmount.color("Black");
      this._interface.raiseArrowRight.clear();
      this._interface.raiseArrowLeft.clear();
      this._player.card1.default();
      this._player.card2.default();
      this._interface.call.backgroundColor("Blue");
      this._interface.raise.backgroundColor("Blue");
      this._interface.fold.backgroundColor("Blue");
      this._interface.raiseArrowLeft.color("Black");
      this._interface.raiseArrowRight.color("Black");
      this._clickable = false;
      this._interface.fold.string("FOLD");
      this._betState++;
      this._resetFlag();
    }
  }

  incrementBetAmount() {
    let tmp: number = this._player.currentBetAmount + 10;
    if (this._clickable && tmp + this._table.callAmount <= this._player.score) {
      if (tmp + this._table.callAmount === this._player.score) {
        this._interface.raiseArrowRight.clear();
        this._interface.raiseAmount.string("ALL-IN!");
        this._interface.raiseAmount.color("Red");
      } else {
        this._interface.raiseAmount.string("$" + tmp.toString());
      }
      this._interface.raise.string(
        "$" + (this._table.callAmount + tmp).toString()
      );
      this._player.currentBetAmount = tmp;
    }
  }

  decrementBetAmount() {
    let tmp: number = this._player.currentBetAmount - 10;
    if (this._clickable && tmp >= 10) {
      if (tmp + this._table.callAmount + 10 == this._player.score) {
        this._interface.raiseArrowRight.string("&#x2192");
        this._interface.raiseAmount.color("Black");
      }
      this._interface.raiseAmount.string("$" + tmp.toString());
      this._interface.raise.string(
        "$" + (this._table.callAmount + tmp).toString()
      );
      this._player.currentBetAmount = tmp;
    }
  }

  gameDriver() {
    switch (this._state) {
      case 0:
        this._startGame();
        break;
      case 1:
        this._preRound();
        break;
      case 2:
      case 4:
      case 6:
      case 8:
        this._bettingRound();
        break;
      case 3:
        this._tableFirstRound();
        break;
      case 5:
        this._tableSecondRound();
        break;
      case 7:
        this._tableThirdRound();
        break;
      case 9:
        this._scoreRound();
        break;
      case 10:
        this._finalRound();
        break;
      case 11:
        this._gameOver();
        break;
    }
  }

  constructor() {
    this._state = 0;
    this._betState = 0;
    this._flag = [true, true, true, true, true, true, true, true];
    this._clickable = false;
    this._interface = new Interface();
    this._clock = new Clock();
    this._table = new Table();
    this._opponent = [new Player(), new Player()];
    this._player = new User();
    this._opponent[1] = new Player();
  }
}

export default TurnLogic;
