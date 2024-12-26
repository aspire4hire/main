import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-primary bg-transparent shadow-sm hover:bg-muted-foreground/10',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        ghostSecondary:
          'bg-transparent border-secondary border-2 text-secondary hover:bg-secondary/5',
        primaryWithSecondary: 'bg-primary text-secondary hover:bg-primary/90',
        form: 'flex items-center gap-3 rounded-b-none rounded-t-3xl py-6 shadow-2xl bg-primary hover:bg-primary/90 w-full  !h-[68px] text-white font-bold',
        icon: '!p-2 rounded-full hover:bg-tertiary/10 aspect-square h-fit'
      },
      size: {
        default: 'px-5 py-3',
        sm: 'h-8 rounded-lg px-3 text-xs',
        lg: 'h-10 rounded-lg px-8',
        xl: 'h-12 rounded-lg px-10',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export { buttonVariants }
