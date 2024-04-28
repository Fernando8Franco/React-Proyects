import { useUsers } from '../hooks/useUsers'

export const Results = (): JSX.Element => {
  const { users } = useUsers()

  return (
  <h3>
    Results {users.length}
  </h3>
  )
}
