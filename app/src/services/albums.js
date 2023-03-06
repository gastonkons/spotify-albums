import { INITIAL_OFFSET, RANGE_OF_RESULTS } from '../constants'

const API_URL = 'http://localhost:5000'

export async function getAlbumsFromArtistName ({ name, limit = RANGE_OF_RESULTS, offset = INITIAL_OFFSET }) {
  const url = `${API_URL}/api/search`
  const queryParams = new URLSearchParams({
    q: name,
    limit,
    offset
  })
  const urlWithParams = `${url}?${queryParams.toString()}`

  const resp = await fetch(urlWithParams)
  return await resp.json()
}
