import React from 'react'
import { styled } from '../../stitches.config'

export type ButtonProps = React.ComponentPropsWithRef<typeof Button>

const Button = styled('button', {
  appearance: 'button',
  fontWeight: '$md',
  textRendering: 'geometricPrecision',
  cursor: 'pointer',
  transition: 'all .2s ease',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  '&:active': {
    transform: 'scale(.98)',
  },
  '&:focus': {
    boxShadow: '$focusRing',
  },
  variants: {
    variant: {
      default: {
        color: '$gray800',
        background: '$white',
        boxShadow: '$lowShadow',
        '&:hover, &:active': {
          background: '$gray100',
        },
      },
    },
    size: {
      md: {
        fontSize: '$sm',
        lineHeight: '$md',
        padding: '8px 16px',
        borderRadius: '$md',
        height: '38px',
      },
    },
    width: {
      full: {
        minWidth: '100%',
      },
      auto: {
        minWidth: '168px',
      },
      init: {
        minWidth: 'auto',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    width: 'init',
  },
})

export default Button
