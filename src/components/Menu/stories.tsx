import { Meta, Story } from '@storybook/react/types-6-0'

import { Menu, MenuProps } from '.'

export default {
  title: 'Layout/Menu',
  component: Menu,
} as Meta

export const Basic: Story<MenuProps> = (args) => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
}
