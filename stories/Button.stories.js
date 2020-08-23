import "../components/button";
import { storiesOf } from "@storybook/web-components";
import { html } from "lit-html";
import "../style.css";

storiesOf("Button", module).add(
  "Primary button",
  () => html` <button-element>Click Me</button-element> `
);
// export default {
//   title: "Example/Button",
// };

// const Template = () => Button();

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
