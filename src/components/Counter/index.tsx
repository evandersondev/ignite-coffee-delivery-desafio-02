import { Minus, Plus } from 'phosphor-react'
import { ButtonCounter, CounterContainer } from './styles'

interface CounterProps {
  variant?: 'small' | 'medium'
  onIncrease: () => void
  onDecrase: () => void
  quantity: number
}

export function Counter({
  variant = 'medium',
  quantity,
  onIncrease,
  onDecrase,
}: CounterProps) {
  return (
    <CounterContainer variant={variant}>
      <ButtonCounter disabled={quantity <= 1} onClick={onDecrase}>
        <Minus size={14} weight="fill" />
      </ButtonCounter>
      {quantity}
      <ButtonCounter onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </ButtonCounter>
    </CounterContainer>
  )
}
