"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvents = (function () {
    function ClickEvents(turnLogic) {
        this._turnLogic = turnLogic;
        this._playerFoldButton = document.getElementById("fold-button-container");
        this._playerCallButton = document.getElementById("call-button-container");
        this._playerRaiseButton = document.getElementById("raise-button-container");
        this._arrowLeftButton = document.getElementById("raise-arrow-left-container");
        this._arrowRightButton = document.getElementById("raise-arrow-right-container");
    }
    ClickEvents.prototype.init = function () {
        var _this = this;
        this._playerFoldButton.addEventListener("click", function () {
            if (_this._turnLogic.betState === 1)
                _this._turnLogic.playerFold();
        });
        this._playerFoldButton.addEventListener("mouseover", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerFoldButton.style.backgroundColor = "magenta";
        });
        this._playerFoldButton.addEventListener("mouseout", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerFoldButton.style.backgroundColor = "blue";
        });
        this._playerCallButton.addEventListener("click", function () {
            if (_this._turnLogic.betState === 1)
                _this._turnLogic.playerCall();
        });
        this._playerCallButton.addEventListener("mouseover", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerCallButton.style.backgroundColor = "magenta";
        });
        this._playerCallButton.addEventListener("mouseout", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerCallButton.style.backgroundColor = "blue";
        });
        this._playerRaiseButton.addEventListener("click", function () {
            if (_this._turnLogic.betState === 1)
                _this._turnLogic.playerRaise();
        });
        this._playerRaiseButton.addEventListener("mouseover", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerRaiseButton.style.backgroundColor = "magenta";
        });
        this._playerRaiseButton.addEventListener("mouseout", function () {
            if (_this._turnLogic.betState === 1)
                _this._playerRaiseButton.style.backgroundColor = "red";
        });
        this._arrowLeftButton.addEventListener("click", function () {
            if (_this._turnLogic.betState === 1)
                _this._turnLogic.decrementBetAmount();
        });
        this._arrowRightButton.addEventListener("click", function () {
            if (_this._turnLogic.betState === 1)
                _this._turnLogic.incrementBetAmount();
        });
    };
    ;
    return ClickEvents;
}());
exports.default = ClickEvents;
//# sourceMappingURL=ClickEvents.js.map