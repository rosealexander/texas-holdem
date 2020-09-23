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
var Entity_1 = require("./Entity");
var PlayerView = (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(PlayerView.prototype, "marker", {
        get: function () {
            if (typeof this._marker === "object")
                return this._marker;
            else
                throw new Error("cannot return undefined");
        },
        set: function (marker) {
            this._marker = marker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "scoreView", {
        get: function () {
            if (typeof this._scoreView === "object")
                return this._scoreView;
            else
                throw new Error("cannot return undefined");
        },
        set: function (scoreView) {
            this._scoreView = scoreView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "scoreMarker", {
        get: function () {
            if (typeof this._scoreMarker === "object")
                return this._scoreMarker;
            else
                throw new Error("cannot return undefined");
        },
        set: function (scoreMarker) {
            this._scoreMarker = scoreMarker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "turnView", {
        get: function () {
            if (typeof this._turnView === "object")
                return this._turnView;
            else
                throw new Error("cannot return undefined");
        },
        set: function (turnView) {
            this._turnView = turnView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "raiseAmount", {
        get: function () {
            if (typeof this._raiseAmount === "object")
                return this._raiseAmount;
            else
                throw new Error("cannot return undefined");
        },
        set: function (raiseAmount) {
            this._raiseAmount = raiseAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "card1", {
        get: function () {
            if (typeof this._card1 === "object")
                return this._card1;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card1 = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerView.prototype, "card2", {
        get: function () {
            if (typeof this._card2 === "object")
                return this._card2;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card2 = card;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerView;
}(Entity_1.default));
exports.default = PlayerView;
//# sourceMappingURL=Player.js.map