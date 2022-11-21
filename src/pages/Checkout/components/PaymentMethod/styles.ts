import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const PaymentMethodSelectButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  height: 3.125rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  gap: 0.75rem;
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
