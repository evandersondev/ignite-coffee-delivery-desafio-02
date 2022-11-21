import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  height: 2.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Badge = styled.div`
  position: absolute;
  top: calc(0 * 1.25rem - 0.625rem);
  right: calc(0 * 1.25rem - 0.625rem);
  height: 1.25rem;
  width: 1.25rem;
  background: ${(props) => props.theme['yellow-dark']};
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`
