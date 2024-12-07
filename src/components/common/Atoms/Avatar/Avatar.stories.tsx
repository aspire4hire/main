import { Meta, StoryFn } from '@storybook/react'
import { Avatar } from './Avatar'
import { AvatarSizeEnum } from './enums'
import { AvatarProps } from './Avatar.types'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(AvatarSizeEnum), // XS, MD, LG
      description: 'Controla el tamaño del Avatar.'
    },
    src: {
      control: { type: 'text' },
      description: 'URL de la imagen para el Avatar.'
    },
    className: {
      control: { type: 'text' },
      description: 'Clase CSS adicional para personalizar el estilo.'
    }
  }
}
export default meta

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  size: AvatarSizeEnum.MD,
  src: 'https://cdn.pixabay.com/photo/2024/07/22/17/11/elegance-in-profile-8913207_640.png'
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: AvatarSizeEnum.XS,
  src: 'https://cdn.pixabay.com/photo/2024/07/22/17/11/elegance-in-profile-8913207_640.png'
}

export const Large = Template.bind({})
Large.args = {
  size: AvatarSizeEnum.LG,
  src: 'https://cdn.pixabay.com/photo/2024/07/22/17/11/elegance-in-profile-8913207_640.png'
}

export const WithError = Template.bind({})
WithError.args = {
  size: AvatarSizeEnum.MD,
  src: 'asdf'
}

export const NoImage = Template.bind({})
NoImage.args = {
  size: AvatarSizeEnum.MD
}
