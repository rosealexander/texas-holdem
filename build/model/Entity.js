"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand_1 = require("./Hand");
var Entity = (function () {
    function Entity() {
        this._cardHand = new Hand_1.default();
        this._score = 0;
        this._handScore = "";
        this._betAmount = 0;
        this._fold = false;
        this._gameOver = false;
    }
    Object.defineProperty(Entity.prototype, "gameOver", {
        get: function () {
            return this._gameOver;
        },
        set: function (truthy) {
            this._gameOver = truthy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "fold", {
        get: function () {
            return this._fold;
        },
        set: function (truthy) {
            this._fold = truthy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "betAmount", {
        get: function () {
            return this._betAmount;
        },
        set: function (betAmount) {
            this._betAmount = betAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "hand", {
        get: function () {
            return this._cardHand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "handScore", {
        get: function () {
            return this._handScore;
        },
        set: function (handScore) {
            this._handScore = handScore;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.resetBetAmount = function () {
        this._betAmount = 0;
    };
    Entity.prototype.cardAt = function (index) {
        return this._cardHand.at(index);
    };
    Entity.prototype.addCard = function (card) {
        this._cardHand.addCard(card);
    };
    Entity.prototype.addScore = function (amount) {
        this._score += amount;
    };
    Entity.prototype.clearHand = function () {
        this._cardHand.clear();
    };
    return Entity;
}());
exports.default = Entity;
//# sourceMappingURL=Entity.js.map