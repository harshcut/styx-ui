import React from 'react'
import { styled } from '../../stitches.config'

export type LinkProps = React.ComponentPropsWithRef<typeof Link>

const Link = styled('a', {
  font: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  '&:focus': {
    outline: '2px dotted hsl(202, 65%, 51%, .3)',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  variants: {
    highlight: {
      true: {
        color: 'hsl(238, 96%, 59%, 1)',
        textDecorationColor: 'hsl(238, 92%, 95%, 1)',
        '&:hover': {
          textDecorationColor: 'hsl(238, 81%, 88%, 1)',
        },
      },
      false: {
        color: '$gray800',
        textDecorationColor: '$gray300',
        '&:hover': {
          textDecorationColor: '$gray400',
        },
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
        textUnderlineOffset: '3px',
      },
      false: {
        textDecoration: 'none',
        textDecorationLine: 'none',
      },
    },
  },
  defaultVariants: {
    highlight: true,
    underline: true,
  },
})

export default Link
