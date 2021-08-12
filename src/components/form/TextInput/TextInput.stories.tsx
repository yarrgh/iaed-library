import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "Forms/TextInput",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Text = Template.bind({});
Text.args = {
  name: "textInput",
  label: "Text Field",
  type: "text",
};

export const Required = Template.bind({});
Required.args = {
  name: "textInput",
  label: "Label",
  type: "text",
  required: true,
};

export const Password = Template.bind({});
Password.args = {
  name: "textInput",
  label: "Password Field",
  type: "password",
  required: true,
};

export const Email = Template.bind({});
Email.args = {
  name: "textInput",
  label: "Email Field",
  type: "email",
  required: true,
};
