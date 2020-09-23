import GameLoop from "./model/GameLoop";
import TurnLogic from "./model/TurnLogic";
import ClickEvents from "./controller/ClickEvents";

let game = new GameLoop();
let turn = new TurnLogic();
let events = new ClickEvents(turn);
events.init();
game.insert(turn, turn.gameDriver);
game.run();
