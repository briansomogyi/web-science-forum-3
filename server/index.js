import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

// Middleware
app.use(cors())
app.use(express.json())

// Example in-memory data storage
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
]

// ---- ENDPOINTS ----

// 1. GET: Fetch the first 5 items (minim)
app.get('/api/items', (req, res) => {
    const limitedItems = items.slice(0, 5) // Return the first 5 items
    res.json(limitedItems)
})

// 2. POST: Add 5 new items (minim)
app.post('/api/items', (req, res) => {
    const { newItems } = req.body // Assume the client sends an array of 5 new items

    if (!Array.isArray(newItems) || newItems.length !== 5) {
        return res
            .status(400)
            .json({ error: 'You must send exactly 5 items in an array' })
    }

    newItems.forEach((item, index) => {
        items.push({ id: items.length + 1, name: item.name || `New Item ${index}` })
    })

    res.status(201).json({ message: '5 items added successfully', items })
})

// 3. PUT: Update the first 5 items (minim)
app.put('/api/items', (req, res) => {
    const { updatedItems } = req.body // Assume the client sends an array of 5 updated items

    if (!Array.isArray(updatedItems) || updatedItems.length !== 5) {
        return res
            .status(400)
            .json({ error: 'You must send exactly 5 updated items in an array' })
    }

    updatedItems.forEach((item, index) => {
        if (items[index]) {
            items[index].name = item.name || `Updated Item ${index + 1}` // Update existing items
        }
    })

    res.json({ message: '5 items updated successfully', items })
})

// 4. DELETE: Remove the first 2 items (minim)
app.delete('/api/items', (req, res) => {
    if (items.length < 2) {
        return res.status(400).json({ error: 'Not enough items to delete' })
    }

    // Remove the first 2 items
    const deletedItems = items.splice(0, 2)
    res.json({
        message: '2 items deleted successfully',
        deletedItems,
        remainingItems: items,
    })
})

// ---- START SERVER ----
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
