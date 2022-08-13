import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Kdb, KdbProps } from '@styx-ui/react'

export default {
  title: 'Kdb',
  component: Kdb,
} as ComponentMeta<typeof Kdb>

const Template: ComponentStory<typeof Kdb> = ({ ...args }: KdbProps) => <Kdb {...args} />

export const Default = Template.bind({})
Default.args = { children: 'Shift + Tab' }
