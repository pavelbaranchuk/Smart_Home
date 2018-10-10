export class Zoo {
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this.animals = [];
  }
  get name() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  addAnimal(animal) {
    this._animals.push(animal);
  }
  deleteAnimal(animal) {
    let index = this._animals.indexOf(animal);
    this._animals.splice(index, 1);
  }
  deleteAnimalByIndex(index) {
    this._animals.splice(index, 1);
  }
  get animals() {
    return this._animals;
  }
  getAnimalsByName(name) {
    let res;
    this._animals.forEach(animal => {
      if (animal.name === name) {
        res = animal;
      }
    });
    return res;
  }
  getFirstAnimal() {
    return this._animals[0];
  }
}
