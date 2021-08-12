import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: { control: "inline-radio", defaultValue: "primary" },
    type: { control: "inline-radio", defaultValue: "button" },
    size: { control: "select", defaultValue: "medium" },
    href: {
      defaultValue: "",
    },
    active: { defaultValue: false },
    disabled: { defaultValue: false },
    disableMobileFullWidth: { defaultValue: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "medium",
  onClick: () => alert("You clicked the button"),
};

export const Accent = Template.bind({});
Accent.args = {
  variant: "accent",
  size: "medium",
  onClick: () => alert("You clicked the button"),
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  onClick: () => alert("You clicked the button"),
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  onClick: () => alert("You clicked the button"),
};

export const Link = Template.bind({});
Link.args = {
  href: "https://google.com",
};
