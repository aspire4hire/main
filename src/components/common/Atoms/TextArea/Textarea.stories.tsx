import React from 'react'
import { TextareaProps } from './Textarea.types'
import { Textarea } from './TextArea'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    hasError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' }
  }
} as Meta

const Template: StoryFn<TextareaProps> = args => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default Textarea',
  placeholder: 'Type something...',
  error: 'error'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Textarea with Error',
  placeholder: 'Type something...',
  error: 'error'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Textarea',
  placeholder: 'Cannot type here...',
  error: 'error',
  disabled: true
}
