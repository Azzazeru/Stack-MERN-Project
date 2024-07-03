import { Router } from 'express'
import { pong } from '../controllers/pong.controller.js'


const router = Router()

router.get('/ping', pong)

export default router