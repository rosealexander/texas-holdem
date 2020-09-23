"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickEventHandler = (function () {
    function ClickEventHandler(htmlElem, func) {
        this._flag = true;
        this._htmlElem = htmlElem;
        this._func = func;
        this._htmlElem.addEventListener("click", this._func());
    }
    ClickEventHandler.prototype.attach = function () {
        this._flag ? Error("Event already exist") : this._htmlElem.addEventListener("click", this._func());
    };
    ClickEventHandler.prototype.remove = function () {
        !this._flag ? Error("Event does not exist") : this._htmlElem.removeEventListener("click", this._func());
    };
    return ClickEventHandler;
}());
exports.default = ClickEventHandler;
//# sourceMappingURL=OnClickEvent.js.map