"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand = (function () {
    function Hand() {
        this._cards = [];
    }
    Object.defineProperty(Hand.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    Hand.prototype.at = function (index) {
        return this._cards[index];
    };
    Hand.prototype.empty = function () {
        return this._cards.length === 0;
    };
    Hand.prototype.addCard = function (card) {
        this._cards.push(card);
    };
    Hand.prototype.clear = function () {
        this._cards.length = 0;
    };
    Hand.prototype.size = function () {
        return this._cards.length;
    };
    return Hand;
}());
exports.default = Hand;
//# sourceMappingURL=Hand.js.map