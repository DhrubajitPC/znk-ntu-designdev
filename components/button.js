import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("button-element")
export class Button extends LitElement {
  static get styles() {
    return css`
      .btn {
        background: #f2eef9;
        border-radius: 12px;
        color: #7e57c2;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`<button class="btn"><slot /></button>`;
  }
}
