import { render, screen } from '@testing-library/react'

import { Slider } from '.'

describe('<Slider />', () => {
  it('should render the children as slider item', () => {
    const {
      container: { firstChild },
    } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(firstChild).toMatchSnapshot()
  })
})
