"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickEvent = (function () {
    function ClickEvent(htmlElem) {
        this._htmlElem = htmlElem;
        this._flag = false;
    }
    ClickEvent.prototype.add = function (func) {
        if (this._flag)
            new Error("Event already exist");
        else {
            this._func = func;
            this._htmlElem.addEventListener("click", func());
            this._flag = true;
        }
    };
    ClickEvent.prototype.remove = function () {
        if (!this._flag)
            new Error("Event does not exist");
        else {
            this._htmlElem.removeEventListener("click", this._func());
            this._flag = false;
        }
    };
    return ClickEvent;
}());
exports.default = ClickEvent;
//# sourceMappingURL=ClickEvent.js.map