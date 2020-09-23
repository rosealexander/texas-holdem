"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLoop_1 = require("./model/GameLoop");
var TurnLogic_1 = require("./model/TurnLogic");
var ClickEvents_1 = require("./controller/ClickEvents");
var game = new GameLoop_1.default();
var turn = new TurnLogic_1.default();
var events = new ClickEvents_1.default(turn);
events.init();
game.insert(turn, turn.gameDriver);
game.run();
//# sourceMappingURL=app.js.map