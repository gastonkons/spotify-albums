/* Credential Options types */

import { Method } from "./routes/index.routes"

export type OptionParams = {
  json: boolean
  method: Method
  body?: unknown
}

export type OptionType = {
  method: Method
  headers?: Headers 
  body?: string
}

/* SearchHistory */

export type SearchHistory = {
  id: number
  ip_address: string
  artist_name: string
  search_time: Date
}

export type SearchHistoryNonCreated = Omit<SearchHistory, 'id'>

/* Artist types */

export type ArtistType = {
  id: string
  name: string
  image: {
    url: string
    height: number
    width: number
  }
  type: 'artist'
  href: string
  genres: string[]
}

/* Album types */

export type SearchAlbumsResponse = {
  limit: number
  offset: number
  items: AlbumType[]
  total: number
}

export type AlbumType = {
  id: string
  name: string
  album_type: 'album' | 'single' | 'compilation' | 'appears_on'
  image: string
  type: 'album'
  release_date: Date
  artist: ArtistType['name']
  url: string
}

export type AlbumTypeResult = Omit<AlbumType, 'image'> & {
  images: { url: string }[]
  external_urls: {
    spotify: string
  }
}