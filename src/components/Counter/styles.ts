import styled from 'styled-components'

const VARIANT_COUNTER_SIZE = {
  small: {
    height: '2rem',
    'font-size': '0.75rem',
  },
  medium: {
    height: '2.375rem',
    'font-size': '1rem',
  },
} as const

interface CounterContainerProps {
  variant: 'small' | 'medium'
}

export const CounterContainer = styled.div<CounterContainerProps>`
  height: ${(props) => VARIANT_COUNTER_SIZE[props.variant].height};
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  font-size: ${(props) => VARIANT_COUNTER_SIZE[props.variant]['font-size']};
  color: ${(props) => props.theme['base-title']};
  line-height: 1.3;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const ButtonCounter = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: color 0.1s;
  margin: 0 0.2rem;

  &:hover {
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  &:disabled {
    opacity: 0.3;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
