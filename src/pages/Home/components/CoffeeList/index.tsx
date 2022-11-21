import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListItemsContainer } from './styles'

import Americano from '../../../../assets/americano.svg'
import Arabe from '../../../../assets/arabe.svg'
import CafeComLeite from '../../../../assets/cafe_com_leite.svg'
import CafeGelado from '../../../../assets/cafe_gelado.svg'
import Capuccino from '../../../../assets/capuccino.svg'
import ChocolateQuente from '../../../../assets/chocolate_quente.svg'
import Cubano from '../../../../assets/cubano.svg'
import ExpressoCremoso from '../../../../assets/expresso_cremoso.svg'
import Expresso from '../../../../assets/expresso.svg'
import Havaiano from '../../../../assets/havaiano.svg'
import Irlandes from '../../../../assets/irlandes.svg'
import Latte from '../../../../assets/latte.svg'
import Macchiato from '../../../../assets/macchiato.svg'
import Mochaccino from '../../../../assets/mochaccino.svg'

export interface Coffee {
  id: number
  image: string
  name: string
  description: string
  price: number
  tags: string[]
}

const coffees: Coffee[] = [
  {
    id: 1,
    image: Expresso,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: Americano,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: ExpressoCremoso,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: CafeGelado,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: CafeComLeite,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: Latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: Capuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: Macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: Mochaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: ChocolateQuente,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    image: Cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: Havaiano,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: Arabe,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: Irlandes,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <CoffeeListItemsContainer>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeeListItemsContainer>
    </CoffeeListContainer>
  )
}
