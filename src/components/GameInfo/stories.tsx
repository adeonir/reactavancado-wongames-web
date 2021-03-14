import { Story, Meta } from '@storybook/react/types-6-0'

import { GameInfo } from '.'

export default {
  title: 'Components/GameInfo',
  component: GameInfo,
} as Meta

export const Basic: Story = (args) => <GameInfo {...args} />
