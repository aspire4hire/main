import React from 'react'
import { Typography } from './Typography'
import { Meta, StoryFn } from '@storybook/react'
import { TypographyProps } from './Typography.types'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'body1',
        'body2'
      ]
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right']
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'bold']
    },
    className: { control: 'text' },
    children: { control: 'text' }
  }
} as Meta

// Template to render the Typography component with passed args
const Template: StoryFn<TypographyProps> = args => (
  <Typography {...args}>{args.children}</Typography>
)

// Default Typography with 'p' variant
export const Default = Template.bind({})
Default.args = {
  variant: 'p',
  children: 'This is a paragraph with default settings.',
  align: 'left',
  weight: 'regular'
}

// Header Variants (h1 to h6)
export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  children: 'This is an H1 header',
  align: 'center',
  weight: 'bold'
}

export const H2 = Template.bind({})
H2.args = {
  variant: 'h2',
  children: 'This is an H2 header',
  align: 'center',
  weight: 'regular'
}

export const H3 = Template.bind({})
H3.args = {
  variant: 'h3',
  children: 'This is an H3 header',
  align: 'left',
  weight: 'light'
}

export const H4 = Template.bind({})
H4.args = {
  variant: 'h4',
  children: 'This is an H4 header',
  align: 'right',
  weight: 'bold'
}

export const H5 = Template.bind({})
H5.args = {
  variant: 'h5',
  children: 'This is an H5 header',
  align: 'left',
  weight: 'light'
}

export const H6 = Template.bind({})
H6.args = {
  variant: 'h6',
  children: 'This is an H6 header',
  align: 'right',
  weight: 'regular'
}

// Body Text Variants (body1, body2)
export const Body1 = Template.bind({})
Body1.args = {
  variant: 'body1',
  children: 'This is body1 text with a specific color.',
  align: 'left',
  weight: 'regular'
}

export const Body2 = Template.bind({})
Body2.args = {
  variant: 'body2',
  children: 'This is body2 text with a smaller font size.',
  align: 'left',
  weight: 'light'
}

// Span Example
export const SpanText = Template.bind({})
SpanText.args = {
  variant: 'span',
  children: 'This is some span text.',
  align: 'left',
  weight: 'regular'
}
