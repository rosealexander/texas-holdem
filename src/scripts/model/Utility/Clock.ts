class Clock {
  private _time: number;

  reset() {
    this._time = new Date().getTime();
  }

  public get = new (class {
    seconds() {
      return (new Date().getTime() - this.superThis._time) / 1000;
    }

    milliseconds() {
      return new Date().getTime() - this.superThis._time;
    }

    constructor(public superThis: Clock) {}
  })(this);

  constructor() {
    this._time = new Date().getTime();
  }
}

export default Clock;
