import styled from 'styled-components'

export const COLORS = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface ListTileProps {
  color: keyof typeof COLORS
}

export const ListTileContainer = styled.div<ListTileProps>`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.3;

  & > svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme[COLORS[props.color]]};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
  }
`
