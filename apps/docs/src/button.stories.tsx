import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonProps } from '@styx-ui/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    width: {
      options: ['full', 'auto', 'init'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({ ...args }: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = { children: 'Hello Styx UI ✨' }
