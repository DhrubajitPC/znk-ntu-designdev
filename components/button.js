import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("button-element")
export class Button extends LitElement {
  static get styles() {
    return css`
      .btn {
        background: var(--btn-primary-bg);
        border-radius: 12px;
        color: var(--btn-primary-text);
        border: none;
        padding: 8px 16px;
        cursor: pointer;
        font-weight: bold;
      }
    `;
  }

  render() {
    return html`<button class="btn">
      <slot />
    </button>`;
  }
}
