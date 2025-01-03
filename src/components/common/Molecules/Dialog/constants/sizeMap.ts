import { DialogSizeEnum } from '../Dialog.types'

const DialogSize: Record<DialogSizeEnum, string> = {
  sm: 'max-w-[320px]',
  md: 'max-w-[480px]',
  lg: 'max-w-[640px]',
  xl: 'max-w-[800px]',
  '2xl': 'max-w-[1024px]',
  full: 'max-w-[100vw] w-full',
  custom: ''
}

export { DialogSize }
