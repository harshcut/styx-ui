import React from 'react'
import * as RadioPrimitive from '@radix-ui/react-radio-group'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '../../stitches.config'

export type RadioProps = React.ComponentPropsWithRef<typeof RadioPrimitive.Item>

const Radio = React.forwardRef<React.ElementRef<typeof RadioItem>, RadioProps>((props, ref) => (
  <RadioLabel>
    <RadioItem {...props} ref={ref}>
      <RadioPrimitive.Indicator />
    </RadioItem>
    {props.children}
  </RadioLabel>
))

const RadioLabel = styled(LabelPrimitive.Root, {
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

const RadioItem = styled(RadioPrimitive.Item, {
  appearance: 'radio',
  cursor: 'pointer',
  padding: 0,
  transition: 'all .2s ease',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  '&:active': {
    transform: 'scale(1.2)',
  },
  '&:focus': {
    boxShadow: '$focusRing',
  },
  variants: {
    variant: {
      default: {
        background: '$white',
        '&[data-state="checked"]': {
          border: '6px solid $gray800',
        },
        '&[data-state="unchecked"]': {
          border: '2px solid $gray800',
        },
        '&:hover, &:active': {
          borderColor: '$gray700',
        },
      },
    },
    size: {
      md: {
        borderRadius: '9999px',
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

export default Radio
