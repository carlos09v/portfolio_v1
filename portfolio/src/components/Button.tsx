import { button } from '@/styles/button';
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {}

export const Button = ({ variant, size, ...props }: ButtonProps) => {
  return (
    <button className={button({ variant, size })} {...props} />
  )
}
