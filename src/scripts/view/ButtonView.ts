import ViewContainer from "./ViewContainer";

class ButtonView extends ViewContainer {
  string(string: string): void {
    this.element.firstElementChild!.innerHTML = string;
  }

  backgroundColor(color: string): void {
    this.element.style.backgroundColor = color;
  }
}

export default ButtonView;
