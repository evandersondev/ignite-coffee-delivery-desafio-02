import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { CoffeeCardSelectedCard, RemoveButton } from './styles'
import { CartItems } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCardSelectedProps {
  coffee: CartItems
}

export function CoffeeCardSelected({ coffee }: CoffeeCardSelectedProps) {
  const { changeQuantityCoffeeFromCartItems, removeCartItemById } = useCart()

  function hanldeIncrease() {
    changeQuantityCoffeeFromCartItems(coffee.id, 'increase')
  }

  function hanldeDecrease() {
    changeQuantityCoffeeFromCartItems(coffee.id, 'decrease')
  }

  function hanldeRemove() {
    removeCartItemById(coffee.id)
  }

  const totalPriceCoffe = coffee.price * coffee.quantity
  const totalPriceFormatted = formatMoney(totalPriceCoffe)

  return (
    <CoffeeCardSelectedCard>
      <img src={coffee.image} alt="" />
      <div>
        <header>
          <p>{coffee.name}</p>
          <strong>{totalPriceFormatted}</strong>
        </header>
        <footer>
          <Counter
            variant="small"
            quantity={coffee.quantity}
            onIncrease={hanldeIncrease}
            onDecrase={hanldeDecrease}
          />
          <RemoveButton onClick={hanldeRemove}>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </footer>
      </div>
    </CoffeeCardSelectedCard>
  )
}
