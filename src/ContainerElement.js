import { LitElement, html, css, customElement } from "lit-element";
import "./components/productcard";
import data from "./data.json";

@customElement("container-element")
export class ContainerElement extends LitElement {
  constructor() {
    super();
    this.data = data.map((d) => {
      return {
        ...d,
        img: "/assets/" + d.img,
      };
    });
  }

  static get styles() {
    return css`
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 16px;
        row-gap: 16px;
      }
    `;
  }

  render() {
    console.log(this.data);
    return html`<div class="container">
      ${this.data.map(
        (d) => html`<product-card
          title="${d.title}"
          description="${d.description}"
          price="${d.price}"
          rating="${d.rating}"
          image="${d.img}"
          reviewCount="${d.reviewCount}"
        ></product-card>`
      )}
    </div>`;
  }
}
