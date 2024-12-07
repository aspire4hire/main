import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  subcomponents: { RadioGroupItem }
} as Meta

const Template: StoryFn = args => (
  <RadioGroup {...args}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option1" id="option1" />
      <label htmlFor="option1" className="text-sm">
        Option 1
      </label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option2" id="option2" />
      <label htmlFor="option2" className="text-sm">
        Option 2
      </label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option3" id="option3" />
      <label htmlFor="option3" className="text-sm">
        Option 3
      </label>
    </div>
  </RadioGroup>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'option1',
  className: 'space-y-2'
}

export const DisabledOptions: StoryFn = args => (
  <RadioGroup {...args}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option1" id="option1" disabled />
      <label htmlFor="option1" className="text-sm text-muted-foreground">
        Disabled Option 1
      </label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option2" id="option2" />
      <label htmlFor="option2" className="text-sm">
        Option 2
      </label>
    </div>
  </RadioGroup>
)
DisabledOptions.args = {
  defaultValue: 'option2',
  className: 'space-y-2'
}

export const CustomStyles: StoryFn = args => (
  <RadioGroup {...args}>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option1" id="option1" className="border-red-500" />
      <label htmlFor="option1" className="text-sm">
        Custom Option 1
      </label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem
        value="option2"
        id="option2"
        className="border-green-500"
      />
      <label htmlFor="option2" className="text-sm">
        Custom Option 2
      </label>
    </div>
  </RadioGroup>
)
CustomStyles.args = {
  defaultValue: 'option1',
  className: 'space-y-2'
}
