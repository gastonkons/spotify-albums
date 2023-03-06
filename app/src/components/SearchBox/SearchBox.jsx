import { useRef, useState } from 'react'

import './SearchBox.css'

function SearchBox ({ artist, setArtist, loading, setLoading }) {
  const [inputValue, setInputValue] = useState('')
  const placeholder = useRef('Bizarrap')

  function handleInputChange ({ target: { value } }) {
    setInputValue(value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (inputValue.length === 0 || artist === inputValue) return
    setArtist(inputValue)
    setLoading(true)
    placeholder.current = ''
    setInputValue('')
  }

  return (
    <div className='SearchBox'>
      <h2>Ingresa el nombre de tu artista favorito 🤩</h2>
      <form onSubmit={handleSubmit}>
        <input disabled={loading} type="text" placeholder={placeholder.current} value={inputValue} onChange={handleInputChange} />
        <button type="submit" disabled={loading}>Buscar</button>
      </form>
    </div>
  )
}

export default SearchBox
