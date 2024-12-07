import { IconSizeEnum } from '../types'

export const ICON_SIZE: Record<IconSizeEnum, string> = {
  [IconSizeEnum['2XS']]: 'h-[10px] w-[10px]',
  [IconSizeEnum.XS]: 'h-[12px] w-[12px]',
  [IconSizeEnum.SM]: 'h-[16px] w-[16px]',
  [IconSizeEnum.MD]: 'h-[20px] w-[20px]',
  [IconSizeEnum.LG]: 'h-[24px] w-[24px]',
  [IconSizeEnum.XL]: 'h-[28px] w-[28px]',
  [IconSizeEnum['2XL']]: 'h-[32px] w-[32px]',
  [IconSizeEnum.CUSTOM]: ''
}
