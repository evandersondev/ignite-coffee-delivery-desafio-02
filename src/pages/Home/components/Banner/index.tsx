import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BannerImage from '../../../../assets/coffee.svg'

import {
  AsideContainer,
  BannerContainer,
  IconContainer,
  ItemsContainer,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <AsideContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ItemsContainer>
          <div>
            <span>
              <IconContainer color="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </span>
            <span>
              <IconContainer color="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </span>
          </div>
          <div>
            <span>
              <IconContainer color="gray">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <IconContainer color="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </span>
          </div>
        </ItemsContainer>
      </AsideContainer>

      <img src={BannerImage} alt="" />
    </BannerContainer>
  )
}
