import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  padding: 94px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5erm;
  align-items: flex-end;

  img {
    width: 30.75rem;
    margin-left: auto;
  }
`

export const AsideContainer = styled.aside`
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 900;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
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

export const ItemsContainer = styled.div`
  margin-top: 2.5rem;
  min-width: 32rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.background};
  position: relative;
  gap: 2rem;

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  & > div {
    display: flex;
    align-items: center;
  }
`

export const ItemLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  span,
  strong {
    font-size: 1rem;
    line-height: 1.3;
    text-align: start;
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
