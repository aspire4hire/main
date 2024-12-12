import { AvatarSizeEnum } from '../enums'

const AVATAR_SIZE: Record<AvatarSizeEnum, string> = {
  [AvatarSizeEnum.XS]: 'h-[32px] w-[32px]',
  [AvatarSizeEnum.MD]: 'h-[48px] w-[48px]',
  [AvatarSizeEnum.LG]: 'h-[64px] w-[64px]',
  [AvatarSizeEnum.XL]: 'h-[80px] w-[80px]',
  [AvatarSizeEnum['2XL']]: 'h-[96px] w-[96px]',
  [AvatarSizeEnum.CUSTOM]: ''
}

export { AVATAR_SIZE }
