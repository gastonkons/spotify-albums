import { Request, Response } from "express";
import * as spotifyServices from "../services/spotify";
import { createSpotifySearchHistory } from "../services/spotifySearchHistory";

export const search = async (req: Request, res: Response) => {
  let { q, limit, offset } = req.query
  if(!q) return res.status(400).send()
  
  const artist = await spotifyServices.searchArtist({ value: decodeURIComponent(q.toString()) })

  if( !artist ) return res.status(404).json({msg: "🤷‍♀️ No results", items: []})

  if(!limit) limit = "20"
  if(!offset) offset = "0"

  const albums = await spotifyServices.searchAlbums({ artist, limit: String(limit), offset: String(offset) })

  if( !albums ) return res.status(404).json({msg: "🤷‍♀️ No results", items: []})

  const createHistory = {
    ip_address: req.clientIp === '::1' ? '127.0.0.1' : req.clientIp as string,
    artist_name: artist.name,
    search_time: new Date()
  }

  createSpotifySearchHistory({ searchHistory: createHistory })

  return res.status(200).json(albums)
}