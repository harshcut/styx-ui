import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '../../stitches.config'

export type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxRoot>, CheckboxProps>(
  (props, ref) => (
    <CheckboxLabel>
      <CheckboxRoot {...props} ref={ref}>
        <CheckboxIndicator />
      </CheckboxRoot>
      {props.children}
    </CheckboxLabel>
  ),
)

const CheckboxLabel = styled(LabelPrimitive.Root, {
  textRendering: 'geometricPrecision',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  variants: {
    variant: {
      default: {
        color: '$gray800',
      },
    },
    size: {
      md: {
        fontWeight: '$sm',
        fontSize: '$sm',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  appearance: 'checkbox',
  cursor: 'pointer',
  transition: 'all .2s ease',
  position: 'relative',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  '&:active': {
    transform: 'scale(.8)',
  },
  '&:focus': {
    boxShadow: '$focusRing',
  },
  variants: {
    variant: {
      default: {
        background: '$white',
        boxShadow: '$lowShadow',
      },
    },
    size: {
      md: {
        borderRadius: '$xs',
        minWidth: '16px',
        height: '16px',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  boxSizing: 'content-box',
  position: 'absolute',
  transform: 'rotate(40deg)',
  variants: {
    size: {
      md: {
        top: '-5px',
        left: '7px',
        borderBottom: '3px solid $gray900',
        borderRight: '3px solid $gray900',
        width: '5px',
        height: '14px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default Checkbox
