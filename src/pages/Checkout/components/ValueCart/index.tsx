import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ValueCartContainer, ValueCartItem } from './styles'

const DELIVERY_PRICE = 3.5

export function ValueCart() {
  const { cartItemsTotalPrice, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotalPrice

  return (
    <ValueCartContainer>
      <ValueCartItem>
        <p>Total de itens</p>
        <span>{formatMoney(cartItemsTotalPrice)}</span>
      </ValueCartItem>
      <ValueCartItem>
        <p>Entrega</p>
        <span>{formatMoney(DELIVERY_PRICE)}</span>
      </ValueCartItem>
      <ValueCartItem>
        <strong>Total</strong>
        <strong>{formatMoney(cartTotal)}</strong>
      </ValueCartItem>
      <button disabled={cartQuantity <= 0} type="submit">
        Confirmar pedido
      </button>
    </ValueCartContainer>
  )
}
