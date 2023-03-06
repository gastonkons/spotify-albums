import { Router } from 'express'
import * as spotifySearchHistoryController from '../controllers/spotifySearchHistory'

const router = Router();

router.get('/', spotifySearchHistoryController.findAll)
router.get('/:id', spotifySearchHistoryController.findById)
router.post('/', spotifySearchHistoryController.create)

export default router;