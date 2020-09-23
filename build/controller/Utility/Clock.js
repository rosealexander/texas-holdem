"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = (function () {
    function Clock() {
        this.get = new (function () {
            function class_1(superThis) {
                this.superThis = superThis;
            }
            class_1.prototype.seconds = function () {
                return (new Date().getTime() - this.superThis._time) / 1000;
            };
            class_1.prototype.milliseconds = function () {
                return new Date().getTime() - this.superThis._time;
            };
            return class_1;
        }())(this);
        this._time = new Date().getTime();
    }
    Clock.prototype.reset = function () {
        this._time = new Date().getTime();
    };
    return Clock;
}());
exports.default = Clock;
//# sourceMappingURL=Clock.js.map