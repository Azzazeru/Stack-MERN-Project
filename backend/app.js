import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import ping from './routes/ping.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
// app.use(cors()) // Todos permitidos
app.use(cors({
    origin: true,
    credentials: true,
}))

app.use("/api", authRoutes)
app.use("/api", taskRoutes)
app.use(ping)


export default app;