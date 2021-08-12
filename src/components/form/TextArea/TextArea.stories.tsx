import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./TextArea";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Text = Template.bind({});
Text.args = {
  name: "textArea",
  label: "Text Field",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  name: "textInput",
  label: "Label",
  required: false,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  name: "textInput",
  label: "Label",
  required: false,
  size: "large",
};

export const XLarge = Template.bind({});
XLarge.args = {
  name: "textInput",
  label: "Label",
  required: false,
  size: "xlarge",
};
