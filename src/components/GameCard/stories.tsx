import { Meta, Story } from '@storybook/react/types-6-0'

import { GameCard, GameCardProps } from '.'

export default {
  title: 'Sliders/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstart Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
  },
  argTypes: {
    onFavorite: {
      action: 'favorite clicked',
    },
    ribbon: {
      type: 'string',
    },
  },
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const PromotionalPrice: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
PromotionalPrice.args = {
  promoPrice: 'R$ 100,00',
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
WithRibbon.argTypes = {
  ribbonText: {
    type: 'string',
  },
}
WithRibbon.args = {
  ribbonText: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
}
