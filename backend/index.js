import express from 'express'
import cors from 'cors'
import pg from 'pg'
import {FRONTEND_URL, DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT, PORT} from './config.js'


const app = express()
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
})
app.use(cors({
    origin: FRONTEND_URL
}))

app.get('/ping',  async (req, res) => {

    const result = await pool.query('SELECT NOW()')
    res.send({
        pong: result.rows[0].now
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})