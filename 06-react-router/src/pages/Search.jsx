import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Searching for ${routeParams.query}`
  }, [])
  return (
    <h1>Searching: {routeParams.query}</h1>
  )
}
