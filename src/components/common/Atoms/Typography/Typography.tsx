// src/components/Typography.tsx
import React, { forwardRef } from 'react'
import { TypographyProps } from './Typography.types'
import { cn } from '@/lib/utils'
import { variantStylesMap } from './constants'

const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'p',
      align = 'left',
      weight = 'regular',
      children,
      className = ''
    },
    ref
  ) => {
    const baseClasses = `text-${align} font-${weight} text-primary w-fit`

    const classes = cn(`${baseClasses} ${variantStylesMap[variant]}`, className)

    switch (variant) {
      case 'h1':
        return (
          <h1 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h3>
        )
      case 'h4':
        return (
          <h4 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h4>
        )
      case 'h5':
        return (
          <h5 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h5>
        )
      case 'h6':
        return (
          <h6 className={classes} ref={ref as React.Ref<HTMLHeadingElement>}>
            {children}
          </h6>
        )
      case 'p':
        return (
          <p className={classes} ref={ref as React.Ref<HTMLParagraphElement>}>
            {children}
          </p>
        )
      case 'span':
        return (
          <span className={classes} ref={ref as React.Ref<HTMLElement>}>
            {children}
          </span>
        )
      default:
        return (
          <p className={classes} ref={ref as React.Ref<HTMLParagraphElement>}>
            {children}
          </p>
        )
    }
  }
)

Typography.displayName = 'Typography'

export { Typography }
