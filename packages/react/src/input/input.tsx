import { styled, VariantProps } from '../../stitches.config'

export type InputProps = VariantProps<typeof Input>

const Input = styled('input', {
  appearance: 'textfield',
  fontWeight: '$sm',
  textRendering: 'geometricPrecision',
  cursor: 'text',
  transition: 'all .2s ease',
  border: 'none',
  userSelect: 'none',
  outline: 'none',
  WebkitTapHighlightColor: '$colors$transparent',
  '&:focus': {
    boxShadow: '$focusRing',
  },
  variants: {
    variant: {
      default: {
        color: '$black',
        background: '$white',
        boxShadow: '$lowShadow',
      },
    },
    size: {
      md: {
        fontSize: '$sm',
        lineHeight: '$xl',
        padding: '8px 12px',
        borderRadius: '$md',
        height: '38px',
      },
    },
    width: {
      full: {
        minWidth: '100%',
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

export default Input
