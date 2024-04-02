import { useEffect, useState } from 'react'
import { getCatImage } from '../services/catImages'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return

    const firstTwoWords = fact.split(' ', 2).join(' ')

    getCatImage(firstTwoWords).then(newUrl => setImageURL(newUrl))
  }, [fact])

  return { imageURL }
} // { imageURL }
