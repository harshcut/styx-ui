import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link, LinkProps } from '@styx-ui/react'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    highlight: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = ({ ...args }: LinkProps) => (
  <Link {...args} target="_blank" />
)

export const Default = Template.bind({})
Default.args = { children: 'GitHub', href: 'https://github.com/harshcut/styx-ui' }
