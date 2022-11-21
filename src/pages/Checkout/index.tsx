import { useCart } from '../../hooks/useCart'
import { CheckoutForm } from './components/CheckoutForm'
import { CoffeeCardSelected } from './components/CoffeCardSelected'
import { PaymentMethod } from './components/PaymentMethod'
import { ValueCart } from './components/ValueCart'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CheckoutCartContainer,
  CheckoutContainer,
  CoffeeCardContainer,
  RequestContanier,
} from './styles'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  route: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
  paymentMethod: zod.nativeEnum(PaymentMethods),
})

export type CheckouFormData = zod.infer<typeof checkoutValidationSchema>

export function Checkout() {
  const { cartItems, cleanCart } = useCart()
  const navite = useNavigate()
  const checkoutForm = useForm<CheckouFormData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      cep: '',
      route: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = checkoutForm

  function handleFormSubmit(data: CheckouFormData) {
    navite('/success', { state: data })
    cleanCart()
    reset()
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <RequestContanier>
          <h3>Complete seu pedido</h3>

          <CheckoutForm />
          <PaymentMethod />
        </RequestContanier>
        <CheckoutCartContainer>
          <h3>Cafés selecionados</h3>
          <CoffeeCardContainer>
            {cartItems.map((coffee) => {
              return <CoffeeCardSelected key={coffee.id} coffee={coffee} />
            })}
            <ValueCart />
          </CoffeeCardContainer>
        </CheckoutCartContainer>
      </CheckoutContainer>
    </FormProvider>
  )
}
