import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemProvierStorybook } from '../src/lib/index'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    Story => {
      return React.createElement(ThemProvierStorybook, {
        children: React.createElement(Story)
      })
    }
  ]
}

export default preview
