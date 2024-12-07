import { Meta, StoryFn } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from './Checkbox.types'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    className: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
}
export default meta

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox label'
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true
}
