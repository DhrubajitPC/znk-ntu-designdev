import { LitElement, css, html, property, customElement } from "lit-element";

@customElement("star-ratings")
export class StarRatings extends LitElement {
  @property() rating = 0;
  @property() size = "30px";

  static get styles() {
    return css`
      .stars {
        --star-size: 30px;
        --star-color: #fff;
        --star-background: #fc0;
        --percent: calc(var(--rating) / 5 * 100%);

        display: inline-block;
        font-size: var(--star-size);
        font-family: Times;
        line-height: 1;
      }
      .stars::before {
        content: "★★★★★";
        letter-spacing: 3px;
        background: linear-gradient(
          90deg,
          var(--star-background) var(--percent),
          var(--star-color) var(--percent)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
  }

  render() {
    return html`<div
      class="stars"
      style="--rating: ${this.rating};"
      aria-label="Rating of this product is ${this.rating} out of 5."
    ></div>`;
  }
}
