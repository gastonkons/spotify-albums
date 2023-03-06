import { useEffect, useState } from 'react'
import { INITIAL_OFFSET, RANGE_OF_RESULTS } from '../constants'
import { getAlbumsFromArtistName } from '../services/albums'

const initialState = {
  offset: INITIAL_OFFSET,
  items: [],
  total: 0
}
function useAlbums ({ artist }) {
  const [albums, setAlbums] = useState(initialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isLoading = false
    function handleScroll () {
      const element = document.getElementById('root')

      const resultsAvailable = albums.offset + RANGE_OF_RESULTS <= albums.total
      const loadFromHeight = window.innerHeight + window.scrollY >= element.scrollHeight - 600

      if (!isLoading && resultsAvailable && loadFromHeight) {
        isLoading = true
        setLoading(true)
        const offset = albums.offset + RANGE_OF_RESULTS
        getAlbumsFromArtistName({ name: artist, limit: RANGE_OF_RESULTS, offset })
          .then(data => {
            const { items } = data
            if (items.length === 0) return
            setAlbums(prevState => ({
              ...prevState,
              items: prevState.items.concat(items),
              offset
            }))
          })
          .finally(() => setLoading(false))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [albums.items])

  useEffect(() => {
    if (artist) {
      setLoading(true)
      getAlbumsFromArtistName({ name: artist, limit: RANGE_OF_RESULTS, offset: INITIAL_OFFSET })
        .then(data => {
          const { items } = data
          if (items.length === 0) {
            setAlbums(initialState)
          } else {
            setAlbums(data)
          }
        })
        .catch(e => {
          setAlbums(initialState)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
      setAlbums(initialState)
    }
  }, [artist])

  return { albums, loading }
}

export default useAlbums
