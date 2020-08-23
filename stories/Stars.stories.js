import "../components/stars";
import { storiesOf } from "@storybook/web-components";
import { html } from "lit-html";
import "../style.css";

storiesOf("Stars", module)
  .add("Ratings 2.4", () => html` <star-ratings rating="2.4" />`)
  .add("Ratings 5", () => html`<star-ratings rating="5" />`);
