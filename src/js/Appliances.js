export class Appliances {
  constructor(name, madeIn, status) {
    this._name = name;
    this._madeIn = madeIn;
    this._status = status;
  }
  get name() {
    return this._name;
  }
  get madeIn() {
    return this._madeIn;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }
}
