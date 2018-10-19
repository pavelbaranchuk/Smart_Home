import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCRipple } from "@material/ripple";

export default class View {
  constructor(root) {
    // this._model = model;
    this._root = root;
  }
  render() {
    root.innerText = "";

    let bodyTag = document.getElementsByTagName("body");
    bodyTag[0].classList.add("page");

    let sidebar = document.createElement("aside");
    sidebar.classList.add(
      "mdc-drawer",
      "mdc-drawer__content",
      "mdc-drawer--dismissible"
    );

    let sidebar_list = document.createElement("div");
    sidebar_list.classList.add("mdc-list");

    // Creating home section link for left sidebar
    let sidebar_home_section = document.createElement("a");
    sidebar_home_section.classList.add("mdc-list-item", "mdc-list-home");
    sidebar_home_section.href = "#home";

    let sidebar_home_icon = document.createElement("i");
    sidebar_home_icon.classList.add("material-icons", "mdc-list-item__graphic");
    sidebar_home_icon.innerText = "home";

    let sidebar_home_span = document.createElement("span");
    sidebar_home_span.classList.add("mdc-list-item__text");
    sidebar_home_span.innerText = "Start page";

    // Creating Your Devices section link for left sidebar
    let sidebar_devices_section = document.createElement("a");
    sidebar_devices_section.classList.add("mdc-list-item", "mdc-list-devices");
    sidebar_devices_section.href = "#devices";

    let sidebar_devices_icon = document.createElement("i");
    sidebar_devices_icon.classList.add(
      "material-icons",
      "mdc-list-item__graphic"
    );
    sidebar_devices_icon.innerText = "dashboard";

    let sidebar_devices_span = document.createElement("span");
    sidebar_devices_span.classList.add("mdc-list-item__text");
    sidebar_devices_span.innerText = "Your Devices";

    // Creating author section link for left sidebar
    let sidebar_author_section = document.createElement("a");
    sidebar_author_section.classList.add("mdc-list-item", "mdc-list-author");
    sidebar_author_section.href = "#author";

    let sidebar_author_icon = document.createElement("i");
    sidebar_author_icon.classList.add(
      "material-icons",
      "mdc-list-item__graphic"
    );
    sidebar_author_icon.innerText = "person";

    let sidebar_author_span = document.createElement("span");
    sidebar_author_span.classList.add("mdc-list-item__text");
    sidebar_author_span.innerText = "Author";

    //Attaching sidebar section to root
    root.appendChild(sidebar);
    sidebar.appendChild(sidebar_list);
    sidebar_list.appendChild(sidebar_home_section);
    sidebar_home_section.appendChild(sidebar_home_icon);
    sidebar_home_section.appendChild(sidebar_home_span);

    sidebar_list.appendChild(sidebar_devices_section);
    sidebar_devices_section.appendChild(sidebar_devices_icon);
    sidebar_devices_section.appendChild(sidebar_devices_span);

    sidebar_list.appendChild(sidebar_author_section);
    sidebar_author_section.appendChild(sidebar_author_icon);
    sidebar_author_section.appendChild(sidebar_author_span);

    //Creating Top App Bar
    let header = document.createElement("div");
    header.classList.add("mdc-drawer-app-content");

    let header_wrapper = document.createElement("header");
    header_wrapper.classList.add("mdc-top-app-bar", "app-bar");
    header_wrapper.setAttribute("id", "app-bar");

    let header_row = document.createElement("div");
    header_row.classList.add("mdc-top-app-bar__row");

    root.appendChild(header);
    header.appendChild(header_wrapper);
    header_wrapper.appendChild(header_row);

    // Adding page title
    let header_title = document.createElement("section");
    header_title.classList.add(
      "mdc-top-app-bar__section",
      "mdc-top-app-bar__section--align-start"
    );

    let header_title_link = document.createElement("a");
    header_title_link.classList.add(
      "material-icons",
      "mdc-top-app-bar__navigation-icon"
    );
    // header_title_link.href = "";
    header_title_link.innerText = "menu";

    let header_title_span = document.createElement("span");
    header_title_span.classList.add("mdc-top-app-bar__title");
    header_title_span.innerText = "Smart House";

    header_row.appendChild(header_title);
    header_title.appendChild(header_title_link);
    header_title.appendChild(header_title_span);

    //Adding buttons to the header
    let header_button = document.createElement("div");
    header_button.classList.add("device__wrapper");

    header_row.appendChild(header_button);

    //First button
    let header_button_left_wrapper = document.createElement("div");
    header_button_left_wrapper.classList.add("mdc-menu-surface--anchor");

    let header_button_left = document.createElement("button");
    header_button_left.classList.add(
      "mdc-button",
      "mdc-button-left",
      "mdc-button--raised"
    );
    header_button_left.innerText = "List of your devices";

    let header_button_left_menu = document.createElement("div");
    header_button_left_menu.classList.add("mdc-menu-left", "mdc-menu-surface");

    let header_button_list = document.createElement("ul");
    header_button_list.classList.add("mdc-list");

    let header_button_list_link_light = document.createElement("a");
    header_button_list_link_light.classList.add("mdc-list-item", "list__light");
    header_button_list_link_light.href = "";

    let header_button_list_span_light = document.createElement("span");
    header_button_list_span_light.classList.add("mdc-list-item__text");
    header_button_list_span_light.innerText = "Light";

    let header_button_list_link_tv = document.createElement("a");
    header_button_list_link_tv.classList.add("mdc-list-item", "list__tv");
    header_button_list_link_tv.href = "";

    let header_button_list_span_tv = document.createElement("span");
    header_button_list_span_tv.classList.add("mdc-list-item__text");
    header_button_list_span_tv.innerText = "TV";

    let header_button_list_link_coffee = document.createElement("a");
    header_button_list_link_coffee.classList.add(
      "mdc-list-item",
      "list__coffee"
    );
    header_button_list_link_coffee.href = "";

    let header_button_list_span_coffee = document.createElement("span");
    header_button_list_span_coffee.classList.add("mdc-list-item__text");
    header_button_list_span_coffee.innerText = "Coffee Machine";

    header_button.appendChild(header_button_left_wrapper);
    header_button_left_wrapper.appendChild(header_button_left);
    header_button_left_wrapper.appendChild(header_button_left_menu);
    header_button_left_menu.appendChild(header_button_list);
    header_button_list.appendChild(header_button_list_link_light);
    header_button_list_link_light.appendChild(header_button_list_span_light);
    header_button_list.appendChild(header_button_list_link_tv);
    header_button_list_link_tv.appendChild(header_button_list_span_tv);
    header_button_list.appendChild(header_button_list_link_coffee);
    header_button_list_link_coffee.appendChild(header_button_list_span_coffee);

    //Second button
    let header_button_right_wrapper = document.createElement("div");
    header_button_right_wrapper.classList.add("mdc-menu-surface--anchor");

    let header_button_right = document.createElement("button");
    header_button_right.classList.add(
      "mdc-button",
      "mdc-button-right",
      "mdc-button--raised"
    );
    header_button_right.innerText = "Add new device";

    let header_button_right_menu = document.createElement("div");
    header_button_right_menu.classList.add(
      "mdc-menu-right",
      "mdc-menu-surface"
    );

    let header_button_right_list = document.createElement("ul");
    header_button_right_list.classList.add("mdc-list");

    let header_button_right_list_link_light = document.createElement("a");
    header_button_right_list_link_light.classList.add("mdc-list-item");
    header_button_right_list_link_light.href = "";

    let header_button_right_list_span_light = document.createElement("span");
    header_button_right_list_span_light.classList.add("mdc-list-item__text");
    header_button_right_list_span_light.innerText = "Light";

    let header_button_right_list_link_tv = document.createElement("a");
    header_button_right_list_link_tv.classList.add("mdc-list-item");
    header_button_right_list_link_tv.href = "";

    let header_button_right_list_span_tv = document.createElement("span");
    header_button_right_list_span_tv.classList.add("mdc-list-item__text");
    header_button_right_list_span_tv.innerText = "TV";

    let header_button_right_list_link_coffee = document.createElement("a");
    header_button_right_list_link_coffee.classList.add("mdc-list-item");
    header_button_right_list_link_coffee.href = "";

    let header_button_right_list_span_coffee = document.createElement("span");
    header_button_right_list_span_coffee.classList.add("mdc-list-item__text");
    header_button_right_list_span_coffee.innerText = "Coffee Machine";

    header_button.appendChild(header_button_right_wrapper);
    header_button_right_wrapper.appendChild(header_button_right);
    header_button_right_wrapper.appendChild(header_button_right_menu);
    header_button_right_menu.appendChild(header_button_right_list);
    header_button_right_list.appendChild(header_button_right_list_link_light);
    header_button_right_list_link_light.appendChild(
      header_button_right_list_span_light
    );
    header_button_right_list.appendChild(header_button_right_list_link_tv);
    header_button_right_list_link_tv.appendChild(
      header_button_right_list_span_tv
    );
    header_button_right_list.appendChild(header_button_right_list_link_coffee);
    header_button_right_list_link_coffee.appendChild(
      header_button_right_list_span_coffee
    );

    //Adding print icon to the header
    let header_print = document.createElement("section");
    header_print.classList.add(
      "mdc-top-app-bar__section",
      "mdc-top-app-bar__section--align-end"
    );

    let header_print_button = document.createElement("button");
    header_print_button.classList.add(
      "mdc-icon-button",
      "mdc-icon-button-print",
      "material-icons"
    );
    header_print_button.innerText = "print";

    header_row.appendChild(header_print);
    header_print.appendChild(header_print_button);

    //Author page----------------------------------------------
    let author = document.createElement("main");
    author.classList.add("main-content", "main-author", "mdc-hidden");
    author.setAttribute("id", "main-content");

    let author_wrapper = document.createElement("div");
    author_wrapper.classList.add(
      "mdc-top-app-bar--fixed-adjust",
      "author__wrapper"
    );

    let author_title = document.createElement("h2");
    author_title.classList.add("author__title");
    author_title.innerText = "Made by Pavlo";

    let author_image = document.createElement("img");
    author_image.classList.add("author__image");
    author_image.setAttribute("src", "../assets/img/ava.jpg");

    let author_info = document.createElement("p");
    author_info.classList.add("author__info");
    author_info.innerText = "©2018 Smart House. All Rights Reserved.";

    root.appendChild(author);
    author.appendChild(author_wrapper);
    author_wrapper.appendChild(author_title);
    author_wrapper.appendChild(author_image);
    author_wrapper.appendChild(author_info);

    //JS functions for Top App Bar and for Drawer
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById("app-bar"));
    topAppBar.setScrollTarget(document.getElementById("main-content"));
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });

    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

    const iconPrint = new MDCRipple(
      document.querySelector(".mdc-icon-button-print")
    );

    iconPrint.unbounded = true;

    iconPrint.listen("click", () => {
      window.print();
    });

    //Start page

    let start = document.createElement("main");
    start.classList.add("main-content", "main-home", "mdc-hidden");
    start.setAttribute("id", "main-content");

    let start_main = document.createElement("div");
    start_main.classList.add("mdc-top-app-bar--fixed-adjust");

    let start_wrapper = document.createElement("div");
    start_wrapper.classList.add("button-wrapper__start");

    let start_image = document.createElement("img");
    start_image.classList.add("start__image");
    start_image.setAttribute("src", "../assets/img/smart.png");

    let start_input_wrapper = document.createElement("div");
    start_input_wrapper.classList.add(
      "mdc-text-field",
      "mdc-text-field--textarea",
      "mdc-text-field--fullwidth",
      "mdc-text-field--disabled"
    );

    let start_input = document.createElement("input");
    start_input.classList.add("button-wrapper__start");
    start_input.setAttribute("type", "text");
    start_input.setAttribute("id", "text-field-fullwidth-textarea");

    let start_btn_wrapper = document.createElement("div");
    start_btn_wrapper.classList.add(
      "mdc-menu-surface--anchor",
      "mdc-button-general__wrapper"
    );

    let start_btn = document.createElement("button");
    start_btn.classList.add(
      "mdc-button",
      "mdc-button-general",
      "mdc-button--raised"
    );
    start_btn.innerText = "General information";

    let start_button_menu = document.createElement("div");
    start_button_menu.classList.add("mdc-menu-general", "mdc-menu-surface");

    let start_button_list = document.createElement("ul");
    start_button_list.classList.add("mdc-list");

    let start_button_list_link_address = document.createElement("li");
    start_button_list_link_address.classList.add("mdc-list-item");

    let start_button_list_span_address = document.createElement("span");
    start_button_list_span_address.classList.add("mdc-list-item__text");
    start_button_list_span_address.innerText = "Get Home address";

    let start_button_list_link_devices = document.createElement("li");
    start_button_list_link_devices.classList.add("mdc-list-item");

    let start_button_list_span_devices = document.createElement("span");
    start_button_list_span_devices.classList.add("mdc-list-item__text");
    start_button_list_span_devices.innerText = "Get List of all devices";

    let start_button_list_link_owner = document.createElement("li");
    start_button_list_link_owner.classList.add("mdc-list-item");

    let start_button_list_span_owner = document.createElement("span");
    start_button_list_span_owner.classList.add("mdc-list-item__text");
    start_button_list_span_owner.innerText = "Get owner name";

    root.appendChild(start);
    start.appendChild(start_main);
    start_main.appendChild(start_wrapper);
    start_wrapper.appendChild(start_image);
    start_wrapper.appendChild(start_input_wrapper);
    start_input_wrapper.appendChild(start_input);

    start_wrapper.appendChild(start_btn_wrapper);
    start_btn_wrapper.appendChild(start_btn);
    start_wrapper.appendChild(start_button_menu);
    start_button_menu.appendChild(start_button_list);
    start_button_list.appendChild(start_button_list_link_address);
    start_button_list_link_address.appendChild(start_button_list_span_address);
    start_button_list_span_address.appendChild(start_button_list_link_devices);
    start_button_list_link_devices.appendChild(start_button_list_span_devices);
    start_button_list_span_devices.appendChild(start_button_list_link_owner);
    start_button_list_link_owner.appendChild(start_button_list_span_owner);

    //Main-devices section
    let devices = document.createElement("div");
    devices.classList.add(
      "main-devices",
      "main-content",
      "main",
      "mdc-top-app-bar--fixed-adjust"
    );
    devices.setAttribute("id", "main-content");

    root.appendChild(devices);
  }
}
