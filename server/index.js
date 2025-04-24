import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000 // Change the port number here

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!')
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is data from the backend' })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
