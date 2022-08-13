import React from 'react'
import { styled } from '../../stitches.config'

export type KdbProps = React.ComponentPropsWithRef<typeof Kdb>

const Kdb = styled('kbd', {
  fontWeight: '$sm',
  textRendering: 'geometricPrecision',
  cursor: 'default',
  border: 'none',
  userSelect: 'none',
  variants: {
    variant: {
      default: {
        color: '$black',
        background: '$white',
        boxShadow: '0px 0px 0px 1px hsl(0, 0%, 88%, 1), 0 1.5px 0 1px hsl(0, 0%, 88%, 1)',
      },
    },
    size: {
      md: {
        fontSize: '$xs',
        padding: '5px 7px',
        borderRadius: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export default Kdb
