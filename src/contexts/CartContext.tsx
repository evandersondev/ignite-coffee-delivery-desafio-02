import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { Coffee } from '../pages/Home/components/CoffeeList'

export interface CartItems extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItems[]
  cartQuantity: number
  cartItemsTotalPrice: number
  cleanCart: () => void
  addOneCoffeeToCart: (coffee: CartItems) => void
  removeCartItemById: (coffeeId: number) => void
  changeQuantityCoffeeFromCartItems: (
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    const cartItemsStoraged = localStorage.getItem(
      '@coffee_delivery:cart_items',
    )

    if (cartItemsStoraged) {
      return JSON.parse(cartItemsStoraged)
    }

    return []
  })
  const cartQuantity = cartItems.length
  const cartItemsTotalPrice = cartItems.reduce((total, current) => {
    return total + current.price * current.quantity
  }, 0)

  useEffect(() => {
    localStorage.setItem(
      '@coffee_delivery:cart_items',
      JSON.stringify(cartItems),
    )
  }, [cartItems])

  function addOneCoffeeToCart(coffee: CartItems) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeQuantityCoffeeFromCartItems(
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )

    const cartWithQuantityUpdated = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]

        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(cartWithQuantityUpdated)
  }

  function removeCartItemById(coffeeId: number) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )

    const cartItemsWithoutOne = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(cartItemsWithoutOne)
  }

  function cleanCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotalPrice,
        cleanCart,
        addOneCoffeeToCart,
        removeCartItemById,
        changeQuantityCoffeeFromCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
