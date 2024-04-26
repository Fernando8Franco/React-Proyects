import { SortBy } from '../consts'
import { type SortByType, type User } from '../types'

interface Props {
  users: User[]
  showColors: boolean
  handleDelete: (uuid: string) => void
  handleChangeSort: (sort: SortByType) => void
}

export function UsersList ({ users, showColors, handleDelete, handleChangeSort }: Props): JSX.Element {
  return (
    <table className='user-list-table'>
      <thead>
        <tr>
          <th>Photo</th>
          <th className='pointer' onClick={() => { handleChangeSort(SortBy.NAME) }}>Name</th>
          <th className='pointer' onClick={() => { handleChangeSort(SortBy.LAST) }}>Last name</th>
          <th className='pointer' onClick={() => { handleChangeSort(SortBy.COUNTRY) }}>Country</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? '#EB9B19' : '#7A705F'
            const color = showColors ? backgroundColor : 'transparent'

            return (
              <tr key={user.login.uuid} style={{ backgroundColor: color }}>
                <td>
                  <img src={user.picture.thumbnail} alt={`${user.name.first} image`} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button onClick={() => {
                    handleDelete(user.login.uuid)
                  }}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
