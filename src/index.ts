import { Options, App } from "@4site/engrid-common"; // Uses ENGrid via NPM
// import { Options, App } from "../../engrid-scripts/packages/common"; // Uses ENGrid via Visual Studio Workspace
import "./sass/main.scss";
import "./scripts/main";
import "./scripts/checkbox.persist";
import "./scripts/pagedataReplace";

const options: Options = {
  ModalDebug: true,
  applePay: false,
  CapitalizeFields: true,
  ClickToExpand: true,
  CurrencySymbol: "$",
  CurrencySeparator: ".",
  MediaAttribution: true,
  SkipToMainContentLink: true,
  SrcDefer: true,
  onLoad: () => console.log("Starter Theme Loaded"),
  onResize: () => console.log("Starter Theme Window Resized"),
};
new App(options);
