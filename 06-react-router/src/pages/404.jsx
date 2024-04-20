import { Link } from '../Link'
import gif from '../assets/smoke.gif'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>404: Page not found</h1>
        <img src={gif} alt='bad' />
      </div>
      <Link to='/'>Back to home</Link>
    </>
  )
}
