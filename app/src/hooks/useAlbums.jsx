import { useEffect, useRef, useState } from 'react'
import { INITIAL_OFFSET, RANGE_OF_RESULTS } from '../constants'
import { getAlbumsFromArtistName } from '../services/albums'

function useAlbums ({ artist }) {
  const [albums, setAlbums] = useState({})
  const [loading, setLoading] = useState(false)
  const currentArtist = useRef(null)

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
  }, [albums.offset])

  useEffect(() => {
    if (artist) {
      setLoading(true)
      getAlbumsFromArtistName({ name: artist, limit: RANGE_OF_RESULTS, offset: INITIAL_OFFSET })
        .then(data => {
          const { items } = data
          if (items.length === 0) return
          setAlbums(data)
          currentArtist.current = items[0].artist
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
      setAlbums({})
    }
  }, [artist])

  return { albums, loading }
}

export default useAlbums
