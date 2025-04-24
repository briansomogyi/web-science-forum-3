import express from 'express'
import cors from 'cors'
import getRoutes from './routes/getRoutes.js'
import postRoutes from './routes/postRoutes.js'
import putRoutes from './routes/putRoutes.js'
import deleteRoutes from './routes/deleteRoutes.js'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Use routes
app.use('/api/items', getRoutes) // GET routes
app.use('/api/items', postRoutes) // POST routes
app.use('/api/items', putRoutes) // PUT routes
app.use('/api/items', deleteRoutes) // DELETE routes

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
