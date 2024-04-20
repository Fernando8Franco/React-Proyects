import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://picsum.photos/id/237/640/480' alt='doggo' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste similique repellendus placeat, veritatis minima illo.</p>
      </div>
      <Link to='/'>Go to home</Link>
    </>
  )
}
