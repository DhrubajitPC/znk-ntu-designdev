import { LitElement, html, css, property, customElement } from "lit-element";
import "./stars";
import "./card";
import "./button";

@customElement("product-card")
export class SimpleGreeting extends LitElement {
  @property() title;
  @property() description;
  @property() price;
  @property() rating;
  @property() description;
  @property() reviewCount;
  @property() image;

  static get properties() {
    return {
      showDescription: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.showDescription = false;
  }

  static get styles() {
    return css`
      .img {
        height: 300px;
        width: 300px;
      }

      .title {
        font-size: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .price {
        display: flex;
        font-size: 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .body {
        padding: 15px;
      }

      .hidden {
        display: none;
      }

      .toggle {
        color: var(--btn-primary-text);
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <card-element>
        <img slot="image" class="img" src="${this.image}" alt="book cover" />
        <div slot="body" class="body">
          <h5 class="title">${this.title}</h5>
          <div>
            <span><star-ratings rating=${this.rating}></star-ratings></span>
            <span>(${this.reviewCount})</span>
          </div>
          <div class="price">
            <p>SG$${this.price}</p>
            <span class="toggle" @click="${() => {
              this.showDescription = !this.showDescription;
            }}""
              >Quick Look</span
            >
          </div>
          <div class="${!this.showDescription && "hidden"}">
            <p>
              ${this.description}
            </p>
            <button-element>Add to Cart</button-element
            >
          </div>
        </div>
      </card-element>
    `;
  }
}
