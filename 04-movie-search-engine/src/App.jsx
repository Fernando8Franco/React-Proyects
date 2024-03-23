import './App.css'

import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'

function App () {
  const { movies: paramMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movie Search Engine</h1>
        <form className='form'>
          <input placeholder='Justice League, Maze Runner, Lord of the Rings...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={paramMovies} />
      </main>
    </div>
  )
}

export default App
