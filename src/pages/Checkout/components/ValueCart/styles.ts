import styled from 'styled-components'

export const ValueCartContainer = styled.div`
  button {
    width: 100%;
    height: 2.875rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    cursor: pointer;
    transition: background-color 0.1s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`

export const ValueCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.3;

  & + & {
    margin-top: 0.75rem;
  }

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 1rem;
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
