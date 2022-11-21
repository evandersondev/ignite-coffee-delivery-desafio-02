import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'
import {
  Badge,
  CartButton,
  HeaderContainer,
  ItemsContainer,
  LocationContainer,
} from './styles'

export function Header() {
  const { cartQuantity } = useCart()
  const navigate = useNavigate()

  function handleNavigateToCheckout() {
    navigate('/checkout')
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </NavLink>

      <ItemsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartButton onClick={handleNavigateToCheckout}>
          {cartQuantity > 0 && <Badge>{cartQuantity}</Badge>}
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ItemsContainer>
    </HeaderContainer>
  )
}
