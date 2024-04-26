import './App.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { type SortByType, type User } from './types'
import { UsersList } from './components/UsersList'
import { SortBy } from './consts'

function App (): JSX.Element {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortByType>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results as User[])
        originalUsers.current = res.results
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const toggleColors = (): void => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = (): void => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = (): void => {
    setUsers(originalUsers.current)
  }

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter((user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      }))
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => string> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  const handleDelete = (uuid: string): void => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortByType): void => {
    setSorting(sort)
  }

  return (
    <div>
      <h1>User List</h1>
      <header>
        <button onClick={toggleColors}>
          Paint rows
        </button>

        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'Disordered' : 'Sort by country'}
        </button>

        <button onClick={handleReset}>
          Reset rows
        </button>

        <input placeholder='Filter by country' onChange={(e) => {
          setFilterCountry(e.target.value)
        }}/>
      </header>
      <main>
        <UsersList
          showColors={showColors}
          users={sortedUsers}
          handleDelete={handleDelete}
          handleChangeSort={handleChangeSort}
        />
      </main>
    </div>
  )
}

export default App
