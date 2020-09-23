import TurnLogic from "../model/TurnLogic";

class ClickEvents {

    private _turnLogic : TurnLogic;

    private _playerFoldButton : HTMLElement;
    private _playerCallButton : HTMLElement;
    private _playerRaiseButton : HTMLElement;
    private _arrowLeftButton: HTMLElement;
    private _arrowRightButton: HTMLElement;

    init(){
        this._playerFoldButton.addEventListener("click", () => {
            if (this._turnLogic.betState === 1) this._turnLogic.playerFold();
        });
        this._playerFoldButton.addEventListener("mouseover", () => {
            if (this._turnLogic.betState === 1) this._playerFoldButton.style.backgroundColor = "magenta";
        });
        this._playerFoldButton.addEventListener("mouseout", () => {
            if (this._turnLogic.betState === 1) this._playerFoldButton.style.backgroundColor = "blue";
        });
        this._playerCallButton.addEventListener("click", () => {
            if (this._turnLogic.betState === 1) this._turnLogic.playerCall();
        });
        this._playerCallButton.addEventListener("mouseover", () => {
            if (this._turnLogic.betState === 1) this._playerCallButton.style.backgroundColor = "magenta";
        });
        this._playerCallButton.addEventListener("mouseout", () => {
            if (this._turnLogic.betState === 1) this._playerCallButton.style.backgroundColor = "blue";
        });
        this._playerRaiseButton.addEventListener("click", () => {
            if (this._turnLogic.betState === 1) this._turnLogic.playerRaise();
        });
        this._playerRaiseButton.addEventListener("mouseover", () => {
            if (this._turnLogic.betState === 1) this._playerRaiseButton.style.backgroundColor = "magenta";
        });
        this._playerRaiseButton.addEventListener("mouseout", () => {
            if (this._turnLogic.betState === 1) this._playerRaiseButton.style.backgroundColor = "red";
        });
        this._arrowLeftButton.addEventListener("click", () => {
            if (this._turnLogic.betState === 1) this._turnLogic.decrementBetAmount();
        });
        this._arrowRightButton.addEventListener("click", () => {
            if (this._turnLogic.betState === 1) this._turnLogic.incrementBetAmount();
        });
    };

    constructor(turnLogic : TurnLogic) {
        this._turnLogic = turnLogic;
        this._playerFoldButton = document.getElementById("fold-button-container")!;
        this._playerCallButton = document.getElementById("call-button-container")!;
        this._playerRaiseButton = document.getElementById("raise-button-container")!;
        this._arrowLeftButton = document.getElementById("raise-arrow-left-container")!;
        this._arrowRightButton = document.getElementById("raise-arrow-right-container")!

    }
}

export default ClickEvents