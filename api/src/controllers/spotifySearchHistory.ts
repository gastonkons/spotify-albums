import { Request, Response } from 'express'
import SpotifySearchHistory from "../models/spotifySearchHistory"

export const findAll = async (req: Request, res: Response) => {
  const resp = await SpotifySearchHistory.findAll({
    order: [ ['id', 'DESC'] ]
  })
  return res.json(resp)
}

export const findById = async (req: Request, res: Response) => {
  const { id } = req.params
  const resp = await SpotifySearchHistory.findByPk(id)
  return res.json(resp)
} 

export const create = async (req: Request, res: Response) => {
  const { artist } = req.body

  const createHistory = {
    ip_address: req.clientIp === '::1' ? '127.0.0.1' : req.clientIp as string,
    artist_name: artist,
    search_time: new Date()
  }

  const historyCreated = await SpotifySearchHistory.create( createHistory )
  return res.json(historyCreated)
} 