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
var UserView = (function (_super) {
    __extends(UserView, _super);
    function UserView() {
        var _this = _super.call(this) || this;
        _this._currentBetAmount = 0;
        return _this;
    }
    Object.defineProperty(UserView.prototype, "currentBetAmount", {
        get: function () {
            return this._currentBetAmount;
        },
        set: function (amount) {
            this._currentBetAmount = amount;
        },
        enumerable: true,
        configurable: true
    });
    return UserView;
}(Player_1.default));
exports.default = UserView;
//# sourceMappingURL=UserView.js.map