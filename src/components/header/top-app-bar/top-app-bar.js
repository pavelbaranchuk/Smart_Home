import { MDCTopAppBar } from "@material/top-app-bar";
import { drawer } from "../drawer/drawer";
import { MDCRipple } from "@material/ripple";
// import { Page } from "../../../js/Page";

const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
topAppBar.setScrollTarget(document.getElementById("main-content"));
topAppBar.listen("MDCTopAppBar:nav", () => {
  drawer.open = !drawer.open;
});

// if (this._sidebarPanel === true) {
//   sidebarPanel(false);
// } else {
//   sidebarPanel(true);
// }
// console.log("drawer = open");

const iconPrint = new MDCRipple(
  document.querySelector(".mdc-icon-button-print")
);

iconPrint.unbounded = true;

iconPrint.listen("click", () => {
  window.print();
});
