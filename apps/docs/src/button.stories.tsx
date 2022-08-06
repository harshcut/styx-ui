import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const Button: React.FC<React.PropsWithChildren> = (props) => <button>{props.children}</button>

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = { children: 'Hello Styx UI' }
