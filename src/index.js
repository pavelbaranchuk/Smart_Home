import Home from "./js/Home";
import Light from "./js/Light";
import CoffeeMachine from "./js/CoffeeMachine";
import Tv from "./js/Tv";

const home = new Home("Kiev, Bazhanova,app.7", 61000, "Petro");
console.log(home);
const light = new Light("Light", "Default text");
console.log(light);
const tv = new Tv("LG flatron w2243s", "Default text");
console.log(tv);
const coffeeMachine = new CoffeeMachine("Coffee Machine", "Default text");
console.log(coffeeMachine);
