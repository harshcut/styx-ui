import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input, InputProps } from '@styx-ui/react'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    width: {
      options: ['full', 'init'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = ({ ...args }: InputProps) => <Input {...args} />

export const Default = Template.bind({})
Default.args = { placeholder: 'Say Hello to Styx UI ...' }
