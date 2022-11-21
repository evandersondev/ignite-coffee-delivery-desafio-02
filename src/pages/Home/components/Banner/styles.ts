import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  padding: 94px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5erm;

  img {
    height: 22.5rem;
    margin-left: auto;
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }
`

export const AsideContainer = styled.aside`
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 900;
    line-height: 1.3;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IconContainerProps {
  color: keyof typeof STATUS_COLORS
}

export const ItemsContainer = styled.aside`
  margin-top: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    flex: 1;
  }

  span {
    display: flex;
    font-size: 1rem;
    line-height: 1.3;
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`

export const IconContainer = styled.aside<IconContainerProps>`
  height: 2rem;
  width: 2rem;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.color]]};
  border-radius: 50%;
  margin-right: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`
