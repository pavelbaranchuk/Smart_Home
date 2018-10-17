import Devices from "./Devices";

export default class CoffeeMachine extends Devices {
  constructor(name, info) {
    super(name, info);
    this._typeOfCoffee = this._coffeeList[0];
    this._sugarQty = 2;
    this._size = this._sizeList[1];
    this._sizeList = ["S", "M", "XL"];
    this._spices = false;
    this._milk = false;
    this._coffeeList = ["Americano", "Latte", "Black"];
  }

  get sugarQty() {
    return this._sugarQty;
  }

  set sugarQty(sugarQty) {
    this._sugarQty = sugarQty;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (this._sizeList.indexOf(size) !== -1) {
      this._size = size;
    }
  }

  get typeOfCoffee() {
    return this._typeOfCoffee;
  }

  set typeOfCoffee(typeOfCoffee) {
    if (this._coffeeList.indexOf(typeOfCoffee) !== -1) {
      this._typeOfCoffee = typeOfCoffee;
    }
  }

  get coffeeList() {
    return this._coffeeList;
  }

  get sizeList() {
    return this._sizeList;
  }

  get spices() {
    return this._spices;
  }

  set spices(spices) {
    this._spices = spices;
  }

  get milk() {
    return this._milk;
  }

  set milk(milk) {
    this._milk = milk;
  }
}
