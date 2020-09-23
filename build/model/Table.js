"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand_1 = require("./Hand");
var Deck_1 = require("./Deck");
var Pot_1 = require("./Pot");
var Table = (function () {
    function Table() {
        this._players = [];
        this._cards = new Hand_1.default();
        this._deck = new Deck_1.default();
        this._pot = new Pot_1.default();
        this._callAmount = 0;
    }
    Object.defineProperty(Table.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "callAmount", {
        get: function () {
            return this._callAmount;
        },
        set: function (amount) {
            this._callAmount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "pot", {
        get: function () {
            return this._pot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.empty = function () {
        return this._players.length === 0;
    };
    Table.prototype.size = function () {
        return this._players.length;
    };
    Table.prototype.at = function (index) {
        if (index <= 0 || index > this._players.length)
            new RangeError("index out of bounds");
        return this._players[index];
    };
    Table.prototype.cardAt = function (index) {
        return this._cards.at(index);
    };
    Table.prototype.addCard = function (card) {
        this._cards.addCard(card);
    };
    Table.prototype.clearCards = function () {
        this._cards.clear();
    };
    Table.prototype.resetDeck = function () {
        this._deck.clear();
        this._deck.fill();
        this._deck.shuffle();
    };
    Table.prototype.resetCallAmount = function () {
        this._callAmount = 0;
    };
    Table.prototype.resetBetAmounts = function () {
        this._players.forEach(function (players) { return players.resetBetAmount(); });
    };
    Table.prototype.addToPot = function (amount) {
        this._pot.add(amount);
    };
    Table.prototype.awardPot = function () {
        return this._pot.awardScore();
    };
    Table.prototype.addEntity = function (entity) {
        this._players.push(entity);
    };
    Table.prototype.removeEntity = function (entity) {
        for (var i = 0; i < this._players.length; i++)
            if (this._players[i] === entity)
                this._players.splice(i, 1);
    };
    Table.prototype.fold = function (entity) {
        entity.fold = true;
        entity.resetBetAmount();
    };
    Table.prototype.resetFold = function () {
        this._players.forEach(function (player) { return (player.fold = false); });
    };
    Table.prototype.resetTable = function () {
        this.resetBetAmounts();
        this.resetCallAmount();
        this.resetDeck();
        this.clearCards();
        this.resetFold();
        this._players.forEach(function (player) { return player.clearHand(); });
    };
    Table.prototype.playing = function () {
        var tmp = 0;
        this._players.forEach(function (player) {
            if (player.fold)
                tmp++;
        });
        return tmp;
    };
    Table.prototype.skipTurn = function (entity) {
        var hasHighestBet = true;
        var counter = 0;
        if (entity.betAmount <= 0)
            hasHighestBet = false;
        this._players.forEach(function (player) {
            if (!player.fold && entity.betAmount < player.betAmount)
                hasHighestBet = false;
            if (player !== entity && (player.fold || player.score === 0))
                counter++;
        });
        return ((entity.betAmount >= this._callAmount &&
            (counter === this._players.length - 1 || hasHighestBet)) ||
            entity.score === 0 ||
            entity.fold);
    };
    Table.prototype.raise = function (entity, raiseAmount) {
        if (raiseAmount + this._callAmount > entity.score)
            throw RangeError("amount raised + the current call amount cannot exceed entity score");
        this.addToPot(raiseAmount + this._callAmount);
        entity.score = entity.score - (this._callAmount + raiseAmount);
        this._callAmount += raiseAmount;
        entity.betAmount = this._callAmount;
    };
    Table.prototype.call = function (entity) {
        if (entity.score < this._callAmount - entity.betAmount) {
            this.addToPot(entity.score);
            entity.score = 0;
        }
        else {
            this.addToPot(this._callAmount - entity.betAmount);
            entity.score = entity.score - (this._callAmount - entity.betAmount);
            entity.betAmount = this._callAmount;
        }
    };
    Table.prototype.dealToPlayers = function (numberOfCards) {
        var _this = this;
        if (this._deck.size() < numberOfCards * this._players.length)
            throw new RangeError("not enough cards left in the deck to dealToPlayers");
        for (var i = 0; i < numberOfCards; i++)
            this._players.forEach(function (player) { return player.addCard(_this._deck.dealCard()); });
    };
    Table.prototype.dealToTable = function (numberOfCards) {
        if (this._deck.size() < numberOfCards) {
            throw new Error("Not enough cards left in the deck to dealToTable");
        }
        for (var i = 0; i < numberOfCards; i++) {
            this.addCard(this._deck.dealCard());
        }
    };
    return Table;
}());
exports.default = Table;
//# sourceMappingURL=Table.js.map