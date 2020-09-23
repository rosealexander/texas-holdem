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
var Player_1 = require("./Player");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.call(this) || this;
        _this._currentBetAmount = 0;
        return _this;
    }
    Object.defineProperty(User.prototype, "currentBetAmount", {
        get: function () {
            return this._currentBetAmount;
        },
        set: function (amount) {
            this._currentBetAmount = amount;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(Player_1.default));
exports.default = User;
//# sourceMappingURL=User.js.map