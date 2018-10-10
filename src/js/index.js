import "../scss/index.scss";
import Animal from "./Animal";
import Zoo from "./Zoo";

const zoo = new Zoo("TomZoo", "TYT");

window.zoo = zoo;

zoo.addAnimal(new Animal("Jerry", 1, "M"));
zoo.addAnimal(new Animal("Leopold", 5, "M"));
zoo.addAnimal(new Animal("Begemot", 3, "FM"));
