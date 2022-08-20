import Radio, { RadioProps } from './radio'
import RadioGroup, { RadioGroupProps } from './radio-group'

type RadioComponentType = typeof Radio & {
  Group: typeof RadioGroup
}
;(Radio as RadioComponentType).Group = RadioGroup

export type { RadioProps, RadioGroupProps }
export default Radio as RadioComponentType
