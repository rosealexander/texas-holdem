import ViewContainer from "./ViewContainer";

class TextView extends ViewContainer {
  string(string: string): void {
    this.element.innerHTML = string;
  }

  color(color: string): void {
    this.element.style.color = color;
  }

  clear() {
    this.element.innerHTML = "";
  }
}

export default TextView;
