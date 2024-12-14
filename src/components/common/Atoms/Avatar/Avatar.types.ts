import { AvatarSizeEnum } from './enums'

export type AvatarProps = {
  size?: AvatarSizeEnum
  className?: string
  src?: string | undefined | null
  name?: string
}
