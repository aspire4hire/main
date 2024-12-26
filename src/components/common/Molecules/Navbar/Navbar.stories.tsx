import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  ComunityIcon,
  IconSizeEnum,
  MessageIcon,
  NavbarProps,
  ResourcesIcon
} from '@/components'
import { Navbar } from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {}
} as Meta

// Template to render the Navbar component with passed args
const Template: StoryFn<NavbarProps> = args => <Navbar {...args} />

// Default Navbar
export const Default = Template.bind({})
Default.args = {
  items: [
    {
      href: '/home',
      icon: { element: ResourcesIcon, size: IconSizeEnum['2XS'] },
      title: 'Home'
    },
    {
      href: '/profile',
      icon: { element: ComunityIcon, size: IconSizeEnum['2XS'] },
      title: 'Profile'
    }
  ]
}

// Navbar with custom items
export const CustomItems = Template.bind({})
CustomItems.args = {
  items: [
    {
      href: '/dashboard',
      icon: { element: ResourcesIcon, size: IconSizeEnum.LG },
      title: 'Dashboard'
    },
    {
      href: '/settings',
      icon: { element: ComunityIcon, size: IconSizeEnum.LG },
      title: 'Settings'
    },
    {
      href: '/help',
      icon: { element: MessageIcon, size: IconSizeEnum.LG },
      title: 'Help'
    }
  ]
}
