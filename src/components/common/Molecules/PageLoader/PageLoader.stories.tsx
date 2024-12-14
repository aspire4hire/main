// src/components/PageLoader.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { PageLoader, PageLoaderProps } from "./PageLoader";

export default {
  title: "Components/PageLoader",
  component: PageLoader,
} as Meta;

const Template: StoryFn<PageLoaderProps> = (args) => <PageLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Cargando...",
};

export const WithoutMessage = Template.bind({});
WithoutMessage.args = {};
