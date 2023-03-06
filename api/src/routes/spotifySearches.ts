import { Router } from 'express'
import * as spotifySearchesController from '../controllers/spotifySearches'

const router = Router();

router.get('/', spotifySearchesController.search)

export default router;