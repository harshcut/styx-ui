import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio, RadioProps } from '@styx-ui/react'

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = ({ ...args }: RadioProps) => (
  <Radio.Group>
    <Radio {...args} value="yes">
      Nopn&apos;t
    </Radio>
    <Radio {...args} value="no">
      Yesn&apos;t
    </Radio>
  </Radio.Group>
)
