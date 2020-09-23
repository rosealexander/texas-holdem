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
var EntityController_1 = require("./EntityController");
var PlayerController = (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super.call(this) || this;
        _this._currentBetAmount = 0;
        return _this;
    }
    Object.defineProperty(PlayerController.prototype, "currentBetAmount", {
        get: function () {
            return this._currentBetAmount;
        },
        set: function (amount) {
            this._currentBetAmount = amount;
        },
        enumerable: true,
        configurable: true
    });
    return PlayerController;
}(EntityController_1.default));
exports.default = PlayerController;
//# sourceMappingURL=PlayerController.js.map