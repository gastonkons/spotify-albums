import { Router } from 'express'

import spotifySearchHistoryRoutes from './spotifySearchHistory'
import spotifySearchesRoutes from './spotifySearches'

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

const router = Router()

router.use('/api/history', spotifySearchHistoryRoutes)
router.use('/api/search', spotifySearchesRoutes)

router.use('*', (_, res) => {
  res.status(404).send('🤷‍♀️ 404 - Not found')
})

export default router