import { LitElement, css, html, property, customElement } from "lit-element";

@customElement("card-element")
export class Card extends LitElement {
  static get styles() {
    return css`
      .card {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 296px;
        margin-bottom: 20px;
      }
    `;
  }

  render() {
    return html`<div class="card">
      <slot name="image"></slot>
      <slot name="body"></slot>
    </div>`;
  }
}
