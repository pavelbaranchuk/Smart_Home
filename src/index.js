import Home from "./js/Home";
import Light from "./js/Light";
import CoffeeMachine from "./js/CoffeeMachine";
import Tv from "./js/Tv";

const home = new Home("Kiev, Bazhanova,app.7", 61000, "Petro");
console.log(home);
const light = new Light(undefined, "yellow_color");
// this._intensity = DEFAULT_VALUE;
//     this._color = DEFAULT_COLOR;
//     this._mode = DEFAULT_MODE;
console.log(light);
// const security = new Security();
// const coffeeMachine = new CoffeeMachine();
// console.log("List of devices");

// import House from "./models/House";
// import TV from "./models/TV";
// import VacuumCleaner from "./models/VacuumCleaner";
// import WashingMachine from "./models/WashingMachine";

// import ViewWashingMachine from "./views/WashingMachine";
// import ViewHouse from "./views/House";
// import "../scss/index.scss";

// const house = new House("Сумская, 10", 3, "Любовь");

// const viewHouse = new ViewHouse(house, document.getElementById("root"));
// viewHouse.render();
