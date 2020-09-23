"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Deck = (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.clear = function () {
        this.cards.length = 0;
    };
    Deck.prototype.size = function () {
        return this.cards.length;
    };
    Deck.prototype.dealCard = function () {
        var card = this.cards.pop();
        if (typeof card === "undefined")
            throw new TypeError("Deck does not contain type Card and is most likely empty");
        return card;
    };
    Deck.prototype.fill = function () {
        for (var i = 1; i <= 4; i++)
            for (var j = 2; j <= 14; j++)
                this.cards.push(new Card_1.default(j, i));
    };
    Deck.prototype.shuffle = function () {
        var j;
        for (var i = 0; i < this.size(); i++) {
            j = Math.trunc(Math.random() * Math.floor(i + 1));
            if (j != i) {
                var tmp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = tmp;
            }
        }
    };
    return Deck;
}());
exports.default = Deck;
//# sourceMappingURL=Deck.js.map