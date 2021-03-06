import { Meta, Story } from '@storybook/react/types-6-0'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  children: 'Buy now',
}

export const WithIcon: Story = (args) => <Button {...args} />
WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
}

export const IconOnly: Story = (args) => <Button {...args} />
IconOnly.args = {
  size: 'small',
  icon: <AddShoppingCart />,
}

export const AsLink: Story = (args) => <Button {...args} />
AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  link: '/link',
}
