import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputWrapper } from "./InputWrapper";

export default {
  title: "Forms/InputWrapper",
  component: InputWrapper,
  argTypes: {},
} as ComponentMeta<typeof InputWrapper>;

const Template: ComponentStory<typeof InputWrapper> = (args) => (
  <InputWrapper {...args}>
    This can be anything you want to have a label and an optional border and
    padding
  </InputWrapper>
);

export const Wrapper = Template.bind({});
Wrapper.args = {
  label: "Custom input",
  required: true,
  withPadding: true,
  withBorder: true,
};
