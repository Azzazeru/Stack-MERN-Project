import { Router } from 'express'
import { pong } from '../controllers/pong.controller.js'


const router = Router()

router.get('/ping', pong)

clg

export default router