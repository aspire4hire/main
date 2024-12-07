import { AvatarSizeEnum } from '../enums'

const AVATAR_SIZE: Record<AvatarSizeEnum, string> = {
  [AvatarSizeEnum.XS]: 'h-[32px] w-[32px]',
  [AvatarSizeEnum.MD]: 'h-[48px] w-[48px]',
  [AvatarSizeEnum.LG]: 'h-[64px] w-[64px]'
}

export { AVATAR_SIZE }
