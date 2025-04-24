import express from 'express'
const router = express.Router()

// Example data
let items = []

// 1. Add a single item
router.post('/', (req, res) => {
    const { name } = req.body
    const newItem = { id: items.length + 1, name }
    items.push(newItem)
    res.status(201).json(newItem)
})

// 2. Add multiple items
router.post('/bulk', (req, res) => {
    const { newItems } = req.body
    newItems.forEach((item, index) => {
        items.push({ id: items.length + 1, name: item.name || `New Item ${index + 1}` })
    })
    res.status(201).json({ message: `${newItems.length} items added`, items })
})

// 3. Add item with metadata
router.post('/metadata', (req, res) => {
    const { name, description } = req.body
    const newItem = { id: items.length + 1, name, description }
    items.push(newItem)
    res.status(201).json(newItem)
})

// 4. Clone an existing item
router.post('/clone/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const item = items.find((item) => item.id === id)
    if (item) {
        const clonedItem = { ...item, id: items.length + 1 }
        items.push(clonedItem)
        res.status(201).json(clonedItem)
    } else {
        res.status(404).json({ error: 'Item not found' })
    }
})

// 5. Add unique items
router.post('/unique', (req, res) => {
    const { name } = req.body
    if (items.find((item) => item.name === name)) {
        return res.status(400).json({ error: 'Item already exists' })
    }
    const newItem = { id: items.length + 1, name }
    items.push(newItem)
    res.status(201).json(newItem)
})

export default router
