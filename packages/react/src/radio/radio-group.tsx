import React from 'react'
import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { styled } from '../../stitches.config'

export type RadioGroupProps = React.ComponentPropsWithRef<typeof RadioGroup>

const RadioGroup = styled(RadioPrimitive.RadioGroup, {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export default RadioGroup
