import { html, customElement, css, LitElement, property } from "lit-element";

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
      }
      li {
        padding: 0 10px;
        cursor: pointer;
      }
      li:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <div class="navbar">
        <h2 class="navbar-title">Flip for Joy</h2>
        <ul class="nav">
          <li>Search</li>
          <li>Store</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    `;
  }
}
