import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  margin-top: 0.9375rem;
`

export const InputGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 2.625rem;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    padding: 0.75rem;
    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }

    &[placeholder='CEP'] {
      width: 200px;
    }

    &[placeholder='Complemento'] {
      width: 100%;
      padding-right: 4.2rem;
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
  }

  div {
    position: relative;

    span {
      position: absolute;
      right: calc(1.625rem / 2);
      top: calc(1.625rem / 2);
      font-size: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

interface InfoGridFormContainerProps {
  columnsWidth: string[]
}

export const InfoGridFormContainer = styled.div<InfoGridFormContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columnsWidth.join(' ')};
  gap: 1rem;
`
