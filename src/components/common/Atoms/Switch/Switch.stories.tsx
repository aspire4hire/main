import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled'
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description: 'Callback for switch state change'
    }
  }
} as Meta

const Template: StoryFn<
  React.ComponentPropsWithoutRef<typeof Switch>
> = args => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const CheckedAndDisabled = Template.bind({})
CheckedAndDisabled.args = {
  checked: true,
  disabled: true
}
