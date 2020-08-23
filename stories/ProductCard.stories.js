import "../components/productcard";
import { storiesOf } from "@storybook/web-components";
import { html } from "lit-html";
import "../style.css";
import img from "./hedgehugs.svg";

console.log(img);
storiesOf("Product Card", module).add(
  "Some Book Card",
  () =>
    html` <product-card
      title="Mock Title"
      description="some description"
      price="9.99"
      reviewCount="111"
      image=${img}
      rating="2.4"
    />`
);
