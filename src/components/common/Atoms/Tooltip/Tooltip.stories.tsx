import React from 'react'
import { Tooltip } from './Tooltip'
import { Meta, StoryFn } from '@storybook/react'
import { TooltipProps } from './Tooltip.types'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text' },
    sideOffset: { control: 'number' },
    children: { control: 'text' }
  }
} as Meta

const Template: StoryFn<TooltipProps> = args => (
  <Tooltip {...args}>
    <div className="w-fit">sadf</div>
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {
  content: 'This is a Tooltip'
}

export const WithCustomSideOffset = Template.bind({})
WithCustomSideOffset.args = {
  content: 'This Tooltip has a custom offset',
  sideOffset: 10
}

export const WithoutContent = Template.bind({})
WithoutContent.args = {
  content: ''
}
