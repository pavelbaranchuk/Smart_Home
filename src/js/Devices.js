export default class Devices {
  constructor(name, info) {
    this._name = name;
    this._info = info;
    this._isOn = false;
    this._id = Date.now();
  }
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get info() {
    return this._info;
  }

  set name(info) {
    this._info = info;
  }

  get id() {
    return this._id;
  }

  get isOn() {
    return this._isOn;
  }

  turnOn() {
    if (this._isOn === false) {
      this._isOn = true;
    }
  }

  turnOff() {
    if (this._isOn === true) {
      this._isOn = false;
    }
  }

  switchOnOff(isOn) {
    this._isOn = !isOn;
  }
}
