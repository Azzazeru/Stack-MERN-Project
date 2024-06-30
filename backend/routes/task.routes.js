import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, postTask, putTask, deleteTask } from '../controllers/task.controller.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, postTask)
router.put('/tasks/:id', authRequired, putTask)
router.delete('/tasks/:id', authRequired, deleteTask)

export default router