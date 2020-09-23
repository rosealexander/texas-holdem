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
var ViewContainer_1 = require("./ViewContainer");
var ButtonView = (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonView.prototype.string = function (string) {
        this.element.firstElementChild.innerHTML = string;
    };
    ButtonView.prototype.backgroundColor = function (color) {
        this.element.style.backgroundColor = color;
    };
    return ButtonView;
}(ViewContainer_1.default));
exports.default = ButtonView;
//# sourceMappingURL=ButtonView.js.map