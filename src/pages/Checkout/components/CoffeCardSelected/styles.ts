import styled from 'styled-components'

export const CoffeeCardSelectedCard = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    height: 4rem;
  }

  & > div {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  footer {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  cursor: pointer;
  height: 2rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-title']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
