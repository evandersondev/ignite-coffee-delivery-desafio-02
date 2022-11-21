import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  padding: 2rem 0;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeListItemsContainer = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem 2.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
