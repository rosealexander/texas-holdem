class Utility {
  static cardToUnicode(value: number, suit: number) {
    switch (suit) {
      case 1:
        switch (value) {
          case 2:
            return "&#x1F0C2";
          case 3:
            return "&#x1F0C3";
          case 4:
            return "&#x1F0C4";
          case 5:
            return "&#x1F0C5";
          case 6:
            return "&#x1F0C6";
          case 7:
            return "&#x1F0C7";
          case 8:
            return "&#x1F0C8";
          case 9:
            return "&#x1F0C9";
          case 10:
            return "&#x1F0CA";
          case 11:
            return "&#x1F0CB";
          case 12:
            return "&#x1F0CD";
          case 13:
            return "&#x1F0CE";
          case 14:
            return "&#x1F0C1";
          default:
            return "&#x1F0DF";
        }
      case 2:
        switch (value) {
          case 2:
            return "&#x1F0B2";
          case 3:
            return "&#x1F0B3";
          case 4:
            return "&#x1F0B4";
          case 5:
            return "&#x1F0B5";
          case 6:
            return "&#x1F0B6";
          case 7:
            return "&#x1F0B7";
          case 8:
            return "&#x1F0B8";
          case 9:
            return "&#x1F0B9";
          case 10:
            return "&#x1F0BA";
          case 11:
            return "&#x1F0BB";
          case 12:
            return "&#x1F0BD";
          case 13:
            return "&#x1F0BE";
          case 14:
            return "&#x1F0B1";
          default:
            return "&#x1F0DF";
        }
      case 3:
        switch (value) {
          case 2:
            return "&#x1F0D2";
          case 3:
            return "&#x1F0D3";
          case 4:
            return "&#x1F0D4";
          case 5:
            return "&#x1F0D5";
          case 6:
            return "&#x1F0D6";
          case 7:
            return "&#x1F0D7";
          case 8:
            return "&#x1F0D8";
          case 9:
            return "&#x1F0D9";
          case 10:
            return "&#x1F0DA";
          case 11:
            return "&#x1F0DB";
          case 12:
            return "&#x1F0DD";
          case 13:
            return "&#x1F0DE";
          case 14:
            return "&#x1F0D1";
          default:
            return "&#x1F0DF";
        }
      case 4:
        switch (value) {
          case 2:
            return "&#x1F0A2";
          case 3:
            return "&#x1F0A3";
          case 4:
            return "&#x1F0A4";
          case 5:
            return "&#x1F0A5";
          case 6:
            return "&#x1F0A6";
          case 7:
            return "&#x1F0A7";
          case 8:
            return "&#x1F0A8";
          case 9:
            return "&#x1F0A9";
          case 10:
            return "&#x1F0AA";
          case 11:
            return "&#x1F0AB";
          case 12:
            return "&#x1F0AD";
          case 13:
            return "&#x1F0AE";
          case 14:
            return "&#x1F0A1";
          default:
            return "&#x1F0DF";
        }
      default:
        return "&#x1F0A0";
    }
  }

  static cardToString(value: number, suit: number) {
    let v: string, s: string;
    switch (value) {
      case 2:
        v = "Two";
        break;
      case 3:
        v = "Three";
        break;
      case 4:
        v = "Four";
        break;
      case 5:
        v = "Five";
        break;
      case 6:
        v = "Six";
        break;
      case 7:
        v = "Seven";
        break;
      case 8:
        v = "Eight";
        break;
      case 9:
        v = "Nine";
        break;
      case 10:
        v = "Ten";
        break;
      case 11:
        v = "Jack";
        break;
      case 12:
        v = "Queen";
        break;
      case 13:
        v = "King";
        break;
      case 14:
        v = "Ace";
        break;
      default:
        v = "Joker";
    }
    switch (suit) {
      case 1:
        s = "Diamonds";
        break;
      case 2:
        s = "Hearts";
        break;
      case 3:
        s = "Clubs";
        break;
      case 4:
        s = "Spades";
        break;
      default:
        s = "Joker";
    }
    return v + " of " + s;
  }

  static PriorityQueue = class<T> {
    private readonly _items: T[];

    push(element: T) {
      let contain: boolean = false;
      for (let i = 0; i < this._items.length; i++) {
        if (this._items[i] > element) {
          this._items.splice(i, 0, element);
          contain = true;
          break;
        }
      }
      if (!contain) {
        this._items.push(element);
      }
    }

    pop() {
      if (this._items.length == 0)
        throw new RangeError("Cannot dequeue if length < 1");
      return this._items.shift();
    }

    top() {
      if (this._items.length == 0) throw new RangeError("Nothing in queue");
      return this._items[0];
    }

    empty() {
      return length === 0;
    }

    constructor() {
      this._items = [];
    }
  };
}

export default Utility;
