import { TypographyVariant } from '../Typography.types'

const variantStylesMap: Record<TypographyVariant, string> = {
  h1: 'text-5xl mb-6 font-bold',
  h2: 'text-4xl mb-5 font-bold',
  h3: 'text-3xl mb-3 font-bold',
  h4: 'text-2xl mb-2 font-bold',
  h5: 'text-xl mb-1 font-bold',
  h6: 'text-lg mb-1 font-bold',
  p: 'text-[14px]',
  span: 'text-sm',
  ['body1']: 'text-base !text-[#6b7280]',
  ['body2']: 'text-sm !text-[#6b7280]',
  ['semiTitle']: 'md:text-base text-sm font-bold'
}

export { variantStylesMap }
