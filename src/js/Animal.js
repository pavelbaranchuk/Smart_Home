export class Animal {
  constructor(name, age, gender) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
  get gender() {
    return this._gender;
  }
  go() {
    console.log(`(this._name go`);
  }
  stop() {
    console.log(`(this._name stop`);
  }
}

// console.log("test");
