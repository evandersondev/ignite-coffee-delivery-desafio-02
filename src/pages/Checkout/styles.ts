import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  margin-top: 2.5rem;
`
export const RequestContanier = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutCartContainer = styled.div`
  h3 {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCardContainer = styled.div`
  flex: 1;
  margin-top: 0.9375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`
