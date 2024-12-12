import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Selector } from './Select'
import { SelectorProps } from './Select.types'

export default {
  title: 'Components/Selector',
  component: Selector,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    hasError: { control: 'boolean' },
    label: { control: 'text' },
    onValueChange: { action: 'onValueChange' }
  }
} as Meta

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]
const name = 'selector'

const Template: StoryFn<SelectorProps> = args => <Selector {...args} />

export const Default = Template.bind({})
Default.args = {
  options,
  name,
  placeholder: 'Select an option',
  label: 'Default Selector'
}

export const WithError = Template.bind({})
WithError.args = {
  options,
  name,
  placeholder: 'Select an option',
  label: 'Selector with Error',
  error: 'This field is required'
}

export const PreSelected = Template.bind({})
PreSelected.args = {
  options,
  name,
  value: 'option2',
  placeholder: 'Select an option',
  label: 'Pre-selected Selector'
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  options,
  name,
  placeholder: 'Select an option'
}
