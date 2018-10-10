export class Home {
  constructor(address, postalCode) {
    this._address = address;
    this._postalCode = postalCode;
    this._devices = [];
  }

  get address() {
    return this._address;
  }

  get postalCode() {
    return this._postalCode;
  }

  get devices() {
    return this._devices;
  }

  addDevice(device) {
    this._devices.push(device);
  }

  removeDevice(device) {
    let index = this._devices.indexOf(device);
    this._devices.splice(index, 1);
  }

  getDeviceByName(name) {
    let res;
    this._devices.forEach(device => {
      if (device.name === name) {
        res = device;
      }
    });
    return res;
  }
}
