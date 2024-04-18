import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
      </footer>
      <button onClick={addToCart}>+</button>
    </li>
  )
}

export function Cart () {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
              />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
