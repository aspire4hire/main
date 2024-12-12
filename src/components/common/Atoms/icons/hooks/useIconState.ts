import clsx from 'clsx'
import { useMemo } from 'react'

import { ICON_SIZE } from '../constants'
import { IconProps, IconSizeEnum } from '../types'

const useIconState = ({
  size = IconSizeEnum.LG,
  className: currentClassName,
  disabled,
  iconColor,
  bgColor,
  ...iconProps
}: IconProps) => {
  const resolvedIconColor = useMemo(() => {
    if (iconColor) {
      return iconColor
    }
    return ''
  }, [iconColor])

  const resolvedBgColor = useMemo(() => {
    if (bgColor) {
      return bgColor
    }
    return ''
  }, [bgColor])

  console.log('SIZE--', size)

  const className = useMemo(
    () =>
      clsx(ICON_SIZE[size], 'shrink-0', currentClassName, {
        'cursor-not-allowed !text-neutral-30 dark:!text-neutral-40': disabled
      }),
    [currentClassName, size, disabled]
  )

  return {
    iconProps: { ...iconProps, className },
    resolvedIconColor,
    resolvedBgColor
  }
}

export { useIconState }
