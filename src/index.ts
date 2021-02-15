import { Options, App } from "@4site/engrid-common";
import "./sass/main.scss";

const options: Options = {
  ModalDebug: true,
  applePay: false,
  CapitalizeFields: false,
  ClickToExpand: true,
  onLoad: () => console.log("Starter Theme Loaded"),
  onResize: () => console.log("Starter Theme Window Resized"),
  submitLabel: "Give"
};
new App(options);