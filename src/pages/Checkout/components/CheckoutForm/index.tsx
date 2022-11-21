import { MapPinLine } from 'phosphor-react'

import { useFormContext } from 'react-hook-form'
import { ListTile } from '../../../../components/ListTile'
import {
  CheckoutFormContainer,
  InfoGridFormContainer,
  InputGridContainer,
} from './styles'

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <CheckoutFormContainer>
      <ListTile
        color="yellowDark"
        icon={<MapPinLine size={22} />}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <InputGridContainer>
        <input {...register('cep')} type="text" placeholder="CEP" />
        <input {...register('route')} type="number" placeholder="Rua" />
        <InfoGridFormContainer columnsWidth={['200px', '1fr']}>
          <input {...register('number')} type="text" placeholder="Número" />
          <div>
            <input
              {...register('complement')}
              type="text"
              placeholder="Complemento"
            />
            <span>Opcional</span>
          </div>
        </InfoGridFormContainer>
        <InfoGridFormContainer columnsWidth={['200px', '1fr', '60px']}>
          <input {...register('district')} type="text" placeholder="Bairro" />
          <input {...register('city')} type="text" placeholder="Cidade" />
          <input {...register('uf')} type="text" placeholder="UF" />
        </InfoGridFormContainer>
      </InputGridContainer>
    </CheckoutFormContainer>
  )
}
