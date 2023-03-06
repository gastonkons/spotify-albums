import { useState } from 'react'
import { Bars } from 'react-loader-spinner'
import Albums from '../Albums/Albums'
import Backdrop from '../Backdrop/Backdrop'
import SearchBox from '../SearchBox/SearchBox'

import './SearchAlbums.css'

function SearchAlbums () {
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <main>
      <SearchBox
        artist={artist}
        setArtist={setArtist}
        setLoading={setLoading}
        loading={loading}
      />
      <Albums artist={artist} loading={loading} setLoading={setLoading} />
      <Backdrop show={loading}>
        <Bars
          height="80"
          width="80"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />
      </Backdrop>
    </main>
  )
}

export default SearchAlbums
