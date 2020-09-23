"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("../model/Card");
var Utility_1 = require("../model/Utility/Utility");
var ViewContainer_1 = require("./ViewContainer");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView(element) {
        var _this = _super.call(this, element) || this;
        _this._card = new Card_1.default();
        return _this;
    }
    Object.defineProperty(CardView.prototype, "card", {
        get: function () {
            return this._card;
        },
        set: function (card) {
            this._card = card;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype.set = function (value, suit) {
        this._card.value = value;
        this._card.suit = suit;
    };
    CardView.prototype.display = function () {
        this.element.innerHTML = "" + Utility_1.default.cardToUnicode(this._card.value, this._card.suit);
        this._card.suit < 3
            ? (this.element.style.color = "Red")
            : (this.element.style.color = "Black");
    };
    CardView.prototype.default = function () {
        this.element.innerHTML = "" + Utility_1.default.cardToUnicode(0, 0);
        this.element.style.color = "Red";
    };
    CardView.prototype.clear = function () {
        this.element.innerHTML = "";
    };
    return CardView;
}(ViewContainer_1.default));
exports.default = CardView;
//# sourceMappingURL=CardView.js.map