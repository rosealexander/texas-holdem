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
var Table_1 = require("../model/Table");
var TableController = (function (_super) {
    __extends(TableController, _super);
    function TableController() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TableController.prototype, "card1", {
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
    Object.defineProperty(TableController.prototype, "card2", {
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
    Object.defineProperty(TableController.prototype, "card3", {
        get: function () {
            if (typeof this._card3 === "object")
                return this._card3;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card3 = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableController.prototype, "card4", {
        get: function () {
            if (typeof this._card4 === "object")
                return this._card4;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card4 = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableController.prototype, "card5", {
        get: function () {
            if (typeof this._card5 === "object")
                return this._card5;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card5 = card;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableController.prototype, "card6", {
        get: function () {
            if (typeof this._card6 === "object")
                return this._card6;
            else
                throw new Error("cannot return undefined");
        },
        set: function (card) {
            this._card6 = card;
        },
        enumerable: true,
        configurable: true
    });
    return TableController;
}(Table_1.default));
exports.default = TableController;
//# sourceMappingURL=TableController.js.map