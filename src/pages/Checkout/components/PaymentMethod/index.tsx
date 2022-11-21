import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { ListTile } from '../../../../components/ListTile'
import {
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodSelectButton,
} from './styles'

export function PaymentMethod() {
  const { register } = useFormContext()

  return (
    <PaymentContainer>
      <ListTile
        icon={<CurrencyDollar size={22} />}
        color="purple"
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />

      <PaymentMethodContainer>
        <input
          id="credit"
          value="credit"
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="credit">
          <PaymentMethodSelectButton>
            <CreditCard size={16} />
            Cartão de crédito
          </PaymentMethodSelectButton>
        </label>
        <input
          id="debit"
          value="debit"
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="debit">
          <PaymentMethodSelectButton>
            <Bank size={16} />
            cartão de débito
          </PaymentMethodSelectButton>
        </label>
        <input
          id="money"
          value="money"
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="money">
          <PaymentMethodSelectButton>
            <Money size={16} />
            dinheiro
          </PaymentMethodSelectButton>
        </label>
      </PaymentMethodContainer>
    </PaymentContainer>
  )
}
