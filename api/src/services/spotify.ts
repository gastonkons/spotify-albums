import { Method } from "../routes/index.routes"
import type { AlbumTypeResult, ArtistType, OptionParams, OptionType, SearchAlbumsResponse } from "../types"
import config from "../config"

const { spotify } = config

/* Generate Credentials for Spotify */

export const generateApiOptions = async ({ json = false, method = Method.GET, body }: OptionParams): Promise<OptionType> => {
  const options: OptionType = {
    method
  }
  const headers = new Headers()
  const token = await generateApiToken()
  
  if (!token || token.length == 0) throw new Error('Token failed') 

  headers.append('Authorization', token)
  if (json) headers.append('Content-Type', 'application/json')

  options.headers = headers

  if( body ) options.body = JSON.stringify(body)

  return options
}

const generateApiToken = async () => {
  try {
    const headers = new Headers()
    headers.append('Authorization', 'Basic ' + (Buffer.from(spotify.CLIENT_ID + ':' + spotify.CLIENT_SECRET).toString('base64')))
    headers.append('Content-Type', 'application/x-www-form-urlencoded')

    const urlencoded = new URLSearchParams()
    urlencoded.append("grant_type", "client_credentials")

    const result = await fetch(spotify.URL_TOKEN, {
      method: Method.POST,
      headers,
      body: urlencoded
    }).then(resp => resp.json())

    return `${result.token_type} ${result.access_token}`

  } catch( err ) {
    console.error('Generate Token Error', err )
    return ''
  }
}

/* Search Artist */
export async function searchArtist( { value, limit, offset }: { value: string, limit?: string, offset?: string } ): Promise<ArtistType | null> {
  const options = await generateApiOptions({method: Method.GET, json: true})
  const url = `${spotify.URL_API}/search`
  const queryParams = new URLSearchParams({
    type: 'artist',
    limit: limit ? limit : '1',
    q: value.trim()
  })

  if (offset) queryParams.append('offset', offset)

  const urlWithParams = `${url}?${queryParams.toString()}`

  const result = await fetch(urlWithParams, options).then(res => res.json())

  const { artists } = result
  const { items } = artists
  
  if( items && items.length === 0) return null

  const artist: ArtistType = {
    id: items[0].id,
    name: items[0].name,
    image: items[0].images[0],
    type: items[0].type,
    href: items[0].href,
    genres: items[0].genres
  }
  return artist
}

/* Search Albums from Artist */
export async function searchAlbums( { artist, limit, offset }: { artist: ArtistType, limit: string, offset: string } ): Promise<SearchAlbumsResponse> {
  const options = await generateApiOptions({method: Method.GET, json: true})
  const url = `${spotify.URL_API}/artists/${artist.id}/albums`
  
  const queryParams = new URLSearchParams({
    offset: offset,
    limit: limit
  })

  const urlWithParams = `${url}?${queryParams.toString()}`

  console.log(urlWithParams, options)

  const result = await fetch(urlWithParams, options).then(res => res.json())

  if(!result.items) {
    return {
      items: [],
      limit: 0,
      offset: 0,
      total: 0
    }
  }

  result.items = result.items.map((item: AlbumTypeResult) => ({
    id: item.id,
    name: item.name,
    album_type: item.album_type,
    image: item.images[0].url,
    type: item.type,
    release_date: new Date(item.release_date),
    artist: artist.name,
    url: item.external_urls.spotify
  }))
  return result
}