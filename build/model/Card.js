"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = (function () {
    function Card(value, suit) {
        this._value = value || 0;
        this._suit = suit || 0;
    }
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        set: function (suit) {
            this._suit = suit;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
exports.default = Card;
//# sourceMappingURL=Card.js.map