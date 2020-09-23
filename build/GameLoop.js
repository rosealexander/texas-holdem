"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLoop = (function () {
    function GameLoop(fps) {
        this._arr = [];
        this._fps = fps || 30;
    }
    Object.defineProperty(GameLoop.prototype, "fps", {
        get: function () {
            return this._fps;
        },
        set: function (fps) {
            this._fps = fps;
        },
        enumerable: true,
        configurable: true
    });
    GameLoop.prototype.insert = function (prototype, method) {
        this._arr.push(method.bind(prototype));
    };
    GameLoop.prototype.clear = function () {
        this._arr.length = 0;
    };
    GameLoop.prototype.run = function () {
        var _this = this;
        if (this._arr.length === 0) {
            throw new Error("There is nothing to call in the game-loop, use Object.insert to add a function");
        }
        var interval = 1000 / this._fps, lastTime = (new Date()).getTime(), currentTime = 0, delta = 0;
        var gameLoop = function () {
            window.requestAnimationFrame(gameLoop);
            currentTime = (new Date()).getTime();
            delta = (currentTime - lastTime);
            if (delta > interval) {
                for (var i = 0; i < _this._arr.length; i++) {
                    _this._arr[i]();
                }
                lastTime = currentTime - (delta % interval);
            }
        };
        gameLoop();
    };
    return GameLoop;
}());
exports.default = GameLoop;
//# sourceMappingURL=GameLoop.js.map