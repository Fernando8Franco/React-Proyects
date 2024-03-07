import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // Get fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Get image from random fact
  useEffect(() => {
    if (!fact) return

    const firstTwoWords = fact.split(' ', 2).join(' ')

    fetch(`https://cataas.com/cat/cute/says/${firstTwoWords}`)
      .then(res => res)
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Cat App</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img className='cat-image' src={imageURL} alt='Image generated from the first two words of the random fact' />}
      </section>
    </main>
  )
}

export default App
