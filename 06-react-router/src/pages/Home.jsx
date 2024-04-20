import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste similique repellendus placeat, veritatis minima illo.</p>
      <Link to='/about'>Go to about</Link>
    </>
  )
}
