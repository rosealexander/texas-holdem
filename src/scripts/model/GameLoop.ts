//import TurnLogic from "./controller/TurnLogic";

class GameLoop {
  private _fps: number;

  get fps() {
    return this._fps;
  }

  set fps(fps: number) {
    this._fps = fps;
  }

  private _arr: Function[] = [];

  insert(prototype: object, method: Function) {
    this._arr.push(method.bind(prototype));
  }

  clear() {
    this._arr.length = 0;
  }

  run() {
    if (this._arr.length === 0) {
      throw new Error(
        "There is nothing to call in the game-loop, use Object.insert to add a function"
      );
    }

    let interval = 1000 / this._fps,
      lastTime = new Date().getTime(),
      currentTime = 0,
      delta = 0;

    const gameLoop = () => {
      window.requestAnimationFrame(gameLoop);

      currentTime = new Date().getTime();
      delta = currentTime - lastTime;

      if (delta > interval) {
        for (let i = 0; i < this._arr.length; i++) {
          this._arr[i]();
        }
        lastTime = currentTime - (delta % interval);
      }
    };
    gameLoop();
  }

  constructor(fps?: number) {
    this._fps = fps || 30;
  }
}

export default GameLoop;
