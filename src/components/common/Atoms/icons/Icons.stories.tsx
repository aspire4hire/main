/* eslint-disable react/jsx-key */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ArrowLeftIcon } from './ArrowLeftIcon'
import { ArrowRightIcon } from './ArrowRightIcon'
import { AttachIcon } from './AttachIcon'
import { CalendarIcon } from './CalendarIcon'
import { CheckIcon } from './CheckIcon'
import { CloseIcon } from './CloseIcon'
import { EditIcon } from './EditIcon'
import { ExchangeIcon } from './ExchangeIcon'
import { ExportIcon } from './ExportIcon'
import { LogoutIcon } from './LogoutIcon'
import { MenuIcon } from './MenuIcon'
import { NewMessageIcon } from './NewMessageIcon'
import { NotificationIcon } from './NotificationIcon'
import { PinIcon } from './PinIcon'
import { PlusIcon } from './PlusIcon'
import { SearchIcon } from './SearchIcon'
import { ThreeDotIcon } from './ThreeDotIcon'
import { UploadIcon } from './UploadIcon'
import { ComunityIcon } from './ComunityIcon'
import { ResourcesIcon } from './ResourcesIcon'
import { MessageIcon } from './MessageIcon'
import { ProfileIcon } from './ProfileIcon'
import { IconSizeEnum } from './types'
import { Tooltip } from '../Tooltip'

export default {
  title: 'Icons',
  component: ArrowLeftIcon
} as Meta

const IconTemplate: StoryFn = args => {
  const iconList = [
    ArrowLeftIcon,
    ArrowRightIcon,
    AttachIcon,
    CalendarIcon,
    CheckIcon,
    CloseIcon,
    EditIcon,
    ExchangeIcon,
    ExportIcon,
    LogoutIcon,
    MenuIcon,
    NewMessageIcon,
    NotificationIcon,
    PinIcon,
    PlusIcon,
    SearchIcon,
    ThreeDotIcon,
    UploadIcon,
    ComunityIcon,
    ResourcesIcon,
    MessageIcon,
    ProfileIcon
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {iconList.map((Icon, index) => (
        <Tooltip content={Icon.name}>
          <div key={index} className="rounded-lg bg-primary/10 p-4">
            <Icon {...args} />
          </div>
        </Tooltip>
      ))}
    </div>
  )
}

export const AllIcons = IconTemplate.bind({})
AllIcons.args = {
  size: IconSizeEnum.LG,
  iconColor: 'text-primary',
  className: 'text-primary',
  bgColor: 'transparent'
}
