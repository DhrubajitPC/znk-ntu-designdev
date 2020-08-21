import { LitElement, html, property, customElement } from "lit-element";
import "./components/productcard";
import data from "./assets/data.json";

import image from "url:./assets/thepowerofone.svg";

@customElement("container-element")
export class ContainerElement extends LitElement {
  @property() name = "World";
  constructor() {
    super();
    const { title, description, price, rating, img, reviewCount } = data[0];
    this.title = title;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.reviewCount = reviewCount;
    this.img = image;
  }

  render() {
    return html`<product-card
      title="${this.title}"
      description="${this.description}"
      price="${this.price}"
      rating="${this.rating}"
      image="${this.img}"
      reviewCount="${this.reviewCount}"
    ></product-card> `;
  }
}
