import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DeliveryImage from '../../assets/delivery.svg'
import { CheckouFormData } from '../Checkout'
import {
  AsideContainer,
  IconContainer,
  ItemLabelContainer,
  ItemsContainer,
  SuccessContainer,
} from './styles'

interface SuccessLocationType {
  state: CheckouFormData
}

const paymentLabel = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro',
} as const

export function Success() {
  const { state } = useLocation() as unknown as SuccessLocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  })

  if (!state) return <div></div>

  return (
    <SuccessContainer>
      <AsideContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <ItemsContainer>
          <div>
            <IconContainer color="purple">
              <MapPin weight="fill" />
            </IconContainer>

            <ItemLabelContainer>
              <span>
                Entrega em{' '}
                <strong>
                  {state.route}, {state.number}
                </strong>
              </span>
              <span>
                {state.district} - {state.city}, {state.uf}
              </span>
            </ItemLabelContainer>
          </div>
          <div>
            <IconContainer color="yellow">
              <Timer weight="fill" />
            </IconContainer>
            <ItemLabelContainer>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </ItemLabelContainer>
          </div>
          <div>
            <IconContainer color="yellowDark">
              <CurrencyDollar weight="fill" />
            </IconContainer>
            <ItemLabelContainer>
              <span>Pagamento na entrega</span>
              <strong>{paymentLabel[state.paymentMethod]}</strong>
            </ItemLabelContainer>
          </div>
        </ItemsContainer>
      </AsideContainer>

      <img src={DeliveryImage} alt="" />
    </SuccessContainer>
  )
}
