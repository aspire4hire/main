import React, { useState } from 'react'
import { Tabs, TabsProps } from './Tabs'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/Tabs',
  component: Tabs
} as Meta<typeof Tabs>

const Template: StoryFn<TabsProps> = args => {
  const [activeTasb, setActiveTasb] = useState<string>('tab-1')
  const itmes = {
    items: [
      {
        title: 'Tab 1',
        id: 'tab-1',
        onClick: (id: string) => setActiveTasb(id)
      },
      {
        title: 'Tab 2',
        id: 'tab-2',
        onClick: (id: string) => setActiveTasb(id)
      },
      {
        title: 'Tab 3',
        id: 'tab-3',
        onClick: (id: string) => setActiveTasb(id)
      }
    ],
    activeTabId: 'tab-1'
  }

  return <Tabs items={itmes.items} activeTabId={activeTasb} />
}

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      title: 'Tab 1',
      id: 'tab-1',
      onClick: () => console.log('Tab 1 clicked')
    },
    {
      title: 'Tab 2',
      id: 'tab-2',
      onClick: () => console.log('Tab 2 clicked')
    },
    {
      title: 'Tab 3',
      id: 'tab-3',
      onClick: () => console.log('Tab 3 clicked')
    }
  ],
  activeTabId: 'tab-1'
}

export const WithCustomTitles = Template.bind({})
WithCustomTitles.args = {
  items: [
    {
      title: 'Tab 1',
      id: 'tab-1',
      onClick: () => console.log('Tab 1 clicked')
    },
    {
      title: 'Tab 2',
      id: 'tab-2',
      onClick: () => console.log('Tab 2 clicked')
    },
    {
      title: 'Tab 3',
      id: 'tab-3',
      onClick: () => console.log('Tab 3 clicked')
    }
  ],
  activeTabId: 'tab-1'
}
