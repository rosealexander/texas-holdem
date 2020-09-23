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
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextView.prototype.string = function (string) {
        this.element.innerHTML = string;
    };
    TextView.prototype.color = function (color) {
        this.element.style.color = color;
    };
    TextView.prototype.clear = function () {
        this.element.innerHTML = "";
    };
    return TextView;
}(ViewContainer_1.default));
exports.default = TextView;
//# sourceMappingURL=TextView.js.map