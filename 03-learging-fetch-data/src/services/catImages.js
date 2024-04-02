export const getCatImage = async (firstTwoWords) => {
  const res = await fetch(`https://cataas.com/cat/cute/says/${firstTwoWords}`)
  const data = await res
  const { url } = data
  return url
}
