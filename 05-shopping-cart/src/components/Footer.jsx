// import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()
  return (
    <footer className='footer'>
      {/* {JSON.stringify(filters, null, 2)}
      <br />
      {JSON.stringify(cart, null, 2)} */}
      <h4>React test</h4>
      <span>@fernando8franco</span>
      <h5>Shopping Cart</h5>
    </footer>
  )
}
