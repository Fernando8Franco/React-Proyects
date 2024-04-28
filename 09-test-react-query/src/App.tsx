import './App.css'
import { useMemo, useState } from 'react'
import { type SortByType, type User } from './types'
import { UsersList } from './components/UsersList'
import { SortBy } from './consts'
import { useUsers } from './hooks/useUsers'
import { Results } from './components/Results'

function App (): JSX.Element {
  const { isLoading, isError, users, fetchNextPage, hasNextPage, refetch } = useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortByType>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = (): void => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = (): void => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = (): void => {
    void refetch()
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
    users.filter((user) => user.login.uuid !== uuid)
  }

  const handleChangeSort = (sort: SortByType): void => {
    setSorting(sort)
  }

  return (
    <div>
      <h1>User List - React Query</h1>
      <Results />
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
        {users.length > 0 &&
          <UsersList
            showColors={showColors}
            users={sortedUsers}
            handleDelete={handleDelete}
            handleChangeSort={handleChangeSort}
          />
        }
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No users to show</p>}
        {!isLoading && !isError && hasNextPage &&
          <button onClick={() => { void fetchNextPage() }}>
            Load more results
          </button>
        }
        {!isLoading && !isError && !hasNextPage && <p>No more users to show</p>}
      </main>
    </div>
  )
}

export default App
