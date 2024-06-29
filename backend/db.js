import mongoose from 'mongoose'
import { URI } from './config.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}