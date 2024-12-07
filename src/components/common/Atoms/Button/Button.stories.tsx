import { Button } from "./Button";
import { ButtonProps } from "./Button.types";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "sm",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "sm",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  size: "sm",
  disabled: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "sm",
};

export const Loading = Template.bind({});
Loading.args = {
  variant: "default",
  isLoading: true,
};
export const fullWidth = Template.bind({});
fullWidth.args = {
  variant: "default",
  isLoading: true,
  fullWidth: true,
};
