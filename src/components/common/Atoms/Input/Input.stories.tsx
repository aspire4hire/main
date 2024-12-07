import { Meta, StoryFn } from '@storybook/react'
import { Input } from './Input'
import { InputProps } from './Input.types'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    type: {
      control: { type: 'text' }
    },
    hasError: {
      control: { type: 'boolean' }
    },
    className: {
      control: { type: 'text' }
    }
  }
}
export default meta

const Template: StoryFn<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Input label',
  placeholder: 'This is placeholder',
  type: 'text'
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Input label',
  placeholder: 'This is placeholder',
  type: 'text',
  hasError: true
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  type: 'text'
}
