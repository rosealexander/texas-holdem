"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pot = (function () {
    function Pot() {
        this._score = 0;
    }
    Object.defineProperty(Pot.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Pot.prototype.add = function (amount) {
        amount < 0
            ? new Error("Amount to add must be strictly positive")
            : (this._score += amount);
    };
    Pot.prototype.clear = function () {
        this._score = 0;
    };
    Pot.prototype.awardScore = function () {
        var tmp = this._score;
        this.clear();
        return tmp;
    };
    return Pot;
}());
exports.default = Pot;
//# sourceMappingURL=Pot.js.map