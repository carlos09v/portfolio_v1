import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'text-[1.1875rem] font-semibold',
  variants: {
    variant: {
      header: `
        rounded-full px-6 py-1 
        font-sans
        dark:bg-orange-tertiary
        bg-purple-secundary
      `,
      content: `
        rounded-lg px-6 py-2.5 
        font-code uppercase
        bg-purple-600
        text-gray-50
        border-1
        border-black
        dark:border-gray-50
      `,
      ghost: `
        rounded-full
        bg-transparent
        font-sans
        px-8 py-1
        dark:border-purple-secundary
        border-2
        border-gray-600
        dark:text-gray-50
        text-black
      `
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    },

    defaultVariants: {
      size: 'md',
    }
  },
})