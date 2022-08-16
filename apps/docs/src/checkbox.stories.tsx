import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@styx-ui/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = ({ ...args }: CheckboxProps) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = { children: 'Accept Terms & Conditions' }
