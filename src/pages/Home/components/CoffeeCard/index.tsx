import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { Coffee } from '../CoffeeList'
import {
  CoffeeCardContainer,
  FooterActions,
  FooterContainer,
  TagContainer,
} from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addOneCoffeeToCart } = useCart()

  function hanldeIncrease() {
    setQuantity((state) => state + 1)
  }

  function hanldeDecrease() {
    setQuantity((state) => state - 1)
  }

  function hanldeAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addOneCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <TagContainer>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <FooterContainer>
        <strong>
          <span>R$ </span>
          {formatMoney(coffee.price)}
        </strong>

        <FooterActions>
          <Counter
            onIncrease={hanldeIncrease}
            onDecrase={hanldeDecrease}
            quantity={quantity}
          />

          <button onClick={hanldeAddCoffeeToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </FooterActions>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
