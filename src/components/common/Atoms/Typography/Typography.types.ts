import React from 'react'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'body1'
  | 'body2'
  | 'semiTitle'

export type TypographyProps = {
  variant?: TypographyVariant
  align?: 'left' | 'center' | 'right'
  weight?: 'light' | 'regular' | 'bold'
  children: React.ReactNode
  className?: HTMLElement['className']
}

export type TypographyRef = {
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  p: HTMLParagraphElement
  span: HTMLElement
}
