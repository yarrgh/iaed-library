import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";
import { Button } from "../Button";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  // argTypes: {
  //   variant: { control: "inline-radio", defaultValue: "primary" },
  //   type: { control: "inline-radio", defaultValue: "button" },
  //   size: { control: "select", defaultValue: "medium" },
  //   href: {
  //     defaultValue: "",
  //   },
  //   active: { defaultValue: false },
  //   disabled: { defaultValue: false },
  //   disableMobileFullWidth: { defaultValue: false },
  // },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    {/* <Dropdown.Trigger>
      <span>sdfsdfsdfsdf</span>
    </Dropdown.Trigger> */}
    {/* <Dropdown.Menu>
      <div>
        <h1>sdfsdfsdf</h1>
        <p>sdfsdfsdf</p>
      </div>
    </Dropdown.Menu> */}
  </Dropdown>
);

export const Primary = Template.bind({});
Primary.args = {};
export const Primary2 = Template.bind({});
Primary2.args = {};
