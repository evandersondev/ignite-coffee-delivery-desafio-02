import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;

  img {
    height: 7.5rem;
    margin-top: calc(0 * 7.5rem - 1.25rem);
    margin-bottom: 0.75rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-family: 'Baloo 2';
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.3;
    text-align: center;
  }
`
export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    height: 21px;
    text-transform: uppercase;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
  }
`

export const FooterContainer = styled.div`
  margin: 0 0.25rem;
  margin-top: 2.0625rem;
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1.3;

    span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  & > button {
    height: 2.375rem;
    width: 2.375rem;
    padding: 0.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
