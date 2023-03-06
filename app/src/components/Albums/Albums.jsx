import { useEffect } from 'react'
import useAlbums from '../../hooks/useAlbums'
import AlbumCard from '../AlbumCard/AlbumCard'

import './Albums.css'
import { Bars } from 'react-loader-spinner'

function Albums ({ artist, loading, setLoading }) {
  const {
    albums,
    loading: loadingAlbums
  } = useAlbums({ artist })

  useEffect(() => {
    if (!loadingAlbums) {
      setLoading(false)
    }
  }, [loadingAlbums])

  if (!artist || loading) return null

  if (artist && albums.total === 0) {
    return (
    <div className='Albums'>
      <h2>No se encontraron resultados 😢</h2>
    </div>
    )
  }
  return (
    <div className='Albums'>
      <h2>Los más escuchados 🕺</h2>
      <ul>
        {albums.items.map(album => (<AlbumCard
          key={album.id}
          id={album.id}
          name={album.name}
          image={album.image}
          release={album.release_date}
          url={album.url}
        />))}
      </ul>
      {loadingAlbums && <Bars
          height="40"
          width="40"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="AlbumsLoader"
          visible={loadingAlbums}
        />}
    </div>
  )
}

export default Albums
