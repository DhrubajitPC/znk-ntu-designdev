import { html, customElement, css, LitElement } from "lit-element";

@customElement("nav-header")
export class NavHeader extends LitElement {
  static getStyles() {
    return css`
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav {
        list-style: none;
        display: flex;
        align-items: center;
      }
      li {
        padding: 0 20px;
        cursor: pointer;
      }
      li:hover {
        text-decoration: underline;
      }
      .navbar-title {
        font-family: Manjari;
        font-weight: bold;
        font-size: 28px;
      }
    `;
  }

  render() {
    return html`
      <div class="navbar">
        <h2 class="navbar-title">Flip for Joy</h2>
        <ul class="nav">
          <li><img src="/static/search-icon.svg" alt="search" /></li>
          <li>Store</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li><img src="/static/cart-icon.svg" alt="cart" /></li>
        </ul>
      </div>
    `;
  }
}
