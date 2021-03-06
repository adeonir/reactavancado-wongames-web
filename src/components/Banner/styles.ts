import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { RibbonContainer } from 'components/Ribbon/styles'

type ImageProps = {
  src: string
}

export const BannerContainer = styled.section`
  position: relative;

  ${media.lessThan('large')`
    ${RibbonContainer} {
      right: 0;

      &::after {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem ${rgba(theme.colors.black, 0.2)};
  `}
`

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lighterGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      border-radius: ${theme.border.radius};
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  width: 100%;
  background: ${rgba(theme.colors.black, 0.7)};
  padding: ${theme.spacings.small};

  ${media.greaterThan('medium')`
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    padding: ${theme.spacings.large};
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`

export const Title = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.normal};
  margin-bottom: ${theme.spacings.xsmall};

  ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Subtitle = styled.h3`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.normal};
  margin-bottom: ${theme.spacings.xsmall};

  strong {
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  }

  ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.large};
  `}
`
