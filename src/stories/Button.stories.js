import { storiesOf } from "@storybook/web-components";
import { html } from "lit-html";
import "../../public/style.css";
import "../components/button";

storiesOf("Button", module).add(
  "Primary button",
  () => html` <button-element>Click Me</button-element> `
);
