import responseMovies from '../mocks/with-results.json'
// import noResults from '../mocks/no-results.json'

export function useMovies () {
  const movies = responseMovies.Search

  const paramMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: paramMovies }
}
