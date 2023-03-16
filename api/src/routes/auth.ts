import { Router } from 'express'
import config from '../config';
import * as spotifySearchesController from '../controllers/spotifySearches'

const router = Router();

router.get('/login', (req, res) => {

  var state = new Date().toISOString()
  var scope = 'user-read-email'

  res.redirect('https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    response_type: 'code',
    client_id: config.spotify.CLIENT_ID,
    scope,
    redirect_uri: config.spotify.URL_CALLBACK,
    state
  }).toString() )
})

router.get('/callback', (req, res) => {
  const { error, code, state } = req.query

  if( error ) return res.status(401).json({msg: 'Access denied'})
  return res.status(200).send(code)
})

export default router;